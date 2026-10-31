import React from 'react';
import { ShieldAlert, Scale, ArrowUpRight, FileCheck2, Info } from 'lucide-react';
import { REGULATORY_UPDATES } from '../data/regulatory';

export const RegulatorySection: React.FC = () => {
  return (
    <section id="regulatory-updates" className="py-16 bg-[#090f21] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-mono uppercase tracking-wider text-teal-400 mb-2">
              Legal Framework &amp; Compliance Standards
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Trustly Pharma Regulatory &amp; Statutory Guidelines
            </h2>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              Synthesized peptides, incretin analogues, and research reagents are governed by rigorous regulatory mandates in the United Kingdom and internationally. Trustly Pharma tracks authoritative rulings and standardizations.
            </p>
          </div>

          <a
            href="https://trustlypharma.uk/regulatory/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white rounded-lg transition-colors shrink-0"
          >
            <span>View Full Regulatory Repository</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-teal-400" />
          </a>
        </div>

        {/* Regulatory Updates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REGULATORY_UPDATES.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                  <span className="text-teal-400">{item.referenceCode}</span>
                  <span className="text-slate-500">{item.effectiveScope}</span>
                </div>

                <div className="text-xs font-medium text-slate-400 mb-1">
                  {item.authority}
                </div>

                <h3 className="text-base font-bold text-white tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.summary}
                </p>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-slate-400 space-y-1">
                <span className="font-mono text-teal-400 uppercase font-semibold block">
                  Statutory Rule:
                </span>
                <span>{item.keyRequirement}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Prominent Statutory Compliance Callout */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col sm:flex-row items-start gap-4">
          <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/30 shrink-0">
            <Scale className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white">
              UK Human Medicines Regulations 2012 Compliance
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Research peptides indexed on Trustly Pharma are categorized strictly as unlicenced chemical compounds for in vitro experimental laboratory use. Under UK and international statutory codes, these substances cannot be marketed, compounded, or sold with medical claims or instructions for human or veterinary administration.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
