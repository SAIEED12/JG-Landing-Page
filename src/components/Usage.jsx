'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CalendarCheck, Snowflake } from 'lucide-react';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const headVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 180, damping: 16 },
  },
};

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
        <motion.div
          className="max-w-2xl mx-auto text-center mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.span
            variants={headVariants}
            className="inline-flex items-center gap-2 bg-white/10 text-[#8FBCE8] text-sm font-semibold px-4 py-2 rounded-full mb-5"
          >
            <Clock size={12} />
            সেবনবিধি
          </motion.span>
          <motion.h2
            variants={headVariants}
            className="font-serif font-bold text-2xl md:text-4xl text-white"
          >
            সহজ তিনটি নিয়ম মেনে চলুন
          </motion.h2>
        </motion.div>

        {/* Usage cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.label}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-8 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-white/10 border-2 border-[#fefeff] flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-[#f7f9fb]" />
                </div>
                <h3 className="font-serif font-bold text-[#ebe2a2] text-base mb-2">
                  {step.label}
                </h3>
                <p className="font-sans text-white/80 text-sm">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Usage;