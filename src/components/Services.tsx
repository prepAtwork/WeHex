import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import serviceAppDevImg from '../assets/service-app-dev.jpg';
import serviceWebDevImg from '../assets/service-web-dev.jpg';
import serviceDesignImg from '../assets/service-design-branding.jpg';
import serviceStaffingImg from '../assets/service-staffing.jpg';
import serviceMarketingImg from '../assets/service-marketing.jpg';
import serviceMaintImg from '../assets/service-maintenance.jpg';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'app-development',
    title: 'App Development',
    description: 'Powerful mobile applications built to solve problems and create better user experiences.',
    image: serviceAppDevImg,
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Modern, scalable websites and web platforms designed around your business goals.',
    image: serviceWebDevImg,
  },
  {
    id: 'product-design',
    title: 'Product Design',
    description: 'Intuitive UI/UX design that turns complex ideas into simple, engaging experiences.',
    image: serviceDesignImg,
  },
  {
    id: 'staffing',
    title: 'Staffing',
    description: 'Skilled developers and creative professionals to strengthen your team and accelerate delivery.',
    image: serviceStaffingImg,
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Strategic marketing that builds visibility, attracts the right audience and drives growth.',
    image: serviceMarketingImg,
  },
  {
    id: 'maintenance-consulting',
    title: 'Maintenance & Consulting',
    description: 'Ongoing technical support, expert guidance and improvements to keep your digital products performing.',
    image: serviceMaintImg,
  },
];

export const Services: React.FC = () => {
  // Only show image when a card is hovered
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="services" className="bg-white py-20 sm:py-28 border-b border-gray-100 w-full">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wide text-gray-400 mb-6 font-mono">
          <span>/Our Services</span>
          <span>(01)</span>
        </div>

        {/* Section Headline with improved line spacing */}
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight max-w-2xl mb-12 sm:mb-16"
          style={{ lineHeight: 1.36 }}
        >
          Everything you need to build, launch &amp; grow.
        </h2>

        {/* 6 Cards Grid (3 Columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {servicesData.map((service) => {
            const isHovered = hoveredId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setHoveredId(isHovered ? null : service.id)}
                className={`group cursor-pointer relative rounded-[28px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 min-h-[320px] ${
                  isHovered
                    ? 'bg-[#141416] text-white shadow-2xl scale-[1.01] border border-gray-800'
                    : 'bg-[#f8f9fa] text-gray-900 border border-gray-100 shadow-sm hover:shadow-xl hover:scale-[1.01]'
                }`}
              >
                {/* Card Top: Title & Description */}
                <div>
                  <h3
                    className={`text-xl sm:text-2xl font-bold tracking-tight mb-3 leading-[1.3] transition-colors ${
                      isHovered ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-sm font-normal leading-[1.65] transition-colors ${
                      isHovered ? 'text-gray-300' : 'text-gray-500'
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Card Center: Visual Service Image — ONLY SHOWN ON HOVER */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isHovered
                      ? 'max-h-52 opacity-100 my-5 rounded-2xl border border-white/10 shadow-lg'
                      : 'max-h-0 opacity-0 my-0 border-0'
                  }`}
                >
                  <div className="w-full h-44 sm:h-48 relative overflow-hidden rounded-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141416]/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Card Bottom: Action Button */}
                <div className={`mt-auto flex ${isHovered ? 'justify-end' : 'justify-start'} pt-4`}>
                  {isHovered ? (
                    <div className="w-11 h-11 rounded-full bg-[#00BE80] flex items-center justify-center text-black shadow-md group-hover:scale-110 transition-transform">
                      <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  ) : (
                    <div className="w-11 h-11 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-700 group-hover:bg-[#00BE80] group-hover:text-black group-hover:border-transparent transition-all shadow-xs">
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
