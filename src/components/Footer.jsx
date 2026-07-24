import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  const quickLinks = [
    { label: 'হোম', href: '#home' },
    { label: 'উপাদানসমূহ', href: '#ingredients' },
    { label: 'কীভাবে কাজ করে', href: '#howItWorks' },
    { label: 'FAQ', href: '#Faq' },
  ];

  const policies = [
    { label: 'প্রাইভেসি পলিসি', href: '#' },
    { label: 'রিটার্ন ও রিফান্ড', href: '#' },
    { label: 'শর্তাবলী', href: '#' },
  ];

  const socials = [
    { Icon: FaFacebook, href: '#' },
    // { Icon: FaInstagram, href: '#' },
    // { Icon: FaYoutube, href: '#' },
  ];

  return (
    <footer className="bg-[#081C30] pt-16 pb-24 md:pb-16">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2 text-white font-serif font-bold text-xl mb-4">
                <Image
                src={"/logo.jpg"}
                width={30}
                height={30}
                alt='Footer Logo'
                className='rounded-full'
                />
                তাহদীথ শপ
            </a>
            <p className="font-sans text-white/60 text-sm max-w-xs">
              প্রাণবন্ত জীবনকে উপভোগ করুন সুস্থতার সাথে — প্রকৃতি ও বিজ্ঞানের সমন্বয়ে তৈরি ফাংশনাল ফুড।
            </p>
            <div className="flex items-center gap-3 mt-5">
              {socials.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-[#8FBCE8] hover:text-[#0F3457] transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-serif font-bold text-white text-sm mb-4">কুইক লিংক</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-sans text-white/60 text-sm hover:text-[#8FBCE8] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold text-white text-sm mb-4">যোগাযোগ</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 font-sans text-white/60 text-sm">
                <Phone size={14} className="text-[#8FBCE8] shrink-0" />
                +8801673-009016
              </li>
              <li className="flex items-center gap-2 font-sans text-white/60 text-sm">
                <Mail size={14} className="text-[#8FBCE8] shrink-0" />
                tahdithShop@gmail.com
              </li>
              <li className="flex items-start gap-2 font-sans text-white/60 text-sm">
                <MapPin size={14} className="text-[#8FBCE8] shrink-0 mt-0.5" />
                ঢাকা, বাংলাদেশ
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-white/40 text-xs text-center md:text-left">
            © {new Date().getFullYear()} তাহদীথ শপ। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex items-center gap-5">
            {policies.map((policy) => (
              <a key={policy.label} href={policy.href} className="font-sans text-white/40 text-xs hover:text-white/70 transition-colors">
                {policy.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;