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
    feature: 'AI-First Logic',
    agencies: { text: 'Limited AI usage', status: 'warning' },
    freelancers: { text: 'Rarely AI-based', status: 'cross' },
    grabky: { text: 'Fully AI-embedded', status: 'check' },
  },
  {
    feature: 'Development Speed',
    agencies: { text: 'Structured but slow', status: 'warning' },
    freelancers: { text: 'Inconsistent timelines', status: 'cross' },
    grabky: { text: 'Rapid agile cycles', status: 'check' },
  },
  {
    feature: 'Scalable Tech Stack',
    agencies: { text: 'Legacy-heavy systems', status: 'warning' },
    freelancers: { text: 'Short-term builds', status: 'cross' },
    grabky: { text: 'Built for scale (Next.js/AWS)', status: 'check' },
  },
  {
    feature: 'Communication',
    agencies: { text: 'Account managers only', status: 'warning' },
    freelancers: { text: 'Solo execution', status: 'cross' },
    grabky: { text: 'Direct Founder access', status: 'check' },
  },
  {
    feature: 'System Delivery',
    agencies: { text: 'Deadline-driven releases', status: 'check' },
    freelancers: { text: 'Quality varies', status: 'warning' },
    grabky: { text: 'Production-ready & tested', status: 'check' },
  },
  {
    feature: 'Long-term Support',
    agencies: { text: 'Contract-based support', status: 'warning' },
    freelancers: { text: 'Limited availability', status: 'warning' },
    grabky: { text: 'Continuous optimization', status: 'check' },
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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-12 sm:mb-16 text-center">
          Where other stop, We Continue
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
                    <img src={grabkyLogoWhite} alt="Grabky" className="h-4 w-auto inline-block object-contain" />
                    <span>AT GRABKY</span>
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

                  {/* At Grabky */}
                  <td className="py-5 px-6 text-xs sm:text-sm font-medium text-white bg-white/[0.02]">
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

