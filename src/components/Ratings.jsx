'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';

const StarRow = ({ count }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        className={i < count ? 'text-[#0F3457] fill-[#0F3457]' : 'text-[#0F3457]/20'}
      />
    ))}
  </div>
);

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
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Ratings = () => {
  const reviews = [
    {
      name: 'Talha Saleh',
      initial: 'ত',
      rating: 5,
      text: 'অসাধারণ প্রোডাক্ট। জয়েন্টের ব্যথায় সত্যিই উপকার পেয়েছি।',
    },
    {
      name: 'Safia Jannat',
      initial: 'স',
      rating: 5,
      text: 'আগে ঘাড়ে ব্যথা ছিল, এখন অনেক কম। আলহামদুলিল্লাহ।',
    },
    {
      name: 'Sharaf Ahmed',
      initial: 'শ',
      rating: 5,
      text: 'নিয়মিত খাচ্ছি, চলাফেরায় স্বস্তি পাচ্ছি।',
    },
  ];

  const scoreRef = useRef(null);
  const inView = useInView(scoreRef, { once: true, amount: 0.5 });
  const [displayScore, setDisplayScore] = useState('০.০');

  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  const toBengali = (num) =>
    num
      .toFixed(1)
      .split('')
      .map((ch) => (ch === '.' ? '.' : bengaliDigits[parseInt(ch, 10)]))
      .join('');

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = 5.0;
    const duration = 900;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayScore(toBengali(end));
        clearInterval(timer);
      } else {
        setDisplayScore(toBengali(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView]);

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section head */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-[#0F3457]/5 text-[#0F3457] text-xs font-semibold px-4 py-2 rounded-full mb-5"
          >
            <Star size={14} />
            কাস্টমার রিভিউ
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-serif font-bold text-2xl md:text-4xl text-[#0F3457] leading-snug"
          >
            হাজারো মানুষ উপকৃত হয়েছেন
          </motion.h2>
        </motion.div>

        {/* Rating summary */}
        <motion.div
          ref={scoreRef}
          className="flex items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="font-serif font-bold text-4xl text-[#0F3457] tabular-nums">
            {displayScore}
          </span>
          <div>
            <StarRow count={5} />
            <p className="font-sans text-[#1C2530]/60 text-xs mt-1">৫০টি রিভিউর ভিত্তিতে</p>
          </div>
        </motion.div>

        {/* Review cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {reviews.map((review) => (
            <motion.div
              key={review.name}
              variants={itemVariants}
              className="bg-[#F1F5F9] rounded-2xl p-6 border border-[#0F3457]/5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-[#0F3457] text-[#8FBCE8] flex items-center justify-center font-serif font-bold text-sm shrink-0">
                  {review.initial}
                </div>
                <div>
                  <p className="font-sans font-semibold text-[#0F3457] text-sm">{review.name}</p>
                  <StarRow count={review.rating} />
                </div>
              </div>
              <p className="font-sans text-[#1C2530] text-sm">{review.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Ratings;