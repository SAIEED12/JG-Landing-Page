'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Bone, Footprints, Scale, Workflow } from 'lucide-react';

const headingVariants = {
  hidden: { opacity: 0, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 260, damping: 18 },
  },
};

// Cards alternate direction based on index (even = from left, odd = from right)
const cardVariants = {
  hiddenLeft: { opacity: 0, x: -30, rotate: -6 },
  hiddenRight: { opacity: 0, x: 30, rotate: 6 },
  show: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { type: 'spring', stiffness: 90, damping: 14 },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -90 },
  show: {
    scale: 1,
    rotate: 0,
    transition: { type: 'spring', stiffness: 200, damping: 12, delay: 0.15 },
  },
};

const HowItWorks = () => {
  const benefits = [
    {
      icon: ShieldCheck,
      title: 'কার্টিলেজ সুরক্ষা',
      desc: 'কারকিউমিন কার্টিলেজ ভেঙে যাওয়া থেকে রক্ষা করে।',
    },
    {
      icon: Bone,
      title: 'জয়েন্টের সুস্বাস্থ্য',
      desc: 'গ্লুকোসামিন সালফেট জয়েন্টের সুস্বাস্থ্য বজায় রাখে।',
    },
    {
      icon: Footprints,
      title: 'রেঞ্জ অব মোশন',
      desc: 'MSM মুভমেন্ট ও ফিজিক্যাল ফাংশন বাড়াতে সাহায্য করে।',
    },
    {
      icon: Scale,
      title: 'ম্যাট্রিক্স ব্যালেন্স',
      desc: 'কনড্রয়টিন সালফেট জয়েন্টের ম্যাট্রিক্সের সমতা রক্ষা করে।',
    },
  ];

  return (
    <div className="bg-[#F1F5F9] py-16 md:py-24 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section head */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <motion.span
            variants={badgeVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="inline-flex items-center gap-2 bg-white text-[#0F3457] text-xs font-semibold px-4 py-2 rounded-full mb-5"
          >
            <Workflow size={14} />
            কীভাবে কাজ করে
          </motion.span>
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="font-serif font-bold text-2xl md:text-4xl text-[#0F3457] leading-snug"
          >
            চারটি সক্রিয় উপাদান, একটি লক্ষ্য — সুস্থ জয়েন্ট
          </motion.h2>
        </div>

        {/* Benefit cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const fromLeft = index % 2 === 0;
            return (
              <motion.div
                key={benefit.title}
                initial={fromLeft ? 'hiddenLeft' : 'hiddenRight'}
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl px-5 py-8 text-center border border-[#0F3457]/5"
              >
                <motion.div
                  variants={iconVariants}
                  className="w-14 h-14 rounded-full bg-white border-2 border-[#8FBCE8] flex items-center justify-center mx-auto mb-4"
                >
                  <Icon size={24} className="text-[#0F3457]" strokeWidth={1.8} />
                </motion.div>
                <h3 className="font-serif font-bold text-[#0F3457] text-sm md:text-base mb-2">
                  {benefit.title}
                </h3>
                <p className="font-sans text-[#1C2530] text-xs md:text-sm">
                  {benefit.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;