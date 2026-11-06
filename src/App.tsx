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
    <div className="min-h-screen w-full bg-[#00BE80] text-gray-950 font-sans selection:bg-[#d8fa35] selection:text-black overflow-x-hidden m-0 p-0">
      {/* Full-width Website Container - No left/right white spaces */}
      <div className="w-full relative overflow-x-hidden">
        {/* Navigation Bar */}
        <Navbar />

        {/* Hero Section (100% Full Width) */}
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
