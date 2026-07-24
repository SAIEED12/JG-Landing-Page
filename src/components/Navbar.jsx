import React from "react";
import { Phone, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#081C30] text-white text-sm sticky top-0 z-60">
        <div className="max-w-7xl mx-auto flex justify-center py-2">
          <p className="font-serif tracking-wide flex">
            তাহদীথ শপে আপনাকে স্বাগতম &nbsp; | &nbsp; <Phone size={16}/> 
            &nbsp; +8801673-009016
          </p>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-6 z-50 bg-white/10 backdrop-blur-3xl border-b border-white/10 shadow-sm">
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6 ">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <Link href="#Navbar">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={48}
              height={48}
              className="rounded-full"
            />
            </Link>
            <h2 className="font-serif text-md md:text-xl font-bold text-[#081C30]">তাহদীথ শপ</h2>
          </div>

          {/* Cart Button */}
          <Link href="#cart" className="flex items-center gap-2 bg-[#1D4F91] hover:bg-[#163d70] text-white px-4 py-2 md:px-6 md:py-2 rounded-full transition">
            <ShoppingCart size={16} />
            <span className="font-semibold font-serif text-sm md:text-lg">অর্ডার করুন</span>
          </Link>

        </div>
      </nav>
    </>
  );
};

export default Navbar;