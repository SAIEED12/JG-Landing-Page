'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CircleCheck } from 'lucide-react';
import Image from 'next/image';
import { Chip } from '@heroui/react';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 },
  },
};

const Hero = () => {
  const badges = [
    'USDA অর্গানিক',
    'GMP সার্টিফায়েড',
    'কোন পার্শ্বপ্রতিক্রিয়া নেই',
  ];

  return (
    <div className="relative overflow-hidden bg-[#F8FAFC]">
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: copy */}
        <motion.div
          className="text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-[#0F3457]/15 text-[#0F3457] text-sm font-semibold px-4 py-2 rounded-full mb-5"
          >
            <ShieldCheck size={14} />
            অস্টিওআর্থ্রাইটিসের যত্নে বিজ্ঞানসম্মত সমাধান
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="font-serif font-bold text-3xl md:text-5xl leading-snug text-[#0F3457] mb-5"
          >
            প্রতিদিনের চলাফেরায় ফিরে আসুক আগের সেই স্বস্তি
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-sans text-[#1C2530] text-base md:text-lg max-w-md mx-auto md:mx-0 mb-7"
          >
            প্রাকৃতিক কারকিউমিন, গ্লুকোসামিন ও কনড্রয়টিনের
            সমন্বয়ে তৈরি — কারকুমা জয়েন্ট গার্ড, যা জয়েন্টের কার্টিলেজ সুরক্ষা দিয়ে
            মুভমেন্টে আত্মবিশ্বাস ফিরিয়ে আনে।
          </motion.p>

          {/* Trust badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center md:justify-start gap-2 mb-7"
          >
            {badges.map((badge) => (
              <span
                key={badge}
                className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#0F3457] text-xs font-semibold px-3 py-1.5 rounded-md"
              >
                <CircleCheck size={13} />
                {badge}
              </span>
            ))}
          </motion.div>

          {/* Price + CTA */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center md:justify-start gap-3 mb-6"
          >
            <span className="font-serif font-bold text-2xl text-[#0F3457]">
              ৳২,১০০
            </span>
            <Chip color="success" variant="primary" className="text-xs font-semibold">
              Free Home Delivery
            </Chip>
          </motion.div>

          <motion.a
            variants={itemVariants}
            href="#order"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-[#0F3457] hover:bg-[#1B4C7E] transition-colors text-white font-sans font-semibold text-base px-8 py-4 rounded-full shadow-lg shadow-[#0F3457]/20"
          >
            এখনই অর্ডার করুন →
          </motion.a>
        </motion.div>

        {/* Right: product image */}
        <motion.div
          className="relative flex items-center justify-center w-full"
          variants={imageVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div
            className="absolute w-172 h-120 bg-[#8FBCE8]/25 rounded-full blur-3xl"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <Image
            src="/hero.png"
            width={340}
            height={340}
            alt="কারকুমা জয়েন্ট গার্ড"
            className="relative z-10 rounded-2xl w-full max-w-[500px] h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;