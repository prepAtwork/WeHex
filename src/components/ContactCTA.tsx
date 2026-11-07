import React, { useState } from 'react';
import { ArrowUpRight, ShieldCheck, Cpu, Phone } from 'lucide-react';
import ctaBg from '../assets/cta-bg-clean.jpg';
import akshatImg from '../assets/akshat-tiwari.jpg';

export const ContactCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    serviceType: 'App Development',
    budget: '₹1,00,000 – ₹2,50,000',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden w-full">
      {/* Background with Sunlit Hill and Sky */}
      <div className="absolute inset-0 z-0">
        <img
          src={ctaBg}
          alt="Sunlit green hill and sky"
          className="w-full h-full object-cover object-bottom"
        />
        {/* Sky contrast gradient for text clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-sky-950/20" />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Contact Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-white/95 backdrop-blur-md rounded-[32px] p-6 sm:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-white/80">
              
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#00BE80] flex items-center justify-center mx-auto mb-4 text-black">
                    <ArrowUpRight className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-[1.3]">Request Received!</h3>
                  <p className="text-gray-500 text-sm leading-[1.6]">Our team will reach out to you within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-gray-800 mb-1.5 leading-normal">
                      Enter your full name
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-[#00BE80] focus:bg-white transition-colors placeholder:text-gray-400"
                    />
                  </div>

                  {/* Email & WhatsApp Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-1.5 leading-normal">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-[#00BE80] focus:bg-white transition-colors placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-1.5 leading-normal">
                        Whatsapp
                      </label>
                      <input
                        type="text"
                        placeholder="+91 9876543210"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-[#00BE80] focus:bg-white transition-colors placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Service Type & Project Budget Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-1.5 leading-normal">
                        Service type
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-[#00BE80] focus:bg-white transition-colors cursor-pointer"
                      >
                        <option value="App Development">App Development</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Product Design (UI/UX)">Product Design (UI/UX)</option>
                        <option value="Staffing">Staffing</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Maintenance & Consulting">Maintenance & Consulting</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-1.5 leading-normal">
                        Project budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-[#00BE80] focus:bg-white transition-colors cursor-pointer"
                      >
                        <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
                        <option value="₹1,00,000 – ₹2,50,000">₹1,00,000 – ₹2,50,000</option>
                        <option value="₹2,50,000 – ₹5,00,000">₹2,50,000 – ₹5,00,000</option>
                        <option value="₹5,00,000+">₹5,00,000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-bold text-gray-800 mb-1.5 leading-normal">
                      Project Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your project. For example: We need a mobile application for our business with user registration, payments, an admin dashboard and real-time notifications."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-[#00BE80] focus:bg-white transition-colors placeholder:text-gray-400 leading-[1.6]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full group flex items-center justify-between bg-[#00BE80] hover:bg-[#00a872] text-black font-bold pl-6 pr-2 py-2 rounded-full shadow-[0_4px_20px_rgba(0,190,128,0.35)] transition-all hover:scale-[1.01]"
                    >
                      <span className="text-[15px]">Schedule a Strategy Call</span>
                      <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-200">
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

          {/* Right Column: Copy & Direct Founder Access Card */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            
            {/* Headline & Subtitle */}
            <div className="mb-8">
              <h2 
                className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
                style={{ lineHeight: 1.3 }}
              >
                Let's Talk
              </h2>
              <p className="text-white text-base sm:text-lg font-medium leading-[1.6] drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]">
                We dive deep into your business goals and technical requirements.
              </p>
            </div>

            {/* Feature items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-sky-950/25 backdrop-blur-xs p-4 rounded-2xl border border-white/20 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-sky-200 flex items-center justify-center mb-2.5 text-sky-900 shadow-sm">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-white font-bold text-base mb-1 drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
                  Production-Ready
                </h4>
                <p className="text-white/95 text-xs sm:text-sm leading-[1.6] drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
                  We deliver stable, secure code ready for traffic.
                </p>
              </div>

              <div className="bg-sky-950/25 backdrop-blur-xs p-4 rounded-2xl border border-white/20 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-sky-200 flex items-center justify-center mb-2.5 text-sky-900 shadow-sm">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-white font-bold text-base mb-1 drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
                  Scalable Architecture
                </h4>
                <p className="text-white/95 text-xs sm:text-sm leading-[1.6] drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
                  Built on modern stacks (Next.js, AWS) to grow seamlessly.
                </p>
              </div>
            </div>

            {/* Floating Contact Card: Akshat Tiwari */}
            <div className="bg-white/95 backdrop-blur-md rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 shadow-2xl border border-white/80 flex items-center gap-5 sm:gap-6">
              {/* Profile Image (Akshat Tiwari) */}
              <div className="w-32 sm:w-36 md:w-40 h-44 sm:h-48 md:h-52 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-200/80 shadow-xs">
                <img
                  src={akshatImg}
                  alt="Akshat Tiwari - Sales & Operations"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Contact Details — exact vertical bounds matching the image */}
              <div className="flex-1 h-44 sm:h-48 md:h-52 flex flex-col justify-between text-left">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                    Akshat Tiwari
                  </h4>
                  <p className="text-[11px] sm:text-xs font-bold text-[#00BE80] uppercase tracking-wider mt-1 mb-2">
                    SALES &amp; OPERATIONS
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 leading-snug sm:leading-relaxed">
                    Direct line to discuss scope, timeline, and kickstart your project without bureaucratic delays.
                  </p>
                </div>

                {/* Single CTA Button: Contact Now pointing to tel:+919399456476 */}
                <div>
                  <a
                    href="tel:+919399456476"
                    className="inline-flex items-center gap-2 bg-[#00BE80] hover:bg-[#00a872] text-black text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 rounded-full transition-all shadow-sm hover:scale-105 active:scale-95"
                  >
                    <Phone className="w-3.5 h-3.5 fill-black stroke-none" />
                    <span>Contact Now (+91 93994 56476)</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
