import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import t1Head from '../assets/testimonial-1-head.jpg';
import t2Head from '../assets/testimonial-2-head.jpg';
import t3Head from '../assets/testimonial-3-head.jpg';
import t4Head from '../assets/testimonial-4-head.jpg';

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
    id: 'sofia',
    name: 'Sofia',
    role: 'Product Manager @ Innovatech',
    company: 'NeuroLink',
    quote: 'The team at Grabky exceeded my expectations with their commitment and attention to detail throughout the project.',
    image: t1Head,
    bgColor: '#f7c5cc',
  },
  {
    id: 'leo',
    name: 'Leo',
    role: 'CEO @ NextGen Solutions',
    company: 'NeuroLink',
    quote: 'Our collaboration with Grabky resulted in a product that not only met our needs but also delighted our users.',
    image: t2Head,
    bgColor: '#dfc2b6',
  },
  {
    id: 'jamal',
    name: 'Jamal',
    role: 'Lead Developer @ TechFusion',
    company: 'NeuroLink',
    quote: 'Working with Grabky was a game changer; their innovative approach streamlined our workflow significantly.',
    image: t3Head,
    bgColor: '#b5a5db',
  },
  {
    id: 'clara',
    name: 'Clara',
    role: 'UX Designer @ OrbitX',
    company: 'NeuroLink',
    quote: 'From concept to execution, their expertise and communication made a complex project feel completely effortless.',
    image: t4Head,
    bgColor: '#a7cde6',
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
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-[1.15] mb-4">
            The proof is in the partnership.
          </h2>

          {/* Trustpilot Badge */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700">
            <div className="w-5 h-5 bg-[#00b67a] flex items-center justify-center rounded-[3px] text-white">
              <Star className="w-3.5 h-3.5 fill-white" />
            </div>
            <span className="font-bold text-gray-900">Trustpilot</span>
            <span className="text-gray-500">Based on <span className="underline cursor-pointer text-gray-800">456 reviews</span></span>
          </div>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex justify-end gap-2 mb-6">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors shadow-sm"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors shadow-sm"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Testimonials Cards Row */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex-shrink-0 w-[300px] sm:w-[350px] lg:w-[380px] h-[520px] rounded-[32px] overflow-hidden relative shadow-[0_8px_30px_rgba(0,0,0,0.08)] snap-start group flex flex-col justify-between"
              style={{ backgroundColor: review.bgColor }}
            >
              {/* Person Headshot */}
              <div className="w-full h-[62%] overflow-hidden">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Bottom Frosted Dark Overlay with Review Info */}
              <div className="h-[46%] -mt-10 p-6 sm:p-7 bg-[#1c1c20]/95 backdrop-blur-md rounded-b-[32px] text-white flex flex-col justify-between shadow-2xl border-t border-white/10">
                <div>
                  {/* NeuroLink Logo Badge */}
                  <div className="flex items-center gap-2 mb-2.5">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 3a9 9 0 0 1 9 9" />
                      <path d="M12 7a5 5 0 0 1 5 5" />
                    </svg>
                    <span className="text-xs font-semibold tracking-wider text-gray-300 uppercase">
                      {review.company}
                    </span>
                  </div>

                  {/* Quote Text */}
                  <p className="text-xs sm:text-sm text-gray-200 font-normal leading-relaxed line-clamp-3">
                    {review.quote}
                  </p>
                </div>

                {/* Author & Role */}
                <div className="pt-2">
                  <h4 className="text-base font-bold text-white">
                    {review.name}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {review.role}
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
