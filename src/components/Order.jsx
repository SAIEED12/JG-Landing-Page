"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Truck, CheckCircle2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Button } from "@heroui/react";
import { toast } from "@heroui/react";
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
    price: 6300,
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

const Order = () => {
  const [selectedPack, setSelectedPack] = useState(packOptions[0]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const totalPrice = selectedPack.price + 60;

  const handleSubmit = async(e) => {
    const apiURL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000";

    e.preventDefault();
    const orderDetails = {
      ...formData,
      pack: selectedPack.label,
      price: totalPrice,
      payment: "ক্যাশ অন ডেলিভারি",
    };
    console.log("Order submitted:", orderDetails);

    const res = await fetch(`${apiURL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    }); 

    const data = await res.json();
    console.log(data);

    toast("অর্ডার সফলভাবে সম্পন্ন হয়েছে!", {
      description: "আমরা শীঘ্রই কল করে অর্ডার কনফার্ম করব।",
      variant: "success",
      timeout: 5000,
    });
  };

  const handleWhatsappOrder = () => {
    const message =
      `আমি কারকুমা জয়েন্ট গার্ড অর্ডার করতে চাই।\n\n` +
      `নাম: ${formData.name || "-"}\n` +
      `ফোন: ${formData.phone || "-"}\n` +
      `ঠিকানা: ${formData.address || "-"}\n` +
      `প্যাক: ${selectedPack.label}\n` +
      `প্যাকের মূল্য: ৳${selectedPack.price}\n` +
      `ডেলিভারি চার্জ: ৳60\n` +
      `সর্বমোট: ৳${totalPrice}\n`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div id="order" className="bg-[#e7eff8] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Image slider */}
          <div className="relative">
            <div className="w-full aspect-square flex items-center justify-center">
              <Image
                src={productImages[0]}
                alt={`কারকুমা জয়েন্ট গার্ড`}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Nav buttons */}
            <button className="order-swiper-prev absolute top-1/2 -translate-y-1/2 left-3 z-10 w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#0F3457] shadow-md">
              ‹
            </button>
            <button className="order-swiper-next absolute top-1/2 -translate-y-1/2 right-3 z-10 w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#0F3457] shadow-md">
              ›
            </button>
          </div>

          {/* Right: Order form */}
          <div className="bg-[#F1F5F9] rounded-2xl p-6 md:p-8">
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#0F3457] mb-2">
              এখনই অর্ডার করুন
            </h2>
            <p className="font-sans text-[#1C2530]/70 text-sm mb-6">
              নিচের তথ্য দিয়ে অর্ডার সম্পন্ন করুন — ক্যাশ অন ডেলিভারিতে পেমেন্ট
              করুন।
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
                        className={`relative flex flex-col items-center gap-1 rounded-xl border-2 px-3 py-4 text-center transition-colors ${
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
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="পুরো নাম লিখুন"
                  className="w-full rounded-lg border border-[#0F3457]/15 bg-white px-4 py-3 font-sans text-sm text-[#1C2530] focus:outline-none focus:ring-2 focus:ring-[#0F3457]/30"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-sans font-semibold text-[#0F3457] text-sm mb-2">
                  ফোন নম্বর
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="01XXXXXXXXX"
                  className="w-full rounded-lg border border-[#0F3457]/15 bg-white px-4 py-3 font-sans text-sm text-[#1C2530] focus:outline-none focus:ring-2 focus:ring-[#0F3457]/30"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block font-sans font-semibold text-[#0F3457] text-sm mb-2">
                  সম্পূর্ণ ঠিকানা
                </label>
                <textarea
                  name="address"
                  required
                  rows={3}
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="বাসা/হোল্ডিং, রোড, এলাকা, জেলা"
                  className="w-full rounded-lg border border-[#0F3457]/15 bg-white px-4 py-3 font-sans text-sm text-[#1C2530] focus:outline-none focus:ring-2 focus:ring-[#0F3457]/30 resize-none"
                />
              </div>

              {/* Payment method */}
              <div>
                <label className="block font-sans font-semibold text-[#0F3457] text-sm mb-2">পেমেন্ট পদ্ধতি  </label>
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
                    ৳{toBengaliNumber(60)}
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

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#0F3457] hover:bg-[#1B4C7E] transition-colors text-white font-sans font-semibold text-base py-4 rounded-full shadow-lg shadow-[#0F3457]/20 cursor-pointer"
              >
                অর্ডার করুন
              </button>

              {/* WhatsApp order */}
              <button
                type="button"
                onClick={handleWhatsappOrder}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] transition-colors text-white font-sans font-semibold text-base py-4 rounded-full shadow-lg shadow-[#25D366]/20 cursor-pointer"
              >
                <FaWhatsapp size={20} />
                হোয়াটসঅ্যাপে অর্ডার করুন
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;