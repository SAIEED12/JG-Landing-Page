"use client";

import Link from "next/link";
import { CheckCircle2, ArrowLeft, PackageCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const OrderSuccess = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EAF3FB] via-white to-[#DCECF8] flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl border border-slate-200 p-8 md:p-10 text-center">
        {/* Success Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-14 w-14 text-green-600" />
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-3xl md:text-4xl font-bold text-[#0F3457]">
          🎉 আপনার অর্ডারটি সফল হয়েছে!
        </h1>

        <p className="mt-4 text-lg text-slate-700 leading-8">
          আমাদের ওপর আস্থা রাখার জন্য আন্তরিক ধন্যবাদ।
        </p>

        <p className="mt-2 text-slate-600 leading-8">
          আপনার অর্ডারটি আমরা সফলভাবে গ্রহণ করেছি। খুব শীঘ্রই আমাদের একজন
          প্রতিনিধি আপনার দেওয়া ফোন নম্বরে যোগাযোগ করে অর্ডারটি নিশ্চিত করবেন।
        </p>

        {/* Next Steps */}
        <div className="mt-8 rounded-2xl border border-[#D8E5F2] bg-[#F5F9FD] p-6 text-left">
          <div className="flex items-start gap-3">
            {/* <PackageCheck className="text-[#0F3457] mt-1" size={24} /> */}

            <div>

              <ul className="mt-4 space-y-3 text-slate-700 list-disc list-inside">
                <li>আমাদের প্রতিনিধি আপনাকে ফোন করে অর্ডার নিশ্চিত করবেন।</li>

                <li>অর্ডার নিশ্চিত হওয়ার পর পণ্যটি দ্রুত পাঠিয়ে দেওয়া হবে।</li>

                <li>পণ্য হাতে পাওয়ার পর মূল্য পরিশোধ করবেন।</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#0F3457] px-6 py-4 text-white font-semibold transition hover:bg-[#0B2944]"
          >
            <ArrowLeft size={18} />
            হোম পেজে ফিরে যান
          </Link>

          <a
            href="https://wa.me/8801673009016"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-white font-semibold transition hover:bg-[#1DA851]"
          >
            <FaWhatsapp size={20} />
            হোয়াটসঅ্যাপে যোগাযোগ করুন
          </a>
        </div>

        {/* Footer */}
        <div className="mt-8 border-t pt-6">
          <p className="text-sm text-slate-500">
            যেকোনো প্রয়োজনে আমাদের সাথে যোগাযোগ করুন
          </p>

          <p className="mt-2 text-xl font-bold text-[#0F3457]">
            +880 1673-009016
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;