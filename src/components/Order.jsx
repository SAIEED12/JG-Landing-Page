"use client";

import React, { useState } from "react";
import { Truck, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { toast } from "@heroui/react";
import { useRouter } from "next/navigation";

const productImages = [
  "/KJG-01.webp",
  "/KJG-02.webp",
  "/KJG-03.webp",
  "/KJG_Bundle.webp",
];

const packOptions = [
  { id: 1, packs: 1, label: "১ প্যাক", price: 2100 },
  {
    id: 2,
    packs: 2,
    label: "২ প্যাক",
    price: 4200,
    badge: "জনপ্রিয়",
  },
  {
    id: 3,
    packs: 3,
    label: "৩ প্যাক",
    price: 6200,
    badge: "সর্বোচ্চ সাশ্রয়",
  },
];

const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
const toBengaliNumber = (num) =>
  num
    .toLocaleString("en-US")
    .split("")
    .map((ch) => (/[0-9]/.test(ch) ? bengaliDigits[parseInt(ch, 10)] : ch))
    .join("");

const WHATSAPP_NUMBER = "8801673009016";

const PHONE_REGEX = /^\d{11}$/;

const validateForm = ({ name, phone, address }) => {
  const errors = {};

  const trimmedName = name.trim();
  if (!trimmedName) {
    errors.name = "Name is required";
  } else if (trimmedName.length < 3) {
    errors.name = "Name must be at least 3 characters";
  }

  const trimmedPhone = phone.trim();
  if (!trimmedPhone) {
    errors.phone = "Phone number is required";
  } else if (!PHONE_REGEX.test(trimmedPhone)) {
    errors.phone = "Please enter a valid phone number";
  }

  const trimmedAddress = address.trim();
  if (!trimmedAddress) {
    errors.address = "Address is required";
  }

  return errors;
};

const Order = () => {
  const [selectedPack, setSelectedPack] = useState(packOptions[0]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear that field's error as soon as the user edits it
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const totalPrice = selectedPack.price;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // toast("Please fix the form", {
      //   description: "Some fields need your attention.",
      //   variant: "danger",
      //   timeout: 4000,
      // });
      return;
    }

    const apiURL =
      process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000";

    const orderDetails = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      address: formData.address.trim(),

      pack: selectedPack.label,
      quantity: selectedPack.packs,
      totalPrice: totalPrice,

      paymentMethod: "Cash on Delivery",
      orderStatus: "Pending",

      createdAt: new Date().toISOString(),
    };

    setIsSubmitting(true);
    try {
      const res = await fetch(`${apiURL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      });

      if (!res.ok) {
        throw new Error(`Server responded with ${res.status}`);
      }

      const data = await res.json();
      console.log(data);

      toast("অর্ডার সফলভাবে সম্পন্ন হয়েছে!", {
        description: "আমরা শীঘ্রই কল করে অর্ডার কনফার্ম করব।",
        variant: "success",
        timeout: 5000,
      });
      router.push("/order-success");

      // Reset Form
      setFormData({ name: "", phone: "", address: "" });
      setSelectedPack(packOptions[0]);
      setErrors({});
    } catch (err) {
      console.error("Order submission failed:", err);
      toast("অর্ডার সম্পন্ন হয়নি", {
        description: "একটি সমস্যা হয়েছে, আবার চেষ্টা করুন।",
        variant: "danger",
        timeout: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsappOrder = () => {
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // toast("Please fix the form", {
      //   description: "Fix the details before sending to WhatsApp.",
      //   variant: "danger",
      //   timeout: 4000,
      // });
      return;
    }

    const message =
      `আমি কারকুমা জয়েন্ট গার্ড অর্ডার করতে চাই।\n\n` +
      `নাম: ${formData.name.trim()}\n` +
      `ফোন: ${formData.phone.trim()}\n` +
      `ঠিকানা: ${formData.address.trim()}\n` +
      `প্যাক: ${selectedPack.label}\n` +
      `প্যাকের মূল্য: ৳${selectedPack.price}\n` +
      `ডেলিভারি চার্জ: ফ্রি\n` +
      `সর্বমোট: ৳${totalPrice}\n`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const inputClass = (field) =>
    `w-full rounded-lg border bg-white px-4 py-3 font-sans text-sm text-[#1C2530] focus:outline-none focus:ring-2 ${
      errors[field]
        ? "border-red-400 focus:ring-red-200"
        : "border-[#0F3457]/15 focus:ring-[#0F3457]/30"
    }`;

  return (
    <div id="order" className="bg-[#e7eff8] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Image slider */}
          <div className="relative">
            <div className="w-full aspect-square overflow-hidden rounded-2xl bg-[#e2edf7]">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {productImages.map((src, i) => (
                  <div key={i} className="w-full shrink-0">
                    <div className="w-full aspect-square flex items-center justify-center">
                      <Image
                        src={src}
                        alt={`কারকুমা জয়েন্ট গার্ড`}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {productImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === currentSlide ? "bg-[#0F3457] w-6" : "bg-[#0F3457]/30"
                  }`}
                />
              ))}
            </div>

            {/* Nav buttons */}
            <button
              onClick={() =>
                setCurrentSlide(
                  (prev) =>
                    (prev - 1 + productImages.length) % productImages.length,
                )
              }
              className="absolute top-1/2 -translate-y-1/2 left-3 z-10 w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#0F3457] shadow-md cursor-pointer hover:bg-gray-100"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % productImages.length)
              }
              className="absolute top-1/2 -translate-y-1/2 right-3 z-10 w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#0F3457] shadow-md cursor-pointer hover:bg-gray-100"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Right: Order form */}
          <div className="bg-[#F1F5F9] rounded-2xl p-6 md:p-8">
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#0F3457] mb-2">
              এখনই অর্ডার করুন
            </h2>
            <p className="font-sans text-[#1C2530]/70 text-sm mb-6">
              নিচে তথ্য দিয়ে অর্ডার সম্পন্ন করুন — ক্যাশ অন ডেলিভারিতে পেমেন্ট
              করুন।
            </p>

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              {/* Pack selection */}
              <div>
                <label className="block font-sans font-semibold text-[#0F3457] text-sm mb-3">
                  প্যাক সংখ্যা নির্বাচন করুন
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {packOptions.map((option) => {
                    const isSelected = selectedPack.id === option.id;
                    return (
                      <button
                        type="button"
                        key={option.id}
                        onClick={() => setSelectedPack(option)}
                        className={`relative flex flex-col items-center gap-1 rounded-xl border-2 px-3 py-4 text-center ${
                          isSelected
                            ? "border-[#0F3457] bg-white"
                            : "border-transparent bg-white/60 hover:bg-white"
                        }`}
                      >
                        {option.badge && (
                          <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#0F3457] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                            {option.badge}
                          </span>
                        )}
                        {isSelected && (
                          <CheckCircle2
                            size={16}
                            className="absolute top-2 right-2 text-[#0F3457]"
                          />
                        )}
                        <span className="font-serif font-bold text-[#0F3457] text-sm">
                          {option.label}
                        </span>
                        <span className="font-serif font-bold text-[#0F3457] text-3xl mt-1">
                          ৳{toBengaliNumber(option.price)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block font-sans font-semibold text-[#0F3457] text-sm mb-2">
                  আপনার নাম
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="পুরো নাম লিখুন"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={inputClass("name")}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs font-medium text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block font-sans font-semibold text-[#0F3457] text-sm mb-2">
                  ফোন নম্বর
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="01XXXXXXXXX"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  className={inputClass("phone")}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1.5 text-xs font-medium text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Address */}
              <div>
                <label className="block font-sans font-semibold text-[#0F3457] text-sm mb-2">
                  সম্পূর্ণ ঠিকানা
                </label>
                <textarea
                  name="address"
                  rows={3}
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="বাসা/হোল্ডিং, রোড, এলাকা, জেলা"
                  aria-invalid={!!errors.address}
                  aria-describedby={errors.address ? "address-error" : undefined}
                  className={`${inputClass("address")} resize-none`}
                />
                {errors.address && (
                  <p id="address-error" className="mt-1.5 text-xs font-medium text-red-500">
                    {errors.address}
                  </p>
                )}
              </div>

              {/* Payment method */}
              <div>
                <label className="block font-sans font-semibold text-[#0F3457] text-sm mb-2">
                  পেমেন্ট পদ্ধতি{" "}
                </label>
                <label className="flex items-center gap-3 rounded-lg border border-[#0F3457]/15 bg-white px-4 py-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    checked
                    readOnly
                    className="accent-[#0F3457] w-4 h-4"
                  />
                  <Truck size={18} className="text-[#0F3457]" />
                  <span className="font-sans text-sm text-[#1C2530]">
                    ক্যাশ অন ডেলিভারি
                  </span>
                </label>
              </div>

              {/* Order summary */}
              <div className="flex flex-col gap-2 rounded-lg bg-white px-4 py-3 border border-[#0F3457]/10">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-sm font-semibold text-[#1C2530]/70">
                    {toBengaliNumber(selectedPack.packs)} প্যাকের মূল্য
                  </span>
                  <span className="font-sans text-sm font-semibold text-[#1C2530]">
                    ৳{toBengaliNumber(selectedPack.price)}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-sans text-sm font-semibold text-[#1C2530]/70">
                    ডেলিভারি চার্জ
                  </span>
                  <span className="font-sans text-sm font-semibold text-[#1C2530]">
                    ফ্রি
                  </span>
                </div>

                <div className="flex items-center justify-between border-t border-[#0F3457]/10 pt-2 mt-1">
                  <span className="font-sans font-semibold text-sm text-[#0F3457]">
                    সর্বমোট
                  </span>
                  <span className="font-serif font-bold text-2xl text-[#0F3457]">
                    ৳{toBengaliNumber(totalPrice)}
                  </span>
                </div>
              </div>

              <div className="mt-3 flex flex-col gap-3 sm:gap-4">
                {/* Order Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center cursor-pointer gap-2 rounded-full bg-[#1B4C7E] py-4 text-base font-semibold text-white shadow-lg shadow-[#0F3457]/20 transition hover:bg-[#0F3457] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "প্রসেসিং হচ্ছে..." : "অর্ডার করুন"}
                </button>

                {/* WhatsApp Button */}
                <button
                  type="button"
                  onClick={handleWhatsappOrder}
                  className="w-full flex items-center justify-center cursor-pointer gap-2 rounded-full bg-[#25D366] py-4 text-base font-semibold text-white shadow-lg shadow-[#25D366]/20 transition hover:bg-[#1DA851]"
                >
                  <FaWhatsapp size={20} />
                  হোয়াটসঅ্যাপে অর্ডার করুন
                </button>

                {/* Call Button */}
                <a
                  href="tel:+8801673009016"
                  className="w-full flex items-center justify-center cursor-pointer gap-2 rounded-full bg-[#128C7E] py-4 text-base font-semibold text-white shadow-lg shadow-[#128C7E]/20 transition hover:bg-[#075E54]"
                >
                  <FaPhoneAlt size={18} />
                  এখনই কল করুন
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;