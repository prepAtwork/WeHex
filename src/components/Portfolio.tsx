import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import port1Img from '../assets/portfolio-1.jpg';
import port2Img from '../assets/portfolio-2.jpg';
import port3Img from '../assets/portfolio-3.jpg';
import port4Img from '../assets/portfolio-4.jpg';

interface Project {
  id: string;
  category: string;
  title: string;
  desc: string;
  tags: string[];
  image: string;
  details?: string;
}

const projects: Project[] = [
  {
    id: 'fintrack',
    category: 'AI & Automation',
    title: 'FinTrack AI Dashboard',
    desc: 'An AI financial tool to predict cash flow and automate expenses.',
    tags: ['Next.js', 'OpenAI', 'Supabase'],
    image: port1Img,
    details: 'Leverages advanced predictive transformers to analyze multi-currency liquidity and automate compliance reporting in real time.'
  },
  {
    id: 'nexus',
    category: 'Web Apps',
    title: 'Nexus E-Commerce',
    desc: 'Headless commerce storefront focusing on web vitals.',
    tags: ['React', 'Tailwind', 'Shopify'],
    image: port2Img,
    details: 'Sub-second page loads powered by edge routing, achieving 99+ Core Web Vitals and 42% lift in conversion rates.'
  },
  {
    id: 'autoflow',
    category: 'AI & Automation',
    title: 'AutoFlow CRM',
    desc: 'An automation engine links sales pipelines with n8n to cut manual entry.',
    tags: ['n8n', 'Python', 'PostgreSQL'],
    image: port3Img,
    details: 'Self-healing workflow architecture integrating 24 internal tools, slashing manual data entry hours by 85%.'
  },
  {
    id: 'stratos',
    category: 'Branding',
    title: 'Stratos Brand Identity',
    desc: 'Visual overhaul and UI/UX design for a European logistics startup.',
    tags: ['Figma', 'UI/UX', 'Branding'],
    image: port4Img,
    details: 'Complete end-to-end design system, vector icon sets, and multi-platform component library ready for mobile and desktop.'
  },
];

const categories = ['All Projects', 'Web Apps', 'AI & Automation', 'Branding'];

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All Projects'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="bg-[#121316] py-20 sm:py-28 text-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wide text-gray-500 mb-8 font-mono">
          <span>/Our Portfolio</span>
          <span>(04)</span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-10 sm:mb-12 max-w-2xl">
          Engineering intelligent software & automation solutions.
        </h2>

        {/* Controls Bar: Filters on Left, CTA on Right */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mb-12 sm:mb-16">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#d8fa35] text-black shadow-md'
                    : 'bg-[#1e2025] text-gray-300 hover:text-white hover:bg-[#282a32] border border-gray-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Schedule Strategy Call CTA */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-[#d8fa35] hover:bg-[#c6ea24] text-black text-xs sm:text-sm font-bold pl-4 pr-1.5 py-1.5 rounded-full transition-all hover:scale-105"
          >
            <span>Schedule a Strategy Call</span>
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-200">
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </a>
        </div>

        {/* 2x2 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group flex flex-col justify-between cursor-pointer"
            >
              {/* Project Image Container with Built-in + Button */}
              <div className="relative rounded-[28px] overflow-hidden bg-[#1a1b20] aspect-[16/11] sm:aspect-[16/10] mb-5 border border-white/5 shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-[#d8fa35] transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 font-normal mb-4 leading-relaxed">
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
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
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#252730] text-[#d8fa35]"
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
