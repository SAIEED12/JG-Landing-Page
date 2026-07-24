import React from 'react';
import {
  BadgeCheck,
  ShieldCheck,
  Wheat,
  FlaskConical,
  Microscope,
  Factory,
  CircleCheck,
} from 'lucide-react';

const Trust = () => {
  const points = [
    {
      icon: BadgeCheck,
      title: 'USDA অর্গানিক উপাদান',
      desc: 'মৌলিক উপাদানগুলো সার্টিফায়েড অর্গানিক।',
    },
    {
      icon: ShieldCheck,
      title: 'GMP ও ISO 22000',
      desc: 'বিশ্বমানের নিখুঁত মান নিয়ন্ত্রণ ও নিরাপত্তা।',
    },
    {
      icon: Wheat,
      title: 'সম্পূর্ণ ফুড গ্রেড',
      desc: 'কোনো সিনথেটিক উপাদান নেই।',
    },
    {
      icon: FlaskConical,
      title: 'বিজ্ঞানভিত্তিক ফর্মুলেশন',
      desc: 'ব্যালান্সড ডোজ, প্রমাণভিত্তিক গঠন।',
    },
    {
      icon: Microscope,
      title: 'ক্লিনিক্যালি টেস্টেড',
      desc: 'নিরাপদতা ও কার্যকারিতা পরীক্ষিত।',
    },
    {
      icon: Factory,
      title: 'বাংলাদেশে তৈরি',
      desc: 'বৈশ্বিক মানসম্পন্ন উৎপাদন ব্যবস্থা।',
    },
  ];

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section head */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-[#0F3457]/5 text-[#0F3457] text-xs font-semibold px-4 py-2 rounded-full mb-5">
            <CircleCheck size={14} />
            বিশ্বাসযোগ্যতা ও মানের নিশ্চয়তা
          </span>
          <h2 className="font-serif font-bold text-2xl md:text-4xl text-[#0F3457] leading-snug">
            কারকুমা জয়েন্ট গার্ড কেন নিরাপদ ও কার্যকর?
          </h2>
        </div>

        {/* Trust cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="flex items-start gap-4 bg-[#F1F5F9] rounded-2xl p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0F3457] flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-[#8FBCE8]" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#0F3457] text-sm md:text-base mb-1">
                    {point.title}
                  </h3>
                  <p className="font-sans text-[#1C2530] text-xs md:text-sm">
                    {point.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Trust;