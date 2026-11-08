import React from 'react';
import frame1 from '../assets/Frame 1.png';
import frame2 from '../assets/Frame 2.png';
import frame3 from '../assets/Frame 3.png';
import frame4 from '../assets/Frame 4.png';
import frame5 from '../assets/Frame 5.png';
import frame6 from '../assets/Frame 6.png';
import frame7 from '../assets/Frame 7.png';
import frame8 from '../assets/Frame 8.png';
import frame10 from '../assets/Frame 10.png';
import frame11 from '../assets/Frame 11.png';
import frame12 from '../assets/Frame 12.png';
import frame13 from '../assets/Frame 13.png';
import frame14 from '../assets/Frame 14.png';
import frame15 from '../assets/Frame 15.png';

const stackLogos = [
  { id: 'f1', src: frame1 },
  { id: 'f2', src: frame2 },
  { id: 'f3', src: frame3 },
  { id: 'f4', src: frame4 },
  { id: 'f5', src: frame5 },
  { id: 'f6', src: frame6 },
  { id: 'f7', src: frame7 },
  { id: 'f8', src: frame8 },
  { id: 'f10', src: frame10 },
  { id: 'f11', src: frame11 },
  { id: 'f12', src: frame12 },
  { id: 'f13', src: frame13 },
  { id: 'f14', src: frame14 },
  { id: 'f15', src: frame15 },
];

export const TechStack: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-28 border-b border-gray-100 w-full overflow-hidden select-none">
      {/* Header Container */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        {/* Section Header */}
        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wide text-gray-400 mb-8 font-mono">
          <span>/Stack</span>
          <span>(05)</span>
        </div>

        {/* Section Headline */}
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight max-w-2xl"
          style={{ lineHeight: 1.36 }}
        >
          The right technology to build what's next.
        </h2>
      </div>

      {/* 100% Edge-to-Edge Marquee Ticker */}
      <div className="relative w-full overflow-hidden group py-2 select-none">
        {/* Soft blurry fade masks on both sides */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-10 sm:gap-14 md:gap-16 py-2">
          {/* Set 1 */}
          {stackLogos.map((logo, index) => (
            <div
              key={`s1-${logo.id}-${index}`}
              className="flex-shrink-0 flex items-center justify-center p-2 rounded-2xl transition-all duration-300 hover:scale-110"
            >
              <img
                src={logo.src}
                alt={`Technology stack ${index + 1}`}
                className="h-12 sm:h-14 md:h-16 w-auto max-w-[72px] object-contain"
                loading="lazy"
              />
            </div>
          ))}

          {/* Set 2 (for seamless -50% infinite marquee loop) */}
          {stackLogos.map((logo, index) => (
            <div
              key={`s2-${logo.id}-${index}`}
              className="flex-shrink-0 flex items-center justify-center p-2 rounded-2xl transition-all duration-300 hover:scale-110"
            >
              <img
                src={logo.src}
                alt={`Technology stack ${index + 1}`}
                className="h-12 sm:h-14 md:h-16 w-auto max-w-[72px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Supporting Subtitle */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12 text-center">
        <p className="text-xs sm:text-sm text-gray-500 font-medium">
          We use a proven architecture for a fast product.
        </p>
      </div>
    </section>
  );
};
