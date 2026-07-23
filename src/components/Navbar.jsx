import React from "react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#081C30] text-white text-xs">
        <div className="max-w-7xl mx-auto flex justify-center py-2">
          <p>
            তাহদীথ শপে আপনাকে স্বাগতম &nbsp; | &nbsp; কল করুন:
            096 11 409 509
          </p>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto h-24 flex items-center justify-between px-6">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={48}
              height={48}
              className="rounded-full"
            />
            <h2 className="font-serif text-xl font-bold text-[#081C30]">তাহদীথ শপ</h2>
          </div>

          {/* Cart Button */}
          <Link href="#cart" className="flex items-center gap-2 bg-[#1D4F91] hover:bg-[#163d70] text-white px-6 py-2 rounded-full transition">
            <ShoppingCart size={16} />
            <span className="font-semibold font-sans">অর্ডার করুন</span>
          </Link>

        </div>
      </nav>
    </>
  );
};

export default Navbar;