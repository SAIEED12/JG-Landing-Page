'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const WhyChoose = () => {
  const points = [
    {
      num: "০১",
      text: "যদি আপনি অস্টিওআর্থ্রাইটিসে আক্রান্ত হয়ে থাকেন।",
    },
    {
      num: "০২",
      text: "হালকা অস্বস্তি থেকে শুরু হয়ে জয়েন্টের ব্যথা এখন নড়াচড়াতেও কষ্ট দিচ্ছে অথবা জয়েন্ট শক্ত বা ফোলা অনুভব হচ্ছে।",
    },
    {
      num: "০৩",
      text: "সিঁড়ি বেয়ে ওঠা-নামা, বাজারে যাওয়া বা নামাজের জন্য দাঁড়ানো — সেই আগের মতো স্বস্তি আবার ফিরে পেতে চান।",
    },
  ];

  return (
    <div className="bg-[#feffff] shadow-lg py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: image */}
        <motion.div
          className="order-2 md:order-1"
          variants={imageVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/KNEE_PAIN.png"
            alt="জয়েন্ট ব্যথা"
            className="rounded-2xl w-full object-cover"
            width={500}
            height={400}
          />
        </motion.div>

        {/* Right: copy */}
        <motion.div
          className="order-1 md:order-2 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-[#0F3457]/5 text-[#0F3457] text-xs font-semibold px-4 py-2 rounded-full mb-5"
          >
            <HelpCircle size={14} />
            এই পণ্যটি কি আপনার জন্য?
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="font-serif font-bold text-2xl md:text-4xl text-[#0F3457] mb-8 leading-snug"
          >
            লক্ষণগুলো মিলিয়ে দেখুন
          </motion.h2>

          <div className="flex flex-col gap-4">
            {points.map((point) => (
              <motion.div
                key={point.num}
                variants={itemVariants}
                className="flex items-start gap-4 bg-[#F1F5F9] border-l-4 border-[#0F3457] rounded-xl px-5 py-4 text-left font-semibold"
              >
                <span className="font-serif font-bold text-[#1B4C7E] text-lg shrink-0">
                  {point.num}
                </span>
                <p className="font-sans text-[#1C2530] text-sm md:text-base">
                  {point.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChoose;