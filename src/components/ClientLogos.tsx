import React from 'react';
import clientLogosImg from '../assets/client-logos.png';

export const ClientLogos: React.FC = () => {
  return (
    <section className="bg-white py-6 sm:py-8 border-b border-gray-100 overflow-hidden w-full">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f8f9fa] rounded-2xl py-4 sm:py-5 px-6 border border-gray-100 flex items-center justify-center">
          <img
            src={clientLogosImg}
            alt="Client Logos: Synaptech AI, Datrix, DeepOrbit, DataStack"
            className="w-full max-w-5xl h-auto object-contain opacity-85 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </section>
  );
};
