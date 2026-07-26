'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { TbPercentage100 } from 'react-icons/tb';

const Certifications = () => {
  const certs = [
    { image: '/ISO.webp', label: 'ISO 22000' },
    { image: '/GMP.webp', label: 'GMP সার্টিফায়েড' },
    { image: '/usda.png', label: 'USDA অর্গানিক' },
    { image: '/FDA_Registered.webp', label: 'FDA রেজিস্টার্ড ফ্যাসিলিটি' },
    { image: '/halal-logo.webp', label: 'হালাল সার্টিফিকেট BSTI' },
  ];

  return (
    <div className="bg-[#F1F5F9] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        {/* Section head */}
        <div>
          <span className="inline-flex items-center gap-2 bg-[#8FBCE8]/20 text-[#0F3457] text-xs font-semibold px-4 py-2 rounded-full mb-5">
            <TbPercentage100 /> প্রমাণিত গুণগত মান
          </span>
          <h2 className="font-serif font-bold text-2xl md:text-4xl text-[#0F3457] leading-snug mb-14">
            বিশ্বমানের স্বীকৃতি ও সার্টিফিকেশন
          </h2>
        </div>

        {/* Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            navigation={{
              nextEl: '.cert-swiper-next',
              prevEl: '.cert-swiper-prev',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {certs.map((cert) => (
              <SwiperSlide key={cert.label}>
                <div className="flex flex-col items-center gap-4 pb-2">
                  <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center">
                    <Image
                      width={200}
                      height={200}
                      src={cert.image}
                      alt={cert.label}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <p className="font-sans text-[#1C2530] text-xs md:text-sm">{cert.label}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom nav buttons */}
          <button className="cert-swiper-prev absolute top-1/3 -translate-y-1/2 -left-2 md:-left-5 z-10 w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#0F3457] shadow-md">
            <ChevronLeft size={18} />
          </button>
          <button className="cert-swiper-next absolute top-1/3 -translate-y-1/2 -right-2 md:-right-5 z-10 w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#0F3457] shadow-md">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certifications;