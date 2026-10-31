import React, { useState } from 'react';
import { METHODOLOGY_HIGHLIGHTS } from '../data/regulatory';
import { Check, Microscope, Layers, Gauge, FileSpreadsheet } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 bg-[#090f21] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-teal-400 mb-2">
            Analytical Protocols &amp; Pharmacopeial Alignment
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight" style={{ textWrap: 'balance' }}>
            Trustly Pharma Scientific Methodology &amp; Quality Verification Framework
          </h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Every indexed chemical entry is evaluated against established analytical chemistry criteria aligned with the British Pharmacopoeia (BP) and European Pharmacopoeia (Ph. Eur.) guidelines for peptide identification and purity determination.
          </p>
        </div>

        {/* 2-Column Grid: Infographic Inspector + Laboratory Instrumentation Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Methodology Tabs & Inspector */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Method Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {METHODOLOGY_HIGHLIGHTS.map((method, idx) => (
                <button
                  key={method.code}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                    activeTab === idx
                      ? 'bg-slate-900 border-teal-500/60 shadow-md'
                      : 'bg-slate-900/40 border-slate-800 hover:bg-slate-900/80 text-slate-400'
                  }`}
                >
                  <div className={`text-[10px] font-mono uppercase tracking-wider ${activeTab === idx ? 'text-teal-400' : 'text-slate-500'}`}>
                    Method {idx + 1}
                  </div>
                  <div className={`text-xs font-bold mt-1 ${activeTab === idx ? 'text-white' : 'text-slate-300'}`}>
                    {method.code}
                  </div>
                </button>
              ))}
            </div>

            {/* Active Methodology Details Card */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-lg font-bold text-white">
                  {METHODOLOGY_HIGHLIGHTS[activeTab].title}
                </h3>
                <span className="text-xs font-mono text-teal-400 bg-teal-950/60 px-2.5 py-1 rounded border border-teal-800/40">
                  {METHODOLOGY_HIGHLIGHTS[activeTab].code}
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {METHODOLOGY_HIGHLIGHTS[activeTab].description}
              </p>

              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800/80">
                <div className="text-[10px] font-mono uppercase text-teal-400 tracking-wider mb-1">
                  Benchmarked Acceptance Standard:
                </div>
                <div className="text-xs font-semibold text-slate-200">
                  {METHODOLOGY_HIGHLIGHTS[activeTab].standard}
                </div>
              </div>
            </div>

            {/* 3 Step Scientific Verification Infographic */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3.5">
                <div className="text-xs font-mono text-teal-400 mb-1">01. Chromatographic</div>
                <div className="text-xs font-semibold text-slate-200">Purity Isolation</div>
                <div className="text-[11px] text-slate-400 mt-1">Quantifying secondary peaks &amp; deletion sequences via C18 HPLC.</div>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3.5">
                <div className="text-xs font-mono text-teal-400 mb-1">02. Spectrometric</div>
                <div className="text-xs font-semibold text-slate-200">Exact Mass Check</div>
                <div className="text-[11px] text-slate-400 mt-1">Ion envelope matching calculated peptide molecular formula.</div>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3.5">
                <div className="text-xs font-mono text-teal-400 mb-1">03. Gravimetric</div>
                <div className="text-xs font-semibold text-slate-200">Counterion Audit</div>
                <div className="text-[11px] text-slate-400 mt-1">Karl Fischer moisture titration and salt residue determination.</div>
              </div>
            </div>

          </div>

          {/* Right Column: High Precision Laboratory Instrumentation Visual */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative flex-1 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl flex flex-col justify-between">
              
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <img
                  src="/src/assets/images/methodology_hplc_chromatogram_1793428580088.jpg"
                  alt="High performance liquid chromatography HPLC mass spectrometry analytical instrumentation"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 bg-[#090f21]/90 backdrop-blur-md border border-slate-700/80 rounded px-2 py-1 text-[10px] font-mono text-teal-300">
                  INSTRUMENTATION: UHPLC / LC-MS
                </div>
              </div>

              <div className="p-5 bg-slate-900/95 space-y-2 border-t border-slate-800">
                <div className="text-xs font-semibold text-white">
                  British &amp; European Pharmacopoeial Method Validation
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Trustly Pharma’s chemical directory aggregates chromatograms from validated instrumentation systems including Agilent 1290 Infinity and Thermo Q-Exactive Orbitrap spectrometers to ensure verifiable peak symmetry and zero phantom reporting.
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-slate-800/80">
                  <span>DETECTION: 214nm &amp; 220nm</span>
                  <span>SOLVENT: H2O / ACN + 0.1% TFA</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
