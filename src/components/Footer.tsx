import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import grabkyLogoWhite from '../assets/grabky-logo-white@2x.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111214] text-white pt-16 sm:pt-20 pb-12 rounded-t-[36px] sm:rounded-t-[44px] -mt-6 relative z-20 w-full">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-gray-800/60">
          
          {/* Left Brand Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#" className="flex items-center gap-2 mb-4 group">
              <img
                src={grabkyLogoWhite}
                alt="Grabky"
                className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </a>
            <p className="text-sm text-gray-400 font-normal leading-relaxed mb-8 max-w-sm">
              Rigorous testing followed by a seamless transition to production.
            </p>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-[#00BE80] hover:bg-[#00a872] text-black text-xs sm:text-sm font-bold pl-4 pr-1.5 py-1.5 rounded-full transition-all hover:scale-105"
            >
              <span>Schedule a Strategy Call</span>
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-200">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </a>
          </div>

          {/* Right Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Pages Column */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                Pages
              </h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
                <a href="#" className="text-gray-300 hover:text-[#00BE80] transition-colors">
                  Home
                </a>
                <a href="#portfolio" className="text-gray-300 hover:text-[#00BE80] transition-colors">
                  Portfolio
                </a>
                <a href="#about" className="text-gray-300 hover:text-[#00BE80] transition-colors">
                  About
                </a>
                <a href="#services" className="text-gray-300 hover:text-[#00BE80] transition-colors">
                  Services
                </a>
                <a href="#blog" className="text-gray-300 hover:text-[#00BE80] transition-colors">
                  Blog
                </a>
                <a href="#contact" className="text-gray-300 hover:text-[#00BE80] transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* Social Column */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                Social
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#00BE80] transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#00BE80] transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#00BE80] transition-colors">
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                Contact
              </h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Wolew 1291</p>
                <p>9236 XD, London</p>
                <p className="pt-1">0 (123) 923647 7345</p>
                <p>
                  <a href="mailto:info@grabky.com" className="hover:text-[#00BE80] transition-colors">
                    info@grabky.com
                  </a>
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Cookies Policy
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
          </div>

          <div className="font-mono text-gray-400">
            @2026 Grabky
          </div>
        </div>

      </div>
    </footer>
  );
};

