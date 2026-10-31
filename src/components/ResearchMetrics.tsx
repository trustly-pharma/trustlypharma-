import React from 'react';
import { Database, FileCheck, CheckCircle2, Award } from 'lucide-react';

export const ResearchMetrics: React.FC = () => {
  const metrics = [
    {
      label: 'Indexed Research Peptides',
      value: '142',
      unit: 'COMPOUNDS',
      subtext: 'Cataloged with CAS & molecular formulas',
      icon: Database,
    },
    {
      label: 'Verified Analytical Batches',
      value: '380+',
      unit: 'HPLC / LC-MS',
      subtext: 'Independent laboratory test files reviewed',
      icon: FileCheck,
    },
    {
      label: 'Purity Standard Benchmark',
      value: '98.0%',
      unit: 'MINIMUM',
      subtext: 'Chromatographic area threshold for RUO index',
      icon: CheckCircle2,
    },
    {
      label: 'Testing Accreditation Standard',
      value: '17025',
      unit: 'ISO / IEC',
      subtext: 'Analytical laboratory competence benchmark',
      icon: Award,
    },
  ];

  return (
    <section className="bg-[#090f21] py-12 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    {item.label}
                  </span>
                  <Icon className="w-4 h-4 text-teal-400/80" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold font-mono text-white tabular-nums">
                    {item.value}
                  </span>
                  <span className="text-xs uppercase font-mono text-teal-400">
                    {item.unit}
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-400 leading-normal">
                  {item.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
