import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const leftFaqs: FAQItem[] = [
  {
    id: 'f1',
    question: 'What services does Grabky provide?',
    answer: 'We offer end-to-end digital product services, including mobile app development, web development, product design (UI/UX), dedicated staffing, digital marketing, and ongoing maintenance & consulting.',
  },
  {
    id: 'f2',
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary depending on scope and complexity. A standard web or mobile application typically takes between 6 to 12 weeks from discovery to launch, while larger platforms may take longer.',
  },
  {
    id: 'f3',
    question: 'How does communication work during the project?',
    answer: 'You will have direct communication with your dedicated team through Slack, WhatsApp, or scheduled weekly video calls. We believe in complete transparency and regular progress updates.',
  },
  {
    id: 'f4',
    question: 'Can you help with existing projects or redesigns?',
    answer: 'Yes, we frequently work with businesses to redesign outdated products, optimize existing codebases, improve UI/UX, or take over maintenance and feature development for live platforms.',
  },
];

const rightFaqs: FAQItem[] = [
  {
    id: 'f5',
    question: 'What is your pricing structure?',
    answer: 'We offer flexible pricing models depending on your project needs, including fixed-price contracts for well-defined scopes and dedicated team or retainer models for ongoing work.',
  },
  {
    id: 'f6',
    question: 'Do you provide post-launch support and maintenance?',
    answer: 'Yes, we offer ongoing maintenance and support packages to ensure your digital product stays secure, up-to-date, and performing optimally as your user base grows.',
  },
  {
    id: 'f7',
    question: 'How do we get started?',
    answer: "Simply schedule a discovery call with our team or fill out our contact form. We'll discuss your goals, requirements, and provide a clear proposal with timeline and pricing.",
  },
  {
    id: 'f8',
    question: 'Who owns the intellectual property and code?',
    answer: 'You do. Upon project completion and final payment, 100% of the intellectual property, design assets, and source code belong entirely to you.',
  },
];

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string>('f1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  const renderCard = (faq: FAQItem) => {
    const isOpen = openId === faq.id;

    return (
      <div
        key={faq.id}
        onClick={() => toggle(faq.id)}
        className={`border rounded-2xl p-5 sm:p-6 cursor-pointer transition-all mb-4 ${
          isOpen 
            ? 'bg-white border-[#00BE80]/40 shadow-md ring-1 ring-[#00BE80]/20' 
            : 'bg-[#f8f9fa] hover:bg-[#f3f4f6] border-gray-100'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <h3 className={`text-sm sm:text-base font-bold leading-[1.4] transition-colors ${
            isOpen ? 'text-[#00a872]' : 'text-gray-900'
          }`}>
            {faq.question}
          </h3>
          <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${
            isOpen ? 'bg-[#00BE80] text-black rotate-90' : 'bg-white border border-gray-200 text-gray-700'
          }`}>
            {isOpen ? <X className="w-4 h-4 stroke-[2.5]" /> : <Plus className="w-4 h-4 stroke-[2]" />}
          </div>
        </div>

        {isOpen && (
          <div className="mt-4 pt-4 border-t border-gray-100 animate-in fade-in duration-200">
            <p className="text-xs sm:text-sm text-gray-600 leading-[1.7] font-normal">
              {faq.answer}
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="bg-white py-20 sm:py-28 border-b border-gray-100 w-full">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wide text-gray-400 mb-8 font-mono">
          <span>/FAQs</span>
          <span>(08)</span>
        </div>

        {/* Section Headline with improved line spacing */}
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight mb-12 sm:mb-16"
          style={{ lineHeight: 1.36 }}
        >
          Got questions? We've got answers.
        </h2>

        {/* 2-Column FAQs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
          <div>{leftFaqs.map(renderCard)}</div>
          <div>{rightFaqs.map(renderCard)}</div>
        </div>

      </div>
    </section>
  );
};
