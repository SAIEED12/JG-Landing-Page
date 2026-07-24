import { Sprout } from "lucide-react";
import Image from "next/image";
import React from "react";

const Ingredients = () => {
  const ingredients = [
    {
      image: "/curcumin.png",
      title: "অর্গানিক কারকিউমিন",
      desc: "হলুদের শক্তিশালী বায়ো-অ্যাক্টিভ অ্যান্টিঅক্সিডেন্ট, যা অক্সিডেটিভ স্ট্রেস কমিয়ে কার্টিলেজ সুরক্ষায় সাহায্য করে।",
    },
    {
      image: "/organic-ginger-oil.jpg",
      title: "অর্গানিক জিঞ্জার অয়েল",
      desc: "প্রদাহ কমাতে প্রাচীনকাল থেকে ব্যবহৃত, শ্বেত রক্তকণিকার কার্যক্ষমতা বাড়িয়ে রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে।",
    },
    {
      image: "/cinnamon-oil.jpg",
      title: "অর্গানিক সিনামন অয়েল",
      desc: "অ্যান্টি-ইনফ্লামেটরি ও অ্যানালজেসিক গুণসম্পন্ন, জয়েন্টের ব্যথা কমাতে ও রক্ত সঞ্চালন বাড়াতে সহায়ক।",
    },
    {
      image: "/black-pepper.jpg",
      title: "ব্ল্যাক পেপার এক্সট্রাক্ট",
      desc: "পিপারিন কারকিউমিনের শোষণক্ষমতা বহুগুণ বাড়িয়ে দেয়, ফলাফল করে আরও কার্যকর।",
    },
  ];

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section head */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-[#0F3457]/5 text-[#0F3457] text-md  font-semibold px-4 py-2 rounded-full mb-5">
            <Sprout size={14} />
            মূল উপাদানসমূহ
          </span>
          <h2 className="font-serif font-bold text-2xl md:text-4xl text-[#0F3457] leading-snug">
            আপনার পরিচিত প্রাকৃতিক উপাদানে তৈরি, শরীরের সাথে মানানসই
          </h2>
        </div>

        {/* Ingredient cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {ingredients.map((item) => (
            <div
              key={item.title}
              className="bg-[#F1F5F9] rounded-2xl overflow-hidden border border-[#0F3457]/5 hover:shadow-lg hover:shadow-[#0F3457]/10 transition-shadow"
            >
              <div className="w-full aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif font-bold text-[#0F3457] text-base md:text-lg mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-[#1C2530] text-xs md:text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
