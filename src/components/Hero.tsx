import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[760px] lg:min-h-[820px] w-full flex flex-col justify-between overflow-hidden pt-32 pb-16 lg:pt-36 lg:pb-24 bg-[#0a0d14]">
      {/* Sleek Modern Clean Backdrop with Ambient Glow & Subtle Grid */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '36px 36px'
          }}
        />

        {/* Emerald Ambient Light Beam */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#00BE80]/15 rounded-full blur-[140px]" />
        
        {/* Soft cyan/slate ambient fill */}
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px]" />
        <div className="absolute -bottom-20 -left-40 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[150px]" />

        {/* Bottom subtle fade to white for seamless section transition */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white/10 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col items-center justify-center">
        
        {/* Top Badge: AVAILABLE FOR NEW PROJECT */}
        <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 shadow-[0_4px_24px_rgba(0,0,0,0.25)] mb-6 sm:mb-8 animate-in fade-in duration-700">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00BE80] animate-pulse shadow-[0_0_10px_#00BE80]" />
          <span className="text-[11px] sm:text-xs font-bold tracking-widest text-emerald-300 uppercase">
            AVAILABLE FOR NEW PROJECT
          </span>
        </div>

        {/* Main Headline with improved line spacing */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-white tracking-tight max-w-4xl mx-auto drop-shadow-sm"
          style={{ lineHeight: 1.25 }}
        >
          Your next big idea deserves a great digital product.
        </h1>

        {/* Subtitle with improved line spacing */}
        <p className="mt-6 text-base sm:text-lg md:text-[19px] text-gray-300 max-w-2xl mx-auto font-normal leading-[1.7]">
          From concept to launch, we design and develop digital products that solve real problems, create meaningful experiences, and help businesses grow.
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
            className="group flex items-center gap-3 bg-white/10 hover:bg-white/15 text-white text-[15px] font-semibold pl-5 pr-2 py-2 rounded-full border border-white/20 backdrop-blur-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>View Our Work</span>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-200">
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
