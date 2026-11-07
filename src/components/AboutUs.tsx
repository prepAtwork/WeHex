import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import aboutWaveImg from '../assets/about-wave.jpg';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="bg-white py-20 sm:py-28 border-b border-gray-100 w-full">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wide text-gray-400 mb-8 font-mono">
          <span>/About Us</span>
          <span>(02)</span>
        </div>

        {/* Top 2-Column Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16 sm:mb-20">
          
          {/* Left: Big Stat 50+ with floating pills */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-start">
            <div className="relative inline-block py-6 px-8">
              {/* Top-right floating pill */}
              <div className="absolute -top-1 -right-8 sm:-right-4 bg-[#7ee7c9] text-gray-950 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-md z-10 border border-white/50">
                Projects Delivered
              </div>

              {/* Huge 50+ Text */}
              <div className="text-8xl sm:text-9xl md:text-[140px] font-black tracking-tight text-gray-950 font-sans leading-none select-none">
                50+
              </div>

              {/* Bottom-left floating pill */}
              <div className="absolute -bottom-2 -left-6 sm:-left-4 bg-[#38bdf8] text-gray-950 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-md z-10 border border-white/50">
                Served Business
              </div>
            </div>
          </div>

          {/* Right: Headline & Button (Description removed as requested) */}
          <div className="lg:col-span-7 flex flex-col items-start lg:pl-8">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight mb-8 max-w-2xl"
              style={{ lineHeight: 1.36 }}
            >
              We don't just build digital products. We help businesses build what's next.
            </h2>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-[#00BE80] hover:bg-[#00a872] text-black text-[15px] font-bold pl-5 pr-2 py-2 rounded-full shadow-[0_4px_20px_rgba(0,190,128,0.35)] transition-all hover:scale-[1.02]"
            >
              <span>Schedule a Strategy Call</span>
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-200">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Visual Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Colorful 3D Fluid Art */}
          <div className="md:col-span-5 relative rounded-[28px] overflow-hidden group shadow-md min-h-[260px] border border-gray-100">
            <img
              src={aboutWaveImg}
              alt="Digital product design artwork"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Card 2: Metrics Card (Image removed, straight line divider added between 100% and 5/5) */}
          <div className="md:col-span-7 bg-[#f8f9fa] rounded-[28px] border border-gray-100 shadow-sm p-8 sm:p-12 flex items-center justify-center min-h-[260px]">
            <div className="flex items-center justify-around w-full max-w-xl">
              
              {/* Metric 1 */}
              <div className="text-center flex-1 px-4">
                <div className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-950 tracking-tight mb-3 leading-none">
                  100%
                </div>
                <div className="text-sm sm:text-base text-gray-500 font-medium leading-[1.5]">
                  On-Time Project Delivery.
                </div>
              </div>

              {/* Straight Vertical Divider Line */}
              <div className="w-[1.5px] h-20 sm:h-24 bg-gray-200 flex-shrink-0 mx-4" />

              {/* Metric 2 */}
              <div className="text-center flex-1 px-4">
                <div className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-950 tracking-tight mb-3 leading-none">
                  5/5
                </div>
                <div className="text-sm sm:text-base text-gray-500 font-medium leading-[1.5]">
                  Client Satisfaction Rating.
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
