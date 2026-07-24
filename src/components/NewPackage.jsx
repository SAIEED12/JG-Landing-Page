import { Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const NewPackage = () => {
  return (
    <div className="bg-white border-t border-[#0F3457]/10 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center bg-white border border-[#0F3457]/10 shadow-xl shadow-[#0F3457]/5 rounded-2xl">
        <Chip color="success" variant="primary" className="mb-5 mt-5 font-semibold">
          নতুন প্যাকেজিং
        </Chip>
        <h2 className="font-serif font-bold text-2xl md:text-4xl text-[#0F3457] leading-snug mb-10">
          পরিচিত সেই যত্ন, আরও আধুনিক প্যাকেজিংয়ে
        </h2>

        <div className="w-full max-w-xl mx-auto">
          <Image
            src="/new-package.webp"
            width={500}
            height={200}
            alt="কারকুমা জয়েন্ট গার্ড নতুন প্যাকেজ"
            className="w-full h-auto rounded-2xl mb-5"
          />
        </div>
      </div>
    </div>
  );
};

export default NewPackage;