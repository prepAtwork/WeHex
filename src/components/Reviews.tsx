import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ankitInvesto from '../assets/ankit_,_investo.avif';
import rajJatav from '../assets/raj-jatav.jpg';
import vytlHealth from '../assets/vytl-health.jpg';
import happierMeditation from '../assets/happier-meditation.jpg';
import shortfilmshow from '../assets/shortfilmshow.jpg';
import daveBenz from '../assets/dave_benz.avif';
import logoInvesto from '../assets/logo-investo.png';
import logoZinnikart from '../assets/logo-zinnikart.png';
import logoVytl from '../assets/logo-vytl.png';
import logoHappierMeditation from '../assets/logo-happier-meditation.png';
import logoShortFilmShow from '../assets/logo-shortfilmshow.png';

interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
  logo?: string;
}

const reviews: Review[] = [
  {
    id: 'ankit',
    name: 'Ankit Raj Singh',
    role: 'Co-Founder & CEO',
    company: 'Investo',
    quote: 'Grabky Team understood our vision from day one and helped us turn complex ideas into a clean, intuitive product. Their team was proactive, detail-oriented, and consistently delivered beyond expectations.',
    image: ankitInvesto,
    logo: logoInvesto,
  },
  {
    id: 'raj',
    name: 'Raj Jatav',
    role: 'Founder & CEO',
    company: 'ZiniKart',
    quote: 'What stood out most was their ability to move fast without compromising quality. From product planning to execution, Grabky Team felt like an extension of our own team.',
    image: rajJatav,
    logo: logoZinnikart,
  },
  {
    id: 'ben',
    name: 'Ben Harper',
    role: 'Product Lead',
    company: 'VYTL Health',
    quote: 'We needed a platform that was reliable, scalable, and easy for patients to use. The Grabky Team delivered exactly that while maintaining clear communication throughout the project.',
    image: vytlHealth,
    logo: logoVytl,
  },
  {
    id: 'michael',
    name: 'Michael Reed',
    role: 'Founder',
    company: 'Happier Meditation',
    quote: 'The team brought a thoughtful approach to both design and development. They helped simplify the user journey and created an experience that aligned perfectly with our brand.',
    image: happierMeditation,
    logo: logoHappierMeditation,
  },
  {
    id: 'david',
    name: 'David Miller',
    role: 'Executive Producer',
    company: 'The Short Film Show',
    quote: 'Working with Grabky Team was refreshingly straightforward. They understood our requirements quickly, offered valuable suggestions, and delivered a polished product on schedule.',
    image: shortfilmshow,
    logo: logoShortFilmShow,
  },
  {
    id: 'dave',
    name: 'Dave Benz',
    role: 'CMO',
    company: 'Tixscape',
    quote: 'Grabky Team delivered a high-quality mobile application with strong attention to performance and detail. Communication was clear throughout the project, and the final product met all our expectations.',
    image: daveBenz,
  },
];

export const Reviews: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-20 sm:py-28 border-b border-gray-100 overflow-hidden w-full">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wide text-gray-400 mb-8 font-mono">
          <span>/Reviews</span>
          <span>(06)</span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight"
              style={{ lineHeight: 1.36 }}
            >
              Good work speaks. Happy clients say more.
            </h2>
          </div>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-700 hover:bg-gray-100 hover:border-gray-300 transition-colors shadow-sm"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-700 hover:bg-gray-100 hover:border-gray-300 transition-colors shadow-sm"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Cards Row — Full-bleed Portrait Cards with Bottom Gradient */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex-shrink-0 w-[300px] sm:w-[350px] lg:w-[370px] h-[490px] sm:h-[530px] rounded-[28px] sm:rounded-[32px] overflow-hidden relative shadow-[0_12px_36px_rgba(0,0,0,0.12)] snap-start group border border-gray-100"
            >
              {/* Person Headshot (Full Card) */}
              <img
                src={review.image}
                alt={review.name}
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />

              {/* Seamless Bottom Vignette Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 via-48% to-transparent pointer-events-none" />

              {/* Content Overlaid at Bottom */}
              <div className="relative z-10 flex flex-col justify-end h-full p-6 sm:p-7 text-white">
                {/* Company Logo or Badge */}
                <div className="flex items-center gap-2 mb-3.5">
                  {review.logo ? (
                    <img
                      src={review.logo}
                      alt={review.company}
                      className="h-4 sm:h-5 w-auto max-w-[130px] object-contain brightness-0 invert opacity-95"
                    />
                  ) : (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center bg-white/10 backdrop-blur-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00BE80]" />
                      </div>
                      <span className="text-xs sm:text-[13px] font-semibold text-white/95 tracking-wide">
                        {review.company}
                      </span>
                    </div>
                  )}
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-[13.5px] text-white/90 font-normal leading-[1.65] line-clamp-4 mb-4">
                  "{review.quote}"
                </p>

                {/* Author & Role */}
                <div className="pt-2 border-t border-white/15">
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">
                    {review.name}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-white/70 font-normal mt-0.5">
                    {review.role} @ {review.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
