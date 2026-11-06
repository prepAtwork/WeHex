import React from 'react';
import techStackImg from '../assets/tech-stack.png';

export const TechStack: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-28 border-b border-gray-100 w-full">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wide text-gray-400 mb-8 font-mono">
          <span>/Stack</span>
          <span>(05)</span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-[1.15] mb-12 sm:mb-16 max-w-2xl">
          Unleash the power of tomorrow's tech, today.
        </h2>

        {/* Tech Logos Visual Strip */}
        <div className="flex items-center justify-center overflow-x-auto py-4 scrollbar-none">
          <img
            src={techStackImg}
            alt="Technology Stack: HTML5, Vue, Figma, CSS3, npm, React, Python, AWS, and more"
            className="w-full max-w-5xl h-auto object-contain min-w-[700px]"
          />
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

