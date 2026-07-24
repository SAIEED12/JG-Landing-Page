import React from 'react';
import { ShieldCheck, CircleCheck } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const badges = [
    'USDA অর্গানিক',
    'GMP সার্টিফায়েড',
    'কোন পার্শ্বপ্রতিক্রিয়া নেই',
  ];

  return (
    <div className="relative overflow-hidden bg-[#F8FAFC]">
      {/* Soft radial accent, navy-tinted */}
      {/* <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#8FBCE8]/20 rounded-full  -translate-y-1/3 translate-x-1/4" /> */}

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: copy */}
        <div className="text-center md:text-left">
          <span className="inline-flex items-center gap-2 bg-[#0F3457]/15 text-[#0F3457] text-sm font-semibold px-4 py-2 rounded-full mb-5">
            <ShieldCheck size={14} />
            অস্টিওআর্থ্রাইটিসের যত্নে বিজ্ঞানসম্মত সমাধান
          </span>

          <h1 className="font-serif font-bold text-3xl md:text-5xl leading-snug text-[#0F3457] mb-5">
            প্রতিদিনের চলাফেরায় ফিরে আসুক আগের সেই স্বস্তি
          </h1>

          <p className="font-sans text-[#1C2530] text-base md:text-lg max-w-md mx-auto md:mx-0 mb-7">
            প্রাকৃতিক কারকিউমিন, গ্লুকোসামিন ও কনড্রয়টিনের
            সমন্বয়ে তৈরি — কারকুমা জয়েন্ট গার্ড, যা জয়েন্টের কার্টিলেজ সুরক্ষা দিয়ে
            মুভমেন্টে আত্মবিশ্বাস ফিরিয়ে আনে।
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-7">
            {badges.map((badge) => (
              <span
                key={badge}
                className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#0F3457] text-xs font-semibold px-3 py-1.5 rounded-md"
              >
                <CircleCheck size={13} />
                {badge}
              </span>
            ))}
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <span className="font-serif font-bold text-2xl text-[#0F3457]">
              ৳২,১৭০
            </span>
            <span className="bg-[#0F3457] text-white text-xs font-bold px-3 py-1 rounded-full">
              ৪% ছাড়
            </span>
          </div>

          
           <a href="#order" className="inline-block bg-[#0F3457] hover:bg-[#1B4C7E] transition-colors text-white font-sans font-semibold text-base px-8 py-4 rounded-full shadow-lg shadow-[#0F3457]/20">
            এখনই অর্ডার করুন →
          </a>
        </div>

        {/* Right: product image */}
<div className="relative flex items-center justify-center w-full">
  <div className="absolute w-172 h-120 bg-[#8FBCE8]/25 rounded-full blur-3xl" />
  <Image
    src="/hero.png"
    width={340}
    height={340}
    priority
    quality={100}
    alt="কারকুমা জয়েন্ট গার্ড"
    className="relative z-10 rounded-2xl w-full max-w-[470px] h-auto"
  />
</div>
      </div>
    </div>
  );
};

export default Hero;