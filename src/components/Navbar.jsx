'use client'
import React from "react";
import { Phone, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Chip } from "@heroui/react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname()
  if(pathname.includes('dashboard')){
    return null
  }
  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#081C30] text-white text-sm sticky top-0 z-60">
        <div className="max-w-7xl mx-auto flex justify-center py-2">
          <p className="font-serif tracking-wide flex">
            তাহদীথ শপে আপনাকে স্বাগতম &nbsp; | &nbsp; <Phone size={16} />
            &nbsp; +8801673-009016
          </p>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-6 z-50 bg-white/10 backdrop-blur-3xl border-b border-white/10 shadow-sm">
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6 ">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <a href="#home">
              <Image
                src="/logo.jpg"
                alt="Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
            </a>
            <h2 className="font-serif text-md md:text-xl font-bold text-[#081C30]">
              <a href="#home">তাহদীথ শপ</a>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Chip
              color="warning"
              variant="primary"
              size="lg"
              className="text-base px-4 py-2 font-semibold"
            >
              কারকুমা জয়েন্ট গার্ড
            </Chip>
          </div>

          {/* Order Button */}
          <a
            href="#Order"
            className="flex items-center gap-2 bg-[#1D4F91] hover:bg-[#163d70] text-white px-4 py-2 md:px-6 md:py-2 rounded-full"
          >
            <ShoppingCart size={16} />
            <span className="font-semibold font-serif text-sm md:text-lg">
              অর্ডার করুন
            </span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
