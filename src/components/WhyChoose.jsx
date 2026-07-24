import React from 'react';
import Image from 'next/image';

const WhyChoose = () => {
  const points = [
    {
      num: '০১',
      text: 'আপনি অস্টিওআর্থ্রাইটিসে আক্রান্ত হয়ে থাকেন।',
    },
    {
      num: '০২',
      text: 'হালকা অস্বস্তি থেকে শুরু হয়ে জয়েন্টের ব্যথা এখন নড়াচড়াতেও কষ্ট দিচ্ছে — জয়েন্ট শক্ত বা ফোলা অনুভব হচ্ছে।',
    },
    {
      num: '০৩',
      text: 'সিঁড়ি ওঠা-নামা, বাজার যাওয়া বা নামাজে দাঁড়ানোর সেই আগের সাবলীলতা ফিরিয়ে আনতে চান।',
    },
  ];

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: image */}
        <div className="order-2 md:order-1">
          <Image
            src="/knee-pain.png"
            alt="জয়েন্ট ব্যথা"
            className="rounded-2xl w-full object-cover"
            width={500}
            height={400}
          />
        </div>

        {/* Right: copy */}
        <div className="order-1 md:order-2 text-center md:text-left">
          <span className="inline-block bg-[#0F3457]/5 text-[#0F3457] text-xs font-semibold px-4 py-2 rounded-full mb-5">
            এই পণ্যটি কি আপনার জন্য?
          </span>

          <h2 className="font-serif font-bold text-2xl md:text-4xl text-[#0F3457] mb-8 leading-snug">
            লক্ষণগুলো মিলিয়ে দেখুন
          </h2>

          <div className="flex flex-col gap-4">
            {points.map((point) => (
              <div
                key={point.num}
                className="flex items-start gap-4 bg-[#F1F5F9] border-l-4 border-[#0F3457] rounded-xl px-5 py-4 text-left"
              >
                <span className="font-serif font-bold text-[#1B4C7E] text-lg shrink-0">
                  {point.num}
                </span>
                <p className="font-sans text-[#1C2530] text-sm md:text-base">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;