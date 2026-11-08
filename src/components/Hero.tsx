import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import heroBg from '../assets/HeroSection bg.png';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[760px] lg:min-h-[840px] w-full flex flex-col justify-between overflow-hidden pt-32 pb-16 lg:pt-36 lg:pb-24">
      {/* Sunlit Green Meadow and Sky Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBg}
          alt="Sunlit green meadow under clear blue sky"
          className="w-full h-full object-cover object-bottom"
        />
        {/* Soft contrast gradient to ensure optimal readability of the headline */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950/20 via-transparent to-black/15 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col items-center justify-center">
        
        {/* Top Badge: AVAILABLE FOR NEW PROJECT */}
        <div className="inline-flex items-center gap-2.5 bg-black/25 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.15)] mb-6 sm:mb-8 animate-in fade-in duration-700">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00BE80] animate-pulse shadow-[0_0_10px_#00BE80]" />
          <span className="text-[11px] sm:text-xs font-bold tracking-widest text-white uppercase drop-shadow-sm">
            AVAILABLE FOR NEW PROJECT
          </span>
        </div>

        {/* Main Headline with improved line spacing */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-white tracking-tight max-w-4xl mx-auto drop-shadow-[0_2px_16px_rgba(0,0,0,0.35)]"
          style={{ lineHeight: 1.25 }}
        >
          Your next big idea deserves a great digital product.
        </h1>

        {/* Subtitle with improved line spacing */}
        <p className="mt-6 text-base sm:text-lg md:text-[19px] text-white/95 max-w-2xl mx-auto font-medium leading-[1.7] drop-shadow-[0_1px_8px_rgba(0,0,0,0.3)]">
          From concept to launch, we design and develop digital products that solve real problems, create meaningful experiences, and help businesses grow.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          {/* Primary Button */}
          <a
            href="#contact"
            className="group flex items-center gap-3 bg-[#00BE80] hover:bg-[#00a872] text-black text-[15px] font-bold pl-5 pr-2 py-2 rounded-full shadow-[0_4px_20px_rgba(0,190,128,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Book a Call</span>
            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-200">
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </a>

          {/* Secondary Button */}
          <a
            href="#portfolio"
            className="group flex items-center gap-3 bg-white/20 hover:bg-white/30 text-white text-[15px] font-semibold pl-5 pr-2 py-2 rounded-full border border-white/30 backdrop-blur-md shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>View Our Work</span>
            <div className="w-8 h-8 rounded-full bg-white/25 flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-200">
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
