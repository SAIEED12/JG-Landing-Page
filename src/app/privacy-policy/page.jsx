import React from 'react';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: '1. Introduction',
      content:
        'Karkuma ("we", "our", "us") operates this website and is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from us.',
    },
    {
      title: '2. Information We Collect',
      content:
        'We may collect personal information such as your name, phone number, email address, shipping address, and payment details when you place an order, create an account, or contact our customer support. We may also automatically collect technical information like your IP address, browser type, and device information when you browse our site.',
    },
    {
      title: '3. How We Use Your Information',
      content:
        'We use the information we collect to process and deliver your orders, communicate with you about your purchase, provide customer support, improve our products and website, and send you promotional offers where you have opted in to receive them.',
    },
    {
      title: '4. Cookies and Tracking Technologies',
      content:
        'Our website uses cookies and similar tracking technologies to enhance your browsing experience, remember your preferences, and analyze site traffic. You can choose to disable cookies through your browser settings, though this may affect certain features of the website.',
    },
    {
      title: '5. Sharing Your Information',
      content:
        'We do not sell your personal information to third parties. We may share your information with trusted service providers who assist us with order fulfillment, payment processing, and delivery, solely for the purpose of completing your transaction.',
    },
    {
      title: '6. Data Security',
      content:
        'We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure.',
    },
    {
      title: '7. Your Rights',
      content:
        'You have the right to access, update, or request deletion of your personal information at any time. To exercise these rights, please contact us using the details provided below.',
    },
    {
      title: "8. Children's Privacy",
      content:
        'Our website and products are not directed at children under the age of 18. We do not knowingly collect personal information from minors.',
    },
    {
      title: '9. Changes to This Policy',
      content:
        'We may update this Privacy Policy from time to time to reflect changes in our practices. Any changes will be posted on this page with an updated revision date.',
    },
    {
      title: '10. Contact Us',
      content:
        'If you have any questions or concerns about this Privacy Policy, please contact us at tahdithShop@gmail.com or call +8801673-009016.',
    },
  ];

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#0F3457]/5 text-[#0F3457] text-xs font-semibold px-4 py-2 rounded-full mb-5">
            Legal
          </span>
          <h1 className="font-serif font-bold text-3xl md:text-4xl text-[#0F3457] mb-3">
            Privacy Policy
          </h1>
          <p className="font-sans text-[#1C2530]/60 text-sm">
            Last updated: July 2026
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-serif font-bold text-[#0F3457] text-lg md:text-xl mb-3">
                {section.title}
              </h2>
              <p className="font-sans text-[#1C2530] text-sm md:text-base leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;