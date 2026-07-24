import React from 'react';
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

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section head */}
        <div className="max-w-2xl mx-auto text-center mb-8">
          <span className="inline-flex items-center gap-2 bg-[#0F3457]/5 text-[#0F3457] text-xs font-semibold px-4 py-2 rounded-full mb-5">
            <Star size={14} />
            কাস্টমার রিভিউ
          </span>
          <h2 className="font-serif font-bold text-2xl md:text-4xl text-[#0F3457] leading-snug">
            হাজারো মানুষ উপকৃত হয়েছেন
          </h2>
        </div>

        {/* Rating summary */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="font-serif font-bold text-4xl text-[#0F3457]">৪.৫</span>
          <div>
            <StarRow count={5} />
            <p className="font-sans text-[#1C2530]/60 text-xs mt-1">৫০টি রিভিউর ভিত্তিতে</p>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <div
              key={review.name}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ratings;