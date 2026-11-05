import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientLogos } from './components/ClientLogos';
import { Services } from './components/Services';
import { AboutUs } from './components/AboutUs';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { TechStack } from './components/TechStack';
import { Reviews } from './components/Reviews';
import { Comparison } from './components/Comparison';
import { FAQ } from './components/FAQ';
import { Blog } from './components/Blog';
import { MarqueeBanner } from './components/MarqueeBanner';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f3f6fa] text-gray-900 font-sans selection:bg-[#d8fa35] selection:text-black">
      {/* Centered Artboard Presentation Container */}
      <div className="max-w-[1440px] mx-auto bg-white shadow-[0_0_50px_rgba(0,0,0,0.06)] relative overflow-hidden">
        {/* Navigation Bar */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Client Logos Ribbon */}
        <ClientLogos />

        {/* Section 01: Services */}
        <Services />

        {/* Section 02: About Us & Stats */}
        <AboutUs />

        {/* Section 03: Process Timeline */}
        <Process />

        {/* Section 04: Dark Portfolio Showcase */}
        <Portfolio />

        {/* Section 05: Tech Stack */}
        <TechStack />

        {/* Section 06: Client Reviews & Testimonials */}
        <Reviews />

        {/* Section 07: Dark Comparison Table */}
        <Comparison />

        {/* Section 08: Common Questions / FAQ */}
        <FAQ />

        {/* Section 09: Strategic Insights / Blog */}
        <Blog />

        {/* Gigantic Display Marquee Banner */}
        <MarqueeBanner />

        {/* Final CTA & Contact Form */}
        <ContactCTA />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;

