import React from 'react';
import { Calendar, Layers, Code2, Rocket, Wrench } from 'lucide-react';
import processDevImg from '../assets/process-developer.jpg';

interface Step {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    num: '(1)',
    title: 'Meeting',
    desc: 'We explore your business for automation and growth opportunities.',
    icon: <Calendar className="w-4 h-4 text-gray-800" />,
  },
  {
    num: '(2)',
    title: 'Prototype',
    desc: 'We turn ideas into blueprints and designs for validation.',
    icon: <Layers className="w-4 h-4 text-gray-800" />,
  },
  {
    num: '(3)',
    title: 'Development',
    desc: 'Engineers build modern solutions for speed and security.',
    icon: <Code2 className="w-4 h-4 text-gray-800" />,
  },
  {
    num: '(4)',
    title: 'Launch',
    desc: 'We ensure a flawless go-live experience after stress testing.',
    icon: <Rocket className="w-4 h-4 text-gray-800" />,
  },
  {
    num: '(5)',
    title: 'Maintenance:',
    desc: 'We provide ongoing optimization to keep your tech ahead.',
    icon: <Wrench className="w-4 h-4 text-gray-800" />,
  },
];

export const Process: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-28 border-b border-gray-100">
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
                alt="Developer working on architecture and code"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right: Headline and Connected Step Timeline */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-[1.15] mb-10">
              From initial spark to scalable reality.
            </h2>

            {/* Steps Container */}
            <div className="relative flex flex-col space-y-7">
              {/* Vertical connecting line */}
              <div className="absolute top-4 bottom-6 left-4 w-[2px] bg-[#38bdf8]/40" />

              {steps.map((step, index) => (
                <div key={index} className="relative flex items-start gap-5 group">
                  {/* Step Cyan Number Bubble */}
                  <div className="relative z-10 w-8 h-8 rounded-full bg-[#38bdf8] text-white flex items-center justify-center font-bold text-xs shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                    {step.num}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-0.5">
                    <div className="flex items-center gap-2 mb-1">
                      {step.icon}
                      <h3 className="text-base sm:text-lg font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed">
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

