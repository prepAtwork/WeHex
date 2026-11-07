import React from 'react';
import techStackImg from '../assets/tech-stack.png';

export const TechStack: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-28 border-b border-gray-100 w-full overflow-hidden select-none">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wide text-gray-400 mb-8 font-mono">
          <span>/Stack</span>
          <span>(05)</span>
        </div>

        {/* Section Headline with improved line spacing */}
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight mb-12 sm:mb-16 max-w-2xl"
          style={{ lineHeight: 1.36 }}
        >
          The right technology to build what's next.
        </h2>

        {/* Automatic Horizontal Scrolling Marquee Ticker */}
        <div className="relative w-full overflow-hidden py-4 group">
          {/* Edge blur/fade gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Infinite Marquee moving right to left */}
          <div className="animate-marquee flex items-center gap-12 sm:gap-16">
            <img
              src={techStackImg}
              alt="Technology Stack: React, Next.js, TypeScript, Python, AWS, and more"
              className="h-10 sm:h-12 w-auto max-w-none object-contain"
            />
            <img
              src={techStackImg}
              alt="Technology Stack: React, Next.js, TypeScript, Python, AWS, and more"
              className="h-10 sm:h-12 w-auto max-w-none object-contain"
            />
            <img
              src={techStackImg}
              alt="Technology Stack: React, Next.js, TypeScript, Python, AWS, and more"
              className="h-10 sm:h-12 w-auto max-w-none object-contain"
            />
            <img
              src={techStackImg}
              alt="Technology Stack: React, Next.js, TypeScript, Python, AWS, and more"
              className="h-10 sm:h-12 w-auto max-w-none object-contain"
            />
          </div>
        </div>

        {/* Supporting Subtitle */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-gray-500 font-medium">
            We use a proven architecture for a fast product.
          </p>
        </div>

      </div>
    </section>
  );
};
