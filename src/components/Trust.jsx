'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  BadgeCheck,
  ShieldCheck,
  Wheat,
  FlaskConical,
  Microscope,
  Factory,
  CircleCheck,
} from 'lucide-react';

const headVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, rotateY: -90 },
  show: {
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

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
          <motion.span
            variants={headVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#0F3457]/5 text-[#0F3457] text-xs font-semibold px-4 py-2 rounded-full mb-5"
          >
            <CircleCheck size={14} />
            বিশ্বাসযোগ্যতা ও মানের নিশ্চয়তা
          </motion.span>
          <motion.h2
            variants={headVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="font-serif font-bold text-2xl md:text-4xl text-[#0F3457] leading-snug"
          >
            কারকুমা জয়েন্ট গার্ড কেন নিরাপদ ও কার্যকর?
          </motion.h2>
        </div>

        {/* Trust cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
          style={{ perspective: 1000 }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={gridVariants}
        >
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                style={{ transformStyle: 'preserve-3d' }}
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
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Trust;