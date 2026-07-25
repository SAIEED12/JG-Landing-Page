import React from 'react';

const TermsCondition = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content:
        'By accessing or purchasing from this website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.',
    },
    {
      title: '2. Products and Descriptions',
      content:
        'We strive to display accurate product descriptions, images, and pricing. However, we do not warrant that product descriptions or other content on this site are entirely accurate, complete, or error-free. Colors and packaging may vary slightly from images shown.',
    },
    {
      title: '3. Orders and Payment',
      content:
        'All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order at our discretion, including in cases of suspected fraud, pricing errors, or stock unavailability. Full payment must be received before an order is processed and shipped.',
    },
    {
      title: '4. Shipping and Delivery',
      content:
        'Delivery timelines provided at checkout are estimates and not guaranteed. We are not liable for delays caused by courier services, incorrect address information, or circumstances beyond our reasonable control.',
    },
    {
      title: '5. Returns and Refunds',
      content:
        'Please refer to our Returns and Refund Policy for details on eligibility, timelines, and the process for returning products or requesting a refund.',
    },
    {
      title: '6. Health Disclaimer',
      content:
        'Karkuma Joint Guard is a dietary supplement and is not intended to diagnose, treat, cure, or prevent any disease. This product should not be used as a substitute for professional medical advice. Please consult your physician before use, especially if you are pregnant, nursing, taking medication, or have an existing medical condition.',
    },
    {
      title: '7. Intellectual Property',
      content:
        'All content on this website, including text, graphics, logos, images, and product descriptions, is the property of Karkuma and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content without our prior written consent.',
    },
    {
      title: '8. Limitation of Liability',
      content:
        'To the fullest extent permitted by law, Karkuma shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or our products.',
    },
    {
      title: '9. Changes to These Terms',
      content:
        'We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Continued use of the website after changes are posted constitutes your acceptance of the revised terms.',
    },
    {
      title: '10. Governing Law',
      content:
        'These Terms and Conditions shall be governed by and construed in accordance with the laws of Bangladesh.',
    },
    {
      title: '11. Contact Us',
      content:
        'If you have any questions about these Terms and Conditions, please contact us at hello@organicnutrition.com.bd or call 096 11 409 509.',
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
            Terms &amp; Conditions
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

export default TermsCondition;