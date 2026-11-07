import React, { useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import port1Img from '../assets/portfolio-shortfilm.png';
import port2Img from '../assets/portfolio-matchcatch.jpg';
import port3Img from '../assets/portfolio-revivo.jpg';
import port4Img from '../assets/portfolio-zinikart.png';
import portVytlImg from '../assets/portfolio-vytl.jpg';
import portSolarImg from '../assets/portfolio-solar.jpg';

interface Project {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  image: string;
  details?: string;
}

const projects: Project[] = [
  {
    id: 'shortfilm-show',
    title: 'ShortFilm Show Platform – Watch Short Films & Trailers',
    desc: 'A modern streaming and discovery platform connecting short-film lovers with independent filmmakers from around the world.',
    tags: ['Platform: Mobile | Web', 'Timeline: 8 Weeks', 'Tech: React.js & React Native'],
    image: port1Img,
    details: 'Custom streaming engine with adaptive bitrate encoding, filmmaker upload portals, review mechanisms, and integrated monetization.',
  },
  {
    id: 'matchcatch',
    title: 'MatchCatch – Dating Platform',
    desc: 'Meet people privately, without swiping. Discover real people, start conversations directly, and connect at your own pace.',
    tags: ['Platform: iOS | Android', 'Timeline: 12 Weeks', 'Tech: Native'],
    image: port2Img,
    details: 'Privacy-first matchmaking protocol eliminating superficial swipe algorithms in favor of verified profiles and conversation starters.',
  },
  {
    id: 'revivo-avenue',
    title: 'Revivo Avenue – E-commerce Platform',
    desc: 'An e-commerce platform designed to deliver a premium clothing shopping experience through intuitive navigation, rich product discovery and a seamless purchasing journey.',
    tags: ['Platform: Web', 'Service: E-Commerce', 'Timeline: 6 Weeks'],
    image: port3Img,
    details: 'High-conversion checkout flows, sub-second product page loads, integrated inventory synchronization, and bespoke aesthetic design.',
  },
  {
    id: 'zinikart',
    title: 'Zinikart – Quick Commerce Platform',
    desc: 'A quick-commerce platform currently under development, connecting local vendors with their target customers and bringing traditional commerce into the digital world through a seamless product journey.',
    tags: ['Platform: Native', 'Service: Product Design', 'Timeline: 12 Weeks'],
    image: port4Img,
    details: 'Hyperlocal inventory routing, ultra-fast 15-minute fulfillment management system, rider tracking, and merchant point-of-sale portal.',
  },
  {
    id: 'vytl-health',
    title: 'VYTL Health – Healthcare Platform',
    desc: 'A healthcare product designed to manage health checkups, detailed blood report analysis and more. It connects healthcare centres with users through a research-driven experience that understands user behaviour and needs.',
    tags: ['Platform: Website', 'Service: Development', 'Tech: React.js', 'Timeline: 8 Weeks'],
    image: portVytlImg,
    details: 'HIPAA-compliant diagnostic dashboard, automated blood panel visualizers, appointment booking, and encrypted clinic record sharing.',
  },
  {
    id: 'zero-bill-energy',
    title: 'Zero Bill Energy – Solar Bidding & Management',
    desc: 'A two-sided energy marketplace connecting customers with verified solar vendors through competitive bidding, transparent comparisons and milestone-based project management.',
    tags: ['Industry: Energy Tech', 'Timeline: 3 Months'],
    image: portSolarImg,
    details: 'Transparent solar bidding marketplace with escrowed milestone payments, satellite roof analysis estimation, and vendor vetting.',
  },
];

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="bg-[#121316] py-20 sm:py-28 text-white w-full">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wide text-gray-500 mb-8 font-mono">
          <span>/Our Portfolio</span>
          <span>(04)</span>
        </div>

        {/* Section Headline with improved line spacing */}
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-12 sm:mb-16 max-w-3xl"
          style={{ lineHeight: 1.36 }}
        >
          Built with purpose. Designed to make an impact.
        </h2>

        {/* 6 Projects in 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group flex flex-col justify-between cursor-pointer"
            >
              {/* Project Image Container with Zoom effect */}
              <div className="relative rounded-[28px] overflow-hidden bg-[#1a1b20] aspect-[16/10] mb-5 border border-white/5 shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Hover overlay with Arrow button */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#00BE80] text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
                  </div>
                </div>
              </div>

              {/* Title & Desc with improved line spacing */}
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2.5 group-hover:text-[#00BE80] transition-colors leading-[1.3]">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 font-normal mb-4 leading-[1.65]">
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-[#1e2025] text-gray-300 border border-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#18191e] border border-gray-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-gray-800 text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-52 object-cover rounded-2xl mb-5"
            />
            <div className="flex flex-wrap gap-2 mb-3">
              {selectedProject.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#252730] text-[#00BE80]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {selectedProject.title}
            </h3>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              {selectedProject.desc}
            </p>
            <p className="text-xs text-gray-400 leading-relaxed border-t border-gray-800 pt-4">
              {selectedProject.details}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
