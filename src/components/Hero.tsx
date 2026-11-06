import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import heroBg from '../assets/hero-bg-clean.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[780px] lg:min-h-[840px] w-full flex flex-col justify-between overflow-hidden pt-32 pb-16 lg:pt-36 lg:pb-24">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Sunny sky and green hills"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft subtle gradient to give typography maximum punch while preserving bright blue sky */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-400/20 via-sky-300/15 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col items-center justify-center">
        
        {/* Top Badge: 5000+ BUSINESS SCALED */}
        <div className="inline-flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.08)] mb-6 sm:mb-8 animate-in fade-in duration-700">
          {/* Overlapping Avatars (Clean, offline SVG avatars) */}
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full border-2 border-white bg-amber-200 overflow-hidden flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-800" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="8" r="4" />
                <path d="M12 14c-4 0-7 2-7 6h14c0-4-3-6-7-6z" />
              </svg>
            </div>
            <div className="w-6 h-6 rounded-full border-2 border-white bg-emerald-200 overflow-hidden flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-800" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="8" r="4" />
                <path d="M12 14c-4 0-7 2-7 6h14c0-4-3-6-7-6z" />
              </svg>
            </div>
            <div className="w-6 h-6 rounded-full border-2 border-white bg-sky-200 overflow-hidden flex items-center justify-center">
              <svg className="w-5 h-5 text-sky-800" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="8" r="4" />
                <path d="M12 14c-4 0-7 2-7 6h14c0-4-3-6-7-6z" />
              </svg>
            </div>
          </div>
          <span className="text-[11px] sm:text-xs font-bold tracking-wider text-gray-900 uppercase">
            5000+ BUSINESS SCALED THEIR INTELLIGENT TECH
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-white tracking-tight leading-[1.08] max-w-4xl mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.22)]">
          We build the Software <br className="hidden sm:inline" />
          and AI Automations that <br className="hidden sm:inline" />
          fuel your growth
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-sm sm:text-base md:text-[17px] text-white max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)]">
          From sleek web applications to autonomous AI workflows. We bridge the gap
          between complex engineering and seamless user experience.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          {/* Primary Button */}
          <a
            href="#contact"
            className="group flex items-center gap-3 bg-[#00BE80] hover:bg-[#00a872] text-black text-[15px] font-bold pl-5 pr-2 py-2 rounded-full shadow-[0_4px_20px_rgba(0,190,128,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Book a Call</span>
            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-200">
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </a>

          {/* Secondary Button */}
          <a
            href="#portfolio"
            className="group flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-950 text-[15px] font-semibold pl-5 pr-2 py-2 rounded-full border border-white shadow-[0_4px_18px_rgba(0,0,0,0.1)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>View Our Work</span>
            <div className="w-8 h-8 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-800 group-hover:rotate-45 transition-transform duration-200">
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
