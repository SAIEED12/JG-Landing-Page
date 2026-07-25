import React from 'react';

const ReturnRefund = () => {
  const sections = [
    {
      title: '1. Our Return Policy',
      content:
        'We want you to be fully satisfied with your purchase. If you receive a damaged, defective, or incorrect product, you may request a return or replacement within 7 days of delivery.',
    },
    {
      title: '2. Eligibility for Returns',
      content:
        'To be eligible for a return, the product must be unused, in its original packaging, and accompanied by proof of purchase. Due to the nature of our products as consumable dietary supplements, we cannot accept returns on opened or used items unless the product is defective or damaged upon arrival.',
    },
    {
      title: '3. How to Request a Return',
      content:
        'To initiate a return, please contact our customer support at tahdithShop@gmail.com or call +8801673-009016 within 7 days of receiving your order. Please include your order number and photos of the product if it arrived damaged or defective.',
    },
    {
      title: '4. Refund Process',
      content:
        'Once your return is received and inspected, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed to your original method of payment within 7-10 business days.',
    },
    {
      title: '5. Exchanges',
      content:
        'If you received a defective or incorrect item, we are happy to arrange a replacement at no additional cost, subject to product availability.',
    },
    {
      title: '6. Non-Returnable Items',
      content:
        'For hygiene and safety reasons, opened or partially used supplement bottles cannot be returned unless the product is proven to be defective. Sale or promotional items may also be excluded from returns unless otherwise stated.',
    },
    {
      title: '7. Shipping Costs',
      content:
        'If the return is due to our error (e.g. wrong or defective item), we will cover the return shipping cost. If the return is for any other reason, the customer will be responsible for return shipping charges.',
    },
    {
      title: '8. Late or Missing Refunds',
      content:
        'If you haven\u2019t received a refund within the expected timeframe, please first check with your bank or payment provider, as processing times can vary. If you still have not received your refund, please contact us for assistance.',
    },
    {
      title: '9. Contact Us',
      content:
        'If you have any questions about our Return and Refund Policy, please contact us at tahdithShop@gmail.com or call +8801673-009016.',
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
            Return &amp; Refund Policy
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

export default ReturnRefund;