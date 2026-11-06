import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconType: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'web-software',
    title: 'Web & Software Development',
    description: 'Scalable cloud architectures, bespoke enterprise web applications, and intuitive interfaces built on modern tech stacks.',
    iconType: 'code',
  },
  {
    id: 'ai-automations',
    title: 'AI & Automations',
    description: 'Autonomous workflows, LLM agents, and automated data pipelines designed to eliminate friction and maximize operational efficiency.',
    iconType: 'bot',
  },
  {
    id: 'design-branding',
    title: 'Design & Branding',
    description: 'Our team of designers, developers, and thinkers driven by one purpose',
    iconType: 'pen-tool',
  },
  {
    id: 'maintenance-consulting',
    title: 'Maintenance & Consulting',
    description: 'Continuous performance optimization, round-the-clock infrastructure monitoring, and strategic technical consulting.',
    iconType: 'cpu',
  },
];

export const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('design-branding');

  return (
    <section id="services" className="bg-white py-20 sm:py-28 border-b border-gray-100 w-full">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wide text-gray-400 mb-6 font-mono">
          <span>/Our Service</span>
          <span>(01)</span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight max-w-2xl leading-[1.15] mb-12 sm:mb-16">
          AI-powered solutions for tomorrow's world.
        </h2>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => {
            const isActive = activeId === service.id;

            return (
              <div
                key={service.id}
                onClick={() => setActiveId(service.id)}
                className={`group cursor-pointer relative rounded-[28px] p-7 flex flex-col justify-between transition-all duration-300 min-h-[380px] ${
                  isActive
                    ? 'bg-[#141416] text-white shadow-2xl scale-[1.02] border border-gray-800'
                    : 'bg-[#f8f9fa] text-gray-900 border border-gray-100 shadow-sm hover:shadow-xl hover:scale-[1.01]'
                }`}
              >
                {/* Card Top: Title & Description */}
                <div>
                  <h3
                    className={`text-xl sm:text-2xl font-bold tracking-tight mb-3 leading-snug ${
                      isActive ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {service.title}
                  </h3>
                  {isActive && (
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  )}
                </div>

                {/* Card Center: Visual Vector Illustration for Active Card */}
                {isActive && (
                  <div className="my-auto py-6 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-2xl bg-[#1c1c20] border border-gray-800/80 flex items-center justify-center shadow-inner">
                      {/* Vector Pen Tool Graphic */}
                      <svg
                        className="w-16 h-16 text-white stroke-[1.25]"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 44C16 32 30 20 52 14"
                          stroke="currentColor"
                          strokeDasharray="2 2"
                        />
                        <rect x="10" y="42" width="6" height="6" fill="#141416" stroke="currentColor" />
                        <rect x="50" y="12" width="6" height="6" fill="#141416" stroke="currentColor" />
                        <path
                          d="M32 24L42 34L28 48L18 48L18 38L32 24Z"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          fill="#18181b"
                        />
                        <circle cx="28" cy="38" r="2.5" fill="currentColor" />
                        <path d="M18 48L24 42" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="22" y1="20" x2="42" y2="40" stroke="currentColor" strokeWidth="1" />
                        <circle cx="22" cy="20" r="2" fill="#00BE80" />
                        <circle cx="42" cy="40" r="2" fill="#00BE80" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Card Bottom: Action Button */}
                <div className={`mt-auto flex ${isActive ? 'justify-end' : 'justify-start'} pt-6`}>
                  {isActive ? (
                    <div className="w-10 h-10 rounded-full bg-[#00BE80] flex items-center justify-center text-black shadow-md group-hover:scale-110 transition-transform">
                      <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-700 group-hover:bg-[#00BE80] group-hover:text-black group-hover:border-transparent transition-all">
                      <ArrowRight className="w-4 h-4 stroke-[2]" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
