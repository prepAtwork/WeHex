import React from 'react';
import { Search, PenTool, Code2, Rocket, TrendingUp } from 'lucide-react';
import processDevImg from '../assets/process-developer.jpg';

interface Step {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    num: '01',
    title: '01 — Discover',
    desc: 'We understand your business, goals and challenges to identify the right opportunities and define a clear direction.',
    icon: <Search className="w-4 h-4 text-gray-800" />,
  },
  {
    num: '02',
    title: '02 — Plan & Design',
    desc: 'We shape your ideas into practical strategies, intuitive user experiences and detailed product designs.',
    icon: <PenTool className="w-4 h-4 text-gray-800" />,
  },
  {
    num: '03',
    title: '03 — Develop',
    desc: 'Our team brings everything together, building reliable, scalable digital products tailored to your needs.',
    icon: <Code2 className="w-4 h-4 text-gray-800" />,
  },
  {
    num: '04',
    title: '04 — Launch',
    desc: 'We test, refine and deploy your product, making sure everything is ready for the real world.',
    icon: <Rocket className="w-4 h-4 text-gray-800" />,
  },
  {
    num: '05',
    title: '05 — Support & Grow',
    desc: 'We provide ongoing maintenance, improvements and guidance to help your product evolve with your business.',
    icon: <TrendingUp className="w-4 h-4 text-gray-800" />,
  },
];

export const Process: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-28 border-b border-gray-100 w-full">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wide text-gray-400 mb-8 font-mono">
          <span>/Our Process</span>
          <span>(03)</span>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left: Developer Photo Card */}
          <div className="lg:col-span-6">
            <div className="rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 group">
              <img
                src={processDevImg}
                alt="Developer working on product architecture"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right: Headline and Connected Step Timeline */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight mb-10"
              style={{ lineHeight: 1.36 }}
            >
              A clear process. From idea to impact.
            </h2>

            {/* Steps Container */}
            <div className="relative flex flex-col space-y-7">
              {/* Vertical connecting line */}
              <div className="absolute top-4 bottom-6 left-4 w-[2px] bg-[#00BE80]/30" />

              {steps.map((step, index) => (
                <div key={index} className="relative flex items-start gap-5 group">
                  {/* Step Grabky Green Number Bubble */}
                  <div className="relative z-10 w-8 h-8 rounded-full bg-[#00BE80] text-black flex items-center justify-center font-bold text-xs shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                    {step.num}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-0.5">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="text-gray-800">
                        {step.icon}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-[1.3]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 font-normal leading-[1.65]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
