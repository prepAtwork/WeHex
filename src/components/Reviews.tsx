import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import ankitInvesto from '../assets/ankit_,_investo.avif';
import rajJatav from '../assets/raj-jatav.jpg';
import vytlHealth from '../assets/vytl-health.jpg';
import happierMeditation from '../assets/happier-meditation.jpg';
import shortfilmshow from '../assets/shortfilmshow.jpg';
import daveBenz from '../assets/dave_benz.avif';

interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
  bgColor: string;
}

const reviews: Review[] = [
  {
    id: 'ankit',
    name: 'Ankit Raj Singh',
    role: 'Co-Founder & CEO',
    company: 'Investo',
    quote: 'Grabky Team understood our vision from day one and helped us turn complex ideas into a clean, intuitive product. Their team was proactive, detail-oriented, and consistently delivered beyond expectations.',
    image: ankitInvesto,
    bgColor: '#dbeafe',
  },
  {
    id: 'raj',
    name: 'Raj Jatav',
    role: 'Founder & CEO',
    company: 'ZiniKart',
    quote: 'What stood out most was their ability to move fast without compromising quality. From product planning to execution, Grabky Team felt like an extension of our own team.',
    image: rajJatav,
    bgColor: '#dcfce7',
  },
  {
    id: 'ben',
    name: 'Ben Harper',
    role: 'Product Lead',
    company: 'VYTL Health',
    quote: 'We needed a platform that was reliable, scalable, and easy for patients to use. The Grabky Team delivered exactly that while maintaining clear communication throughout the project.',
    image: vytlHealth,
    bgColor: '#fef3c7',
  },
  {
    id: 'michael',
    name: 'Michael Reed',
    role: 'Founder',
    company: 'Happier Meditation',
    quote: 'The team brought a thoughtful approach to both design and development. They helped simplify the user journey and created an experience that aligned perfectly with our brand.',
    image: happierMeditation,
    bgColor: '#f3e8ff',
  },
  {
    id: 'david',
    name: 'David Miller',
    role: 'Executive Producer',
    company: 'The Short Film Show',
    quote: 'Working with Grabky Team was refreshingly straightforward. They understood our requirements quickly, offered valuable suggestions, and delivered a polished product on schedule.',
    image: shortfilmshow,
    bgColor: '#ffedd5',
  },
  {
    id: 'dave',
    name: 'Dave Benz',
    role: 'CMO',
    company: 'Tixscape',
    quote: 'Grabky Team delivered a high-quality mobile application with strong attention to performance and detail. Communication was clear throughout the project, and the final product met all our expectations.',
    image: daveBenz,
    bgColor: '#e0e7ff',
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

        {/* Testimonials Cards Row */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex-shrink-0 w-[300px] sm:w-[360px] lg:w-[380px] h-[520px] rounded-[32px] overflow-hidden relative shadow-[0_8px_30px_rgba(0,0,0,0.08)] snap-start group flex flex-col justify-between"
              style={{ backgroundColor: review.bgColor }}
            >
              {/* Person Headshot */}
              <div className="w-full h-[60%] overflow-hidden">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Bottom Frosted Dark Overlay with Review Info */}
              <div className="h-[48%] -mt-10 p-6 sm:p-7 bg-[#1c1c20]/95 backdrop-blur-md rounded-b-[32px] text-white flex flex-col justify-between shadow-2xl border-t border-white/10">
                <div>
                  {/* Company Badge */}
                  <div className="flex items-center gap-2 mb-2.5">
                    <Quote className="w-3.5 h-3.5 text-[#00BE80] rotate-180" />
                    <span className="text-xs font-semibold tracking-wider text-[#00BE80] uppercase">
                      {review.company}
                    </span>
                  </div>

                  {/* Quote Text with improved line spacing */}
                  <p className="text-xs sm:text-sm text-gray-200 font-normal leading-[1.7] line-clamp-4">
                    "{review.quote}"
                  </p>
                </div>

                {/* Author & Role */}
                <div className="pt-2 border-t border-white/10">
                  <h4 className="text-base font-bold text-white">
                    {review.name}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {review.role}, {review.company}
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
