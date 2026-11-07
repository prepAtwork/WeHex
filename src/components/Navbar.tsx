import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import grabkyLogo from '../assets/grabky-logo@2x.png';

interface NavbarProps {
  onContactClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-5 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1320px] mx-auto">
        <nav className="bg-white/90 backdrop-blur-md border border-white/70 shadow-[0_4px_24px_rgba(0,0,0,0.06)] rounded-2xl md:rounded-full px-5 sm:px-7 py-3 flex items-center justify-between transition-all">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img
              src={grabkyLogo}
              alt="Grabky Technologies"
              className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7 lg:gap-9">
            <a href="#portfolio" className="text-[15px] font-medium text-gray-700 hover:text-black transition-colors">
              Portfolio
            </a>
            <a href="#services" className="text-[15px] font-medium text-gray-700 hover:text-black transition-colors">
              Services
            </a>
            <a href="#services" className="text-[15px] font-medium text-gray-700 hover:text-black transition-colors">
              Staffing
            </a>
            <a href="#about" className="text-[15px] font-medium text-gray-700 hover:text-black transition-colors">
              About Us
            </a>
            <a href="#contact" className="text-[15px] font-medium text-gray-700 hover:text-black transition-colors">
              Contact Us
            </a>
          </div>

          {/* Right Controls */}
          <div className="hidden sm:flex items-center">
            {/* CTA Button */}
            <a
              href="#contact"
              onClick={onContactClick}
              className="group flex items-center gap-2.5 bg-[#00BE80] hover:bg-[#00a872] text-black text-sm font-semibold pl-4 pr-1.5 py-1.5 rounded-full transition-all shadow-sm hover:shadow"
            >
              <span>Contact Us</span>
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-200">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 bg-white/95 backdrop-blur-lg border border-gray-100 rounded-2xl p-5 shadow-xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-gray-800 hover:text-black py-1"
            >
              Portfolio
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-gray-800 hover:text-black py-1"
            >
              Services
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-gray-800 hover:text-black py-1"
            >
              Staffing
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-gray-800 hover:text-black py-1"
            >
              About Us
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-gray-800 hover:text-black py-1"
            >
              Contact Us
            </a>
            <div className="pt-2 border-t border-gray-100 flex items-center justify-end">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 bg-[#00BE80] hover:bg-[#00a872] text-black text-sm font-semibold px-5 py-2.5 rounded-full"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
