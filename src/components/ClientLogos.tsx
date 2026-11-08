import React from 'react';
import logoInvesto from '../assets/logo-investo.png';
import logoZinnikart from '../assets/logo-zinnikart.png';
import logoVytl from '../assets/logo-vytl.png';
import logoSportex from '../assets/logo-sportex.png';
import logoMeds15 from '../assets/logo-meds15.png';
import logoShortFilmShow from '../assets/logo-shortfilmshow.png';
import logoLavenue from '../assets/logo-lavenue.png';
import logoHappierMeditation from '../assets/logo-happier-meditation.png';

const brands = [
  { name: 'Investo', src: logoInvesto },
  { name: 'ZinniKart', src: logoZinnikart },
  { name: 'Vytl Health', src: logoVytl },
  { name: 'SportEx', src: logoSportex },
  { name: 'MEDS 15', src: logoMeds15 },
  { name: 'The Short Film Show', src: logoShortFilmShow },
  { name: "L'AVENUE 137", src: logoLavenue },
  { name: 'Happier Meditation', src: logoHappierMeditation },
];

export const ClientLogos: React.FC = () => {
  return (
    <section className="w-full bg-[#f8f9fa] py-6 sm:py-8 border-b border-gray-100 overflow-hidden select-none m-0 p-0">
      {/* Edge-to-edge Marquee Ticker with 0 left/right margin */}
      <div className="relative w-full overflow-hidden group">
        {/* Left & Right Soft Blur Edge Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#f8f9fa] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#f8f9fa] to-transparent z-10 pointer-events-none" />

        {/* Infinite Marquee Ticker (auto-scroll & pause on hover) */}
        <div className="animate-marquee flex items-center gap-14 sm:gap-20 md:gap-24">
          {/* Set 1 */}
          {brands.map((brand, i) => (
            <div
              key={`b1-${i}`}
              className="flex-shrink-0 flex items-center justify-center cursor-default opacity-80 hover:opacity-100 transition-opacity"
            >
              <img
                src={brand.src}
                alt={brand.name}
                className="h-7 sm:h-8 md:h-9 w-auto max-w-[140px] sm:max-w-[170px] object-contain"
                loading="lazy"
              />
            </div>
          ))}

          {/* Set 2 (for seamless -50% infinite loop) */}
          {brands.map((brand, i) => (
            <div
              key={`b2-${i}`}
              className="flex-shrink-0 flex items-center justify-center cursor-default opacity-80 hover:opacity-100 transition-opacity"
            >
              <img
                src={brand.src}
                alt={brand.name}
                className="h-7 sm:h-8 md:h-9 w-auto max-w-[140px] sm:max-w-[170px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
