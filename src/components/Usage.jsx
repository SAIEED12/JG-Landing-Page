import React from 'react';
import { Clock, CalendarCheck, Snowflake } from 'lucide-react';

const Usage = () => {
  const steps = [
    {
      icon: Clock,
      label: 'প্রতিদিন',
      desc: '১টি ক্যাপসুল, দৈনিক ৩ বার — অথবা চিকিৎসকের পরামর্শমতো।',
    },
    {
      icon: CalendarCheck,
      label: 'ধারাবাহিকভাবে',
      desc: 'কাঙ্ক্ষিত ফলাফলের জন্য কমপক্ষে ৩ মাস টানা সেবন করা ভালো।',
    },
    {
      icon: Snowflake,
      label: 'সংরক্ষণ',
      desc: 'আলো থেকে দূরে, ঠান্ডা ও শুষ্ক স্থানে সংরক্ষণ করুন।',
    },
  ];

  return (
    <div className="bg-[#022749] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section head */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-white/10 text-[#8FBCE8] text-xs font-semibold px-4 py-2 rounded-full mb-5">
            <Clock size={14} />
            সেবনবিধি
          </span>
          <h2 className="font-serif font-bold text-2xl md:text-4xl text-white leading-snug">
            সহজ তিনটি নিয়ম মেনে চলুন
          </h2>
        </div>

        {/* Usage cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.label}
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-8 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-white/10 border-2 border-[#8FBCE8] flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-[#8FBCE8]" strokeWidth={1.8} />
                </div>
                <h3 className="font-serif font-bold text-[#ebe2a2] text-base mb-2">
                  {step.label}
                </h3>
                <p className="font-sans text-white/80 text-sm">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Usage;