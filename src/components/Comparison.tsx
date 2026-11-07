import React from 'react';
import { Check, X, AlertCircle } from 'lucide-react';
import grabkyLogoWhite from '../assets/grabky-logo-white@2x.png';

interface ComparisonRow {
  feature: string;
  agencies: { text: string; status: 'check' | 'cross' | 'warning' };
  freelancers: { text: string; status: 'check' | 'cross' | 'warning' };
  grabky: { text: string; status: 'check' | 'cross' | 'warning' };
}

const tableData: ComparisonRow[] = [
  {
    feature: 'Team Structure',
    agencies: { text: 'Large, layered teams', status: 'warning' },
    freelancers: { text: 'Individual expertise', status: 'warning' },
    grabky: { text: 'Dedicated multidisciplinary team', status: 'check' },
  },
  {
    feature: 'Design & Development',
    agencies: { text: 'Often separate teams', status: 'warning' },
    freelancers: { text: 'Limited resources', status: 'cross' },
    grabky: { text: 'Seamlessly connected', status: 'check' },
  },
  {
    feature: 'Flexibility',
    agencies: { text: 'Rigid processes', status: 'cross' },
    freelancers: { text: 'Flexible availability', status: 'warning' },
    grabky: { text: 'Adaptable to your needs', status: 'check' },
  },
  {
    feature: 'Communication',
    agencies: { text: 'Multiple points of contact', status: 'warning' },
    freelancers: { text: 'Direct but individual', status: 'warning' },
    grabky: { text: 'Direct team communication', status: 'check' },
  },
  {
    feature: 'Project Ownership',
    agencies: { text: 'Process-driven delivery', status: 'warning' },
    freelancers: { text: 'Individual responsibility', status: 'cross' },
    grabky: { text: 'End-to-end ownership', status: 'check' },
  },
  {
    feature: 'Scalability',
    agencies: { text: 'Often higher overhead', status: 'cross' },
    freelancers: { text: 'Limited capacity', status: 'cross' },
    grabky: { text: 'Built to grow with you', status: 'check' },
  },
  {
    feature: 'Ongoing Support',
    agencies: { text: 'Separate support contracts', status: 'warning' },
    freelancers: { text: 'Availability varies', status: 'cross' },
    grabky: { text: 'Long-term partnership', status: 'check' },
  },
];

export const Comparison: React.FC = () => {
  const renderStatusIcon = (status: 'check' | 'cross' | 'warning') => {
    switch (status) {
      case 'check':
        return <Check className="w-4 h-4 text-[#00BE80] stroke-[2.5]" />;
      case 'cross':
        return <X className="w-4 h-4 text-red-400 stroke-[2.5]" />;
      case 'warning':
        return <AlertCircle className="w-4 h-4 text-amber-400 stroke-[2]" />;
    }
  };

  return (
    <section className="bg-[#121316] py-20 sm:py-28 text-white border-b border-gray-800 w-full">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wide text-gray-500 mb-8 font-mono">
          <span>/Why Us</span>
          <span>(07)</span>
        </div>

        {/* Section Headline */}
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-12 sm:mb-16 text-center"
          style={{ lineHeight: 1.36 }}
        >
          Not just another agency. A partner in your growth.
        </h2>

        {/* Comparison Table Box */}
        <div className="overflow-x-auto rounded-[28px] border border-gray-800 bg-[#16171b] shadow-2xl">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-gray-800/80 bg-[#1a1b20]">
                <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider text-gray-400">
                  FEATURES
                </th>
                <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider text-gray-400">
                  TRADITIONAL AGENCIES
                </th>
                <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider text-gray-400">
                  FREELANCERS
                </th>
                <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider text-[#00BE80]">
                  <div className="flex items-center gap-2">
                    <img src={grabkyLogoWhite} alt="Grabky" className="h-5 w-auto inline-block object-contain" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60">
              {tableData.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-white/[0.02] transition-colors"
                >
                  {/* Feature Name */}
                  <td className="py-5 px-6 text-sm font-semibold text-white">
                    {row.feature}
                  </td>

                  {/* Traditional Agencies */}
                  <td className="py-5 px-6 text-xs sm:text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      {renderStatusIcon(row.agencies.status)}
                      <span>{row.agencies.text}</span>
                    </div>
                  </td>

                  {/* Freelancers */}
                  <td className="py-5 px-6 text-xs sm:text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      {renderStatusIcon(row.freelancers.status)}
                      <span>{row.freelancers.text}</span>
                    </div>
                  </td>

                  {/* Grabky Column (Highlighted) */}
                  <td className="py-5 px-6 text-xs sm:text-sm font-medium text-white bg-white/[0.03] border-l border-r border-[#00BE80]/20">
                    <div className="flex items-center gap-2">
                      {renderStatusIcon(row.grabky.status)}
                      <span className="font-semibold text-[#00BE80]">{row.grabky.text}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
