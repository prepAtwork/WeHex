import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import blog1Img from '../assets/blog-1.jpg';
import blog2Img from '../assets/blog-2.jpg';
import blog3Img from '../assets/blog-3.jpg';

interface BlogPost {
  id: string;
  title: string;
  tags: string[];
  image: string;
}

const posts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'How to integrate LLMs into your existing customer support workflow.',
    tags: ['Automation', 'AI Strategy', 'Dev Trends'],
    image: blog1Img,
  },
  {
    id: 'post-2',
    title: 'Why Next.js is the superior choice for high-performance SaaS platforms.',
    tags: ['Backend', 'LLMs', 'Workflows'],
    image: blog2Img,
  },
  {
    id: 'post-3',
    title: 'The psychology of UI: How micro-interactions boost user retention.',
    tags: ['Product', 'Retention', 'Figma'],
    image: blog3Img,
  },
];

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="bg-[#fcfcfc] py-20 sm:py-28 border-b border-gray-100">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wide text-gray-400 mb-8 font-mono">
          <span>/Newest Blog</span>
          <span>(09)</span>
        </div>

        {/* Top Header: Headline on Left, Button on Right */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-[1.15] max-w-xl">
            Strategic insights on AI, Tech, and Growth.
          </h2>

          <a
            href="#blog"
            className="group inline-flex items-center gap-3 bg-[#d8fa35] hover:bg-[#c6ea24] text-black text-xs sm:text-sm font-bold pl-4 pr-1.5 py-1.5 rounded-full transition-all hover:scale-105"
          >
            <span>Explore our Insights</span>
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-200">
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </a>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col cursor-pointer"
            >
              {/* Card Image (Contains built-in frosted category badge) */}
              <div className="relative rounded-[28px] overflow-hidden bg-gray-100 aspect-[16/11] mb-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Tags Row */}
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-0.5 rounded-full text-[11px] font-medium bg-white text-gray-600 border border-gray-200/80 shadow-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-950 tracking-tight leading-snug group-hover:text-black group-hover:underline transition-all">
                {post.title}
              </h3>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
