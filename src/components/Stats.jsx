import { Info } from 'lucide-react';
import React from 'react';

const Stats = () => {
  const stats = [
    { number: '৬০ কোটি+', label: 'মানুষ বিশ্বজুড়ে ভুগছেন' },
    { number: '৯০%', label: 'জয়েন্ট ব্যথার মূল কারণ' },
    { number: '৩ মাস', label: 'প্রয়োজন কাঙ্ক্ষিত ফলাফলের জন্য' },
    { number: '৯০টি ক্যাপসুল', label: 'প্রতি বোতলে, ১ মাসের জন্য' },
  ];

  return (
    <div className="bg-[#081C30] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section head */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="items-center inline-block bg-white/10 text-[#8FBCE8] text-xs font-semibold px-4 py-2 rounded-full mb-5">
           <div className='flex gap-2'>
           <Info size={14}/>  
           পরিসংখ্যান যা বলছে
           </div>
          </span>
          <h2 className="font-serif font-bold text-2xl md:text-4xl text-white mb-4 leading-snug">
            অস্টিওআর্থ্রাইটিস আজ বিশ্বে পঙ্গুত্বের অন্যতম প্রধান কারণ
          </h2>
          <p className="font-sans text-white/70 text-sm md:text-base">
            জয়েন্টের ব্যথা শুধু শরীরেই নয়, বরং পুরো জীবনযাপনে প্রভাব ফেলে —
            কার্টিলেজ ক্ষয় হয়ে যাওয়ায় তৈরি হয় ব্যথা, ফোলাভাব ও চলাফেরায় সীমাবদ্ধতা।
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-2xl px-5 py-8 text-center"
            >
              <span className="font-serif font-bold text-[#8FBCE8] text-2xl md:text-3xl block mb-2">
                {stat.number}
              </span>
              <span className="font-sans text-white/80 text-xs md:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;