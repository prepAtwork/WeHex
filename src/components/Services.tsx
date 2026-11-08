import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import serviceAppDevImg from '../assets/service-app-dev.jpg';
import serviceWebDevImg from '../assets/service-web-dev.jpg';
import serviceDesignImg from '../assets/service-design-branding.jpg';
import serviceStaffingImg from '../assets/service-staffing.jpg';
import serviceMarketingImg from '../assets/service-marketing.jpg';
import serviceMaintImg from '../assets/service-maintenance.jpg';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'app-development',
    title: 'App Development',
    description: 'Powerful mobile applications built to solve problems and create better user experiences.',
    image: serviceAppDevImg,
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Modern, scalable websites and web platforms designed around your business goals.',
    image: serviceWebDevImg,
  },
  {
    id: 'product-design',
    title: 'Product Design',
    description: 'Intuitive UI/UX design that turns complex ideas into simple, engaging experiences.',
    image: serviceDesignImg,
  },
  {
    id: 'staffing',
    title: 'Staffing',
    description: 'Skilled developers and creative professionals to strengthen your team and accelerate delivery.',
    image: serviceStaffingImg,
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Strategic marketing that builds visibility, attracts the right audience and drives growth.',
    image: serviceMarketingImg,
  },
  {
    id: 'maintenance-consulting',
    title: 'Maintenance & Consulting',
    description: 'Ongoing technical support, expert guidance and improvements to keep your digital products performing.',
    image: serviceMaintImg,
  },
];

// 3 identical sets to provide seamless infinite auto-scroll and manual bi-directional scrolling
const allServices = [...servicesData, ...servicesData, ...servicesData];

export const Services: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const userInteractionTimeoutRef = useRef<number | null>(null);

  // Auto-scroll loop
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let singleSetWidth = container.scrollWidth / 3;

    // Start centered in Set 2 so user can scroll left or right immediately
    if (container.scrollLeft === 0) {
      container.scrollLeft = singleSetWidth;
    }

    const step = () => {
      if (container && !isPaused && !isDraggingRef.current) {
        singleSetWidth = container.scrollWidth / 3;
        container.scrollLeft += 0.9;

        // Infinite seamless wrap
        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft -= singleSetWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += singleSetWidth;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (userInteractionTimeoutRef.current) {
        clearTimeout(userInteractionTimeoutRef.current);
      }
    };
  }, [isPaused]);

  // Pause temporarily during user interaction, then resume
  const pauseTemporarily = (duration = 3500) => {
    setIsPaused(true);
    if (userInteractionTimeoutRef.current) {
      clearTimeout(userInteractionTimeoutRef.current);
    }
    userInteractionTimeoutRef.current = window.setTimeout(() => {
      setIsPaused(false);
    }, duration);
  };

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - container.offsetLeft;
    scrollLeftStartRef.current = container.scrollLeft;
    setIsPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeftStartRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      pauseTemporarily(2500);
    }
  };

  // Manual Arrow Scroll
  const handleArrowScroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    pauseTemporarily(4000);
    const offset = direction === 'left' ? -380 : 380;
    container.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section id="services" className="bg-white py-20 sm:py-28 w-full overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wide text-gray-400 mb-6 font-mono">
          <span>/Our Services</span>
          <span>(01)</span>
        </div>

        {/* Section Headline & Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight max-w-2xl"
              style={{ lineHeight: 1.36 }}
            >
              Everything you need to build, launch &amp; grow.
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 font-mono tracking-wide mt-2">
              Auto-scrolls continuously • Drag, swipe or click arrows to explore manually
            </p>
          </div>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => handleArrowScroll('left')}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-700 hover:bg-gray-100 hover:border-gray-300 transition-colors shadow-sm"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleArrowScroll('right')}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-700 hover:bg-gray-100 hover:border-gray-300 transition-colors shadow-sm"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>

      {/* Dual Control Track: Auto-Scroll + Manual Drag/Swipe/Wheel */}
      <div className="relative w-full overflow-hidden group select-none">
        {/* Soft edge blur masks */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        {/* Scrollable Container with native drag/swipe & auto-scroll */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            handleMouseUpOrLeave();
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onWheel={() => pauseTemporarily(2000)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => pauseTemporarily(2500)}
          className="flex items-stretch gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none no-scrollbar cursor-grab active:cursor-grabbing px-4 sm:px-8"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            scrollBehavior: isDraggingRef.current ? 'auto' : undefined,
          }}
        >
          {allServices.map((service, index) => (
            <div
              key={`srv-${service.id}-${index}`}
              className="group/card flex-shrink-0 w-[300px] sm:w-[350px] md:w-[370px] h-[430px] rounded-[28px] p-6 bg-[#f8f9fa] border border-gray-100 shadow-sm hover:shadow-2xl hover:scale-[1.01] hover:bg-[#141416] transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              {/* Top: Tag + Arrow + Title & Description */}
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-[11px] font-mono font-bold tracking-wider text-gray-400 group-hover/card:text-[#00BE80] transition-colors uppercase">
                    {`0${(index % 6) + 1} // Service`}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-gray-200 bg-white group-hover/card:bg-[#00BE80] group-hover/card:text-black group-hover/card:border-transparent flex items-center justify-center text-gray-600 transition-all shadow-2xs">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.4] group-hover/card:rotate-45 transition-transform duration-200" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 group-hover/card:text-white transition-colors mb-2 leading-[1.3]">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 group-hover/card:text-gray-300 font-normal leading-[1.65] line-clamp-2 transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Bottom: Service Illustration Image */}
              <div className="w-full h-44 sm:h-48 rounded-2xl overflow-hidden mt-4 relative border border-gray-200/60 group-hover/card:border-white/10 bg-gray-100 shadow-xs pointer-events-none">
                <img
                  src={service.image}
                  alt={service.title}
                  draggable={false}
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500 pointer-events-none select-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
