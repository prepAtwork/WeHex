import React, { useState } from 'react';
import { Plus, X, MessageCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const leftFaqs: FAQItem[] = [
  {
    id: 'l1',
    question: 'How long for a custom software project?',
    answer: 'Typical MVPs take 4 to 8 weeks, while full enterprise software platforms generally require 3 to 6 months depending on system scope and integration requirements.',
  },
  {
    id: 'l2',
    question: 'Will I access the development team?',
    answer: 'Yes! You have direct access to our technical leads and engineers via dedicated Slack or WhatsApp channels with no bureaucratic intermediaries.',
  },
  {
    id: 'l3',
    question: 'How do you manage IP and data ownership?',
    answer: 'You retain 100% ownership of all code, custom trained models, data pipelines, and design assets from day one upon milestone completion.',
  },
  {
    id: 'l4',
    question: 'Do you offer MVP or phased development?',
    answer: 'Absolutely. We love launching fast, robust MVPs first so you can test real market demand before committing to heavy long-term architectural expansions.',
  },
];

const rightFaqs: FAQItem[] = [
  {
    id: 'r1',
    question: 'How do you secure our sensitive data?',
    answer: 'We employ enterprise-grade encryption at rest and in transit, private VPC deployments, and zero-data-retention agreements for all proprietary AI models.',
  },
  {
    id: 'r2',
    question: 'Can you integrate AI into our legacy systems?',
    answer: 'Yes. We specialize in building "intelligent bridges" that add modern AI capabilities to your current tech stack without requiring a total rebuild.',
  },
  {
    id: 'r3',
    question: 'Do you offer maintenance after launch?',
    answer: 'Yes. We offer continuous SLA-backed maintenance, automated error tracking, load scaling, and ongoing AI agent performance tuning.',
  },
  {
    id: 'r4',
    question: 'What technologies do you specialize in?',
    answer: 'Our core stack centers around Next.js, React, TypeScript, Python, FastAPI, Supabase/PostgreSQL, AWS, and cutting-edge autonomous AI frameworks.',
  },
];

export const FAQ: React.FC = () => {
  // r2 is open by default as shown in the reference design!
  const [openId, setOpenId] = useState<string>('r2');

  const toggle = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  const renderCard = (faq: FAQItem) => {
    const isOpen = openId === faq.id;

    return (
      <div
        key={faq.id}
        onClick={() => toggle(faq.id)}
        className="bg-[#f8f9fa] hover:bg-[#f3f4f6] border border-gray-100 rounded-2xl p-5 sm:p-6 cursor-pointer transition-all mb-4"
      >
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
            {faq.question}
          </h3>
          <div className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 flex-shrink-0 transition-transform">
            {isOpen ? <X className="w-4 h-4 stroke-[2]" /> : <Plus className="w-4 h-4 stroke-[2]" />}
          </div>
        </div>

        {isOpen && (
          <div className="mt-4 pt-4 border-t border-gray-200/60 animate-in fade-in duration-200">
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              {faq.answer}
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="bg-white py-20 sm:py-28 border-b border-gray-100">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wide text-gray-400 mb-8 font-mono">
          <span>/Faqs</span>
          <span>(08)</span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-[1.15] mb-12 sm:mb-16">
          Common Questions
        </h2>

        {/* 2-Column FAQs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
          <div>{leftFaqs.map(renderCard)}</div>
          <div>{rightFaqs.map(renderCard)}</div>
        </div>

        {/* Bottom CTA Helper */}
        <div className="mt-12 text-center flex flex-col items-center justify-center">
          <p className="text-xs sm:text-sm text-gray-400 font-medium mb-4">
            Let's talk through them-no pressure, just clarity.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#f4f5f7] hover:bg-gray-200 text-gray-800 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-colors border border-gray-200"
            >
              <div className="w-4 h-4 rounded-full bg-[#25d366] flex items-center justify-center text-white">
                <MessageCircle className="w-2.5 h-2.5 fill-white" />
              </div>
              <span>Quick Chat</span>
            </a>

            <a
              href="#contact"
              className="text-xs sm:text-sm font-bold text-gray-900 underline hover:text-black transition-colors"
            >
              Schedule a Call
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

