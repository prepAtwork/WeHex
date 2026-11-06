import React from 'react';

export const MarqueeBanner: React.FC = () => {
  return (
    <section className="bg-[#00BE80] py-14 sm:py-20 overflow-hidden border-b border-black/10 select-none w-full">
      <div className="w-full flex items-center">
        {/* Animated Infinite Marquee */}
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          <span className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-black tracking-tight text-white drop-shadow-sm">
            Solutions built
          </span>
          <span className="text-4xl sm:text-6xl text-[#d8fa35]">✦</span>
          <span className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-black tracking-tight text-white drop-shadow-sm">
            AI-Driven Future
          </span>
          <span className="text-4xl sm:text-6xl text-[#d8fa35]">✦</span>
          <span className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-black tracking-tight text-white drop-shadow-sm">
            Engineered For Scale
          </span>
          <span className="text-4xl sm:text-6xl text-[#d8fa35]">✦</span>

          {/* Repeat for continuous loop */}
          <span className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-black tracking-tight text-white drop-shadow-sm">
            Solutions built
          </span>
          <span className="text-4xl sm:text-6xl text-[#d8fa35]">✦</span>
          <span className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-black tracking-tight text-white drop-shadow-sm">
            AI-Driven Future
          </span>
          <span className="text-4xl sm:text-6xl text-[#d8fa35]">✦</span>
          <span className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-black tracking-tight text-white drop-shadow-sm">
            Engineered For Scale
          </span>
          <span className="text-4xl sm:text-6xl text-[#d8fa35]">✦</span>
        </div>
      </div>
    </section>
  );
};

