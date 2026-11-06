import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import serviceWebDevImg from '../assets/service-web-dev.jpg';
import serviceAiImg from '../assets/service-ai-automation.jpg';
import serviceDesignImg from '../assets/service-design-branding.jpg';
import serviceMaintImg from '../assets/service-maintenance.jpg';
import serviceStaffingImg from '../assets/service-staffing.jpg';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'web-software',
    title: 'Web & Software Development',
    description: 'Scalable cloud architectures, bespoke enterprise web applications, and modern high-performance platforms.',
    image: serviceWebDevImg,
  },
  {
    id: 'ai-automations',
    title: 'AI & Automations',
    description: 'Autonomous workflows, LLM agents, and automated data pipelines designed to eliminate friction and maximize operational efficiency.',
    image: serviceAiImg,
  },
  {
    id: 'design-branding',
    title: 'Design & Branding',
    description: 'Our team of designers, developers, and thinkers driven by one purpose to craft compelling digital experiences.',
    image: serviceDesignImg,
  },
  {
    id: 'maintenance-consulting',
    title: 'Maintenance & Consulting',
    description: 'Continuous performance optimization, round-the-clock infrastructure monitoring, and strategic technical consulting.',
    image: serviceMaintImg,
  },
  {
    id: 'staffing',
    title: 'Staffing',
    description: 'Elite on-demand software engineers, AI researchers, and technical talent embedded directly into your agile team.',
    image: serviceStaffingImg,
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

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
          {servicesData.map((service) => {
            const isActive = activeId === service.id;

            return (
              <div
                key={service.id}
                onClick={() => setActiveId(service.id)}
                className={`group cursor-pointer relative rounded-[28px] p-6 flex flex-col justify-between transition-all duration-300 min-h-[430px] ${
                  isActive
                    ? 'bg-[#141416] text-white shadow-2xl scale-[1.02] border border-gray-800'
                    : 'bg-[#f8f9fa] text-gray-900 border border-gray-100 shadow-sm hover:shadow-xl hover:scale-[1.01]'
                }`}
              >
                {/* Card Top: Title & Description */}
                <div>
                  <h3
                    className={`text-lg sm:text-xl font-bold tracking-tight mb-2.5 leading-snug ${
                      isActive ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed font-normal min-h-[38px] line-clamp-2 ${
                      isActive ? 'text-gray-300' : 'text-gray-500'
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Card Center: Visual Service Image */}
                <div
                  className={`my-4 w-full h-36 sm:h-40 rounded-2xl overflow-hidden relative border transition-all ${
                    isActive ? 'border-white/10 shadow-lg' : 'border-gray-200/60 shadow-xs'
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141416]/30 via-transparent to-transparent pointer-events-none" />
                  )}
                </div>

                {/* Card Bottom: Action Button */}
                <div className={`mt-auto flex ${isActive ? 'justify-end' : 'justify-start'} pt-2`}>
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
