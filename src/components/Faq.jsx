import { Accordion } from '@heroui/react';
import { ChevronDown, Package, HeartPulse, ShieldCheck, Pill, Leaf } from 'lucide-react';
import React from 'react';

const items = [
  {
    icon: <Package />,
    title: 'এক বোতলে কতগুলি ক্যাপসুল থাকে?',
    content: 'এক বোতলে ৯০টি ক্যাপসুল থাকে, যা প্রায় এক মাসের ডোজের জন্য যথেষ্ট।',
  },
  {
    icon: <HeartPulse />,
    title: 'গর্ভবতী বা স্তন্যদানকারী মায়েরা কি নিতে পারবেন?',
    content: 'না, গর্ভবতী বা প্রসূতি মায়েদের জন্য কারকুমা জয়েন্ট গার্ড প্রযোজ্য নয়।',
  },
  {
    icon: <ShieldCheck />,
    title: 'এর কি কোনো পার্শ্বপ্রতিক্রিয়া আছে?',
    content:
      'না। সকল উপাদান খাদ্য উৎস থেকে নেওয়া এবং USDA অর্গানিক সার্টিফাইড, ফলে এতে কোনো ক্ষতিকর পার্শ্বপ্রতিক্রিয়া নেই।',
  },
  {
    icon: <Pill />,
    title: 'অন্যান্য ওষুধের সাথে খাওয়া যাবে কি?',
    content: 'হ্যাঁ, অবশ্যই খাওয়া যাবে।',
  },
  {
    icon: <Leaf />,
    title: 'এটি কি ভেগানদের জন্য উপযুক্ত?',
    content:
      'না। এতে থাকা গ্লুকোসামিন ও কনড্রয়টিন সালফেটের উৎস প্রাণিজ, ফলে এটি ভেগানদের জন্য উপযুক্ত নয়।',
  },
];

const Faq = () => {
  return (
    <div className="bg-[#eff2f8] py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        {/* Section head */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-[#0F3457]/5 text-[#0F3457] text-xs font-semibold px-4 py-2 rounded-full mb-5">
            সাধারণ জিজ্ঞাসা
          </span>
          <h2 className="font-serif font-bold text-2xl md:text-4xl text-[#0F3457] leading-snug">
            আপনার প্রশ্নের উত্তর
          </h2>
        </div>

        <Accordion hideSeparator className="w-full flex flex-col gap-3">
          {items.map((item, index) => (
            <Accordion.Item
              key={index}
              className="bg-[#F1F5F9] rounded-2xl px-5 border border-[#0F3457]/5"
            >
              <Accordion.Heading>
                <Accordion.Trigger className="font-sans font-semibold text-[#0F3457] text-sm md:text-base py-4">
                  <span className="mr-3 size-4 shrink-0 text-[#1B4C7E]">{item.icon}</span>
                  {item.title}
                  <Accordion.Indicator>
                    <ChevronDown className="text-[#0F3457]" />
                  </Accordion.Indicator>
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body className="font-sans text-[#1C2530] text-sm pb-4">
                  {item.content}
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;