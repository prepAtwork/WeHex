import React from 'react';

const brands = [
  {
    name: 'DEV STORY',
    render: () => (
      <div className="flex items-center gap-2 tracking-wider font-extrabold text-xl sm:text-2xl text-gray-800 hover:text-black transition-colors font-mono">
        <span className="text-[#00BE80]">&lt;/&gt;</span>
        <span>DEV STORY</span>
      </div>
    ),
  },
  {
    name: 'SportEx',
    render: () => (
      <div className="flex items-center gap-1.5 tracking-tight font-black text-2xl sm:text-3xl text-gray-800 hover:text-black italic transition-colors">
        <span>Sport</span>
        <span className="text-[#00BE80]">Ex</span>
      </div>
    ),
  },
  {
    name: 'Zinnikart',
    render: () => (
      <div className="flex items-center gap-2 font-black text-xl sm:text-2xl tracking-tight text-gray-800 hover:text-black transition-colors">
        <span className="w-6 h-6 rounded-lg bg-[#00BE80] flex items-center justify-center text-black font-extrabold text-xs not-italic">
          Z
        </span>
        <span className="uppercase tracking-widest text-lg font-bold">ZINIKART</span>
      </div>
    ),
  },
  {
    name: "L'AVENUE 137",
    render: () => (
      <div className="font-serif font-semibold tracking-[0.25em] text-lg sm:text-xl text-gray-800 hover:text-black transition-colors">
        L'AVENUE <span className="font-sans font-light text-xs align-super text-gray-500">137</span>
      </div>
    ),
  },
];

export const ClientLogos: React.FC = () => {
  return (
    <section className="w-full bg-[#f8f9fa] py-7 sm:py-8 border-b border-gray-100 overflow-hidden select-none m-0 p-0">
      {/* Edge-to-edge Marquee Ticker with 0 left/right margin */}
      <div className="relative w-full overflow-hidden group">
        {/* Left & Right Soft Blur Edge Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-r from-[#f8f9fa] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-l from-[#f8f9fa] to-transparent z-10 pointer-events-none" />

        {/* Infinite Marquee Ticker */}
        <div className="animate-marquee flex items-center gap-16 sm:gap-24">
          {/* Set 1 */}
          {brands.map((b, i) => (
            <div key={`b1-${i}`} className="flex-shrink-0 cursor-default opacity-85 hover:opacity-100 transition-opacity">
              {b.render()}
            </div>
          ))}

          {/* Set 2 */}
          {brands.map((b, i) => (
            <div key={`b2-${i}`} className="flex-shrink-0 cursor-default opacity-85 hover:opacity-100 transition-opacity">
              {b.render()}
            </div>
          ))}

          {/* Set 3 */}
          {brands.map((b, i) => (
            <div key={`b3-${i}`} className="flex-shrink-0 cursor-default opacity-85 hover:opacity-100 transition-opacity">
              {b.render()}
            </div>
          ))}

          {/* Set 4 */}
          {brands.map((b, i) => (
            <div key={`b4-${i}`} className="flex-shrink-0 cursor-default opacity-85 hover:opacity-100 transition-opacity">
              {b.render()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
