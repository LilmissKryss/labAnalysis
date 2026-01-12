import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do I schedule an appointment?",
      a: "Click any 'Book Now' button on our site. You will be redirected to our secure SimplePractice portal where you can pick a time, fill out intake forms, and pay the 50% deposit via Square."
    },
    {
      q: "Do you accept insurance?",
      a: "We do not bill insurance directly for the mobile collection fee. However, the laboratory (Quest/LabCorp) will bill your insurance for the actual tests. You can use your HSA/FSA for our service fee."
    },
    {
      q: "What areas do you serve?",
      a: "We serve the entire metropolitan area and surrounding suburbs within a 25-mile radius of our central office. Travel fees apply for locations outside our primary zone."
    },
    {
      q: "Is it safe to have blood drawn at home?",
      a: "Yes. Our phlebotomists follow hospital-grade clinical protocols. We use sterile, single-use supplies and maintain a clean field for every collection."
    },
    {
      q: "How do I get my results?",
      a: "Your results are sent directly from the laboratory (Quest, LabCorp, etc.) to your ordering physician. You can also view them via the lab's patient portal."
    },
    {
      q: "What is your cancellation policy?",
      a: "We require 24 hours notice for cancellations. Deposits are refundable if cancelled before the 24-hour window. Late cancellations may result in a forfeited deposit."
    }
  ];

  return (
    <div className="py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-24">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Common Questions</h1>
          <p className="text-xl text-slate-600 font-medium">Everything you need to know about our mobile service.</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-8 py-8 flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span className="text-xl font-bold text-blue-900 pr-8">{faq.q}</span>
                <div className="shrink-0 w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                  {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              <div className={`transition-all duration-300 ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="px-8 pb-8 pt-2 text-slate-600 text-lg leading-relaxed font-medium">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-teal-50 p-12 rounded-[50px] text-center border border-teal-100">
           <h3 className="text-2xl font-bold text-blue-900 mb-4">Still have questions?</h3>
           <p className="text-slate-600 mb-8 font-medium">We're here to help. Reach out to us directly for facility inquiries or specific test questions.</p>
           <a href="mailto:support@labanalysis.com" className="bg-teal-600 text-white px-10 py-4 rounded-full font-bold inline-block hover:bg-teal-700 transition-all">
             Contact Support
           </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;