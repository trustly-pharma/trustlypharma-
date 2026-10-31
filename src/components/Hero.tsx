import React from 'react';
import { Search, ShieldCheck, Microscope, Database, ArrowRight, Activity } from 'lucide-react';

interface HeroProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory?: string;
  onSelectCategory: (category: any) => void;
  onScrollToSearch: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  searchTerm,
  onSearchChange,
  onSelectCategory,
  onScrollToSearch,
}) => {
  const quickCategories = [
    { label: 'Metabolic & Incretin', key: 'Metabolic & Incretin' },
    { label: 'Tissue Regeneration', key: 'Tissue Regeneration' },
    { label: 'Cellular & Mitochondrial', key: 'Cellular & Mitochondrial' },
    { label: 'Neuro-Endocrine', key: 'Neuro-Endocrine' },
  ];

  return (
    <section className="relative overflow-hidden bg-[#070d1e] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-800">
      {/* Subtle scientific grid background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#14b8a6 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Subtle teal aura glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Scientific Authority & Search Controls */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Context kicker: clean unboxed metadata, zero pills */}
            <div className="flex items-center gap-2 text-xs font-mono text-teal-400">
              <span className="tracking-wider uppercase">United Kingdom & International</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span className="text-slate-300">Analytical Chemical Index</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span className="text-slate-400">ISO 17025 Reference Standard</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]" style={{ textWrap: 'balance' }}>
              Trustly Pharma Peptide Research Index & Analytical Chemical Directory
            </h1>

            {/* Concise, factual copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              An independent scientific reference cataloging synthetic peptides, analytical HPLC &amp; LC-MS purity standards, CAS registries, and verified UK &amp; international chemical suppliers.
            </p>

            {/* Interactive Search Bar */}
            <div className="pt-2 max-w-xl">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  onScrollToSearch();
                }}
                className="relative flex items-center"
              >
                <div className="absolute left-4 pointer-events-none text-slate-400">
                  <Search className="w-5 h-5 text-teal-400" />
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Search compound, CAS number (e.g. 910463-68-2), or sequence..."
                  className="w-full pl-12 pr-28 py-3.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 font-sans text-sm transition-all shadow-inner"
                />
                <button
                  type="submit"
                  className="absolute right-2 px-4 py-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Search</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>

              {/* Functional category filter buttons */}
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-400 font-mono">Quick filters:</span>
                {quickCategories.map((cat) => (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => {
                      onSelectCategory(cat.key);
                      onScrollToSearch();
                    }}
                    className="px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-teal-300 bg-slate-800/70 hover:bg-slate-800 border border-slate-700/70 rounded-md transition-colors cursor-pointer"
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Value Highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-800/80">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-teal-400 shrink-0">
                  <Microscope className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-200">HPLC / MS Verified</div>
                  <div className="text-[11px] text-slate-400 leading-tight">≥98% chromatographic purity standards</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-teal-400 shrink-0">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-200">CAS Registry Indexed</div>
                  <div className="text-[11px] text-slate-400 leading-tight">Accurate molecular weight &amp; sequences</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-teal-400 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-200">RUO Legal Compliance</div>
                  <div className="text-[11px] text-slate-400 leading-tight">Strict UK MHRA &amp; EMA framework</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Molecular Visualization & Precision Telemetry HUD */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/90 shadow-2xl">
              
              {/* Visual Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src="/images/hero_peptide_structure.jpg"
                  alt="Trustly Pharma 3D molecular peptide helix structure rendering"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/src/assets/images/hero_peptide_structure_1793428578573.jpg';
                  }}
                />
                
                {/* Visual Scrim for High-Contrast Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090f21] via-transparent to-black/30 pointer-events-none" />

                {/* Overlaid Scientific HUD Annotations */}
                <div className="absolute top-3 left-3 bg-[#090f21]/90 backdrop-blur-md border border-slate-700/80 rounded-lg px-2.5 py-1.5 text-[11px] font-mono text-slate-200 flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-teal-400" />
                  <span>CONFORMATION: α-HELIX</span>
                  <span className="text-teal-400">·</span>
                  <span className="text-slate-400">20Å RESOLUTION</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-[#090f21]/90 backdrop-blur-md border border-slate-700/80 rounded-lg px-2.5 py-1.5 text-[11px] font-mono text-teal-300">
                  SPECTRAL RESOLUTION: ESI-Q-TOF
                </div>
              </div>

              {/* Telemetry Strip below visual */}
              <div className="p-4 bg-slate-900/95 border-t border-slate-800/80 grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Purity Standard</div>
                  <div className="text-sm font-bold font-mono text-teal-400 tabular-nums">≥ 98.0% HPLC</div>
                </div>
                <div className="border-x border-slate-800">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Mass Accuracy</div>
                  <div className="text-sm font-bold font-mono text-slate-100 tabular-nums">≤ 5 ppm ESI</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Legal Purpose</div>
                  <div className="text-sm font-bold font-mono text-amber-300">RUO Laboratory</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Prominent Legal Framework Notice */}
        <div className="mt-10 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between flex-wrap gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-mono text-teal-400 font-semibold uppercase">Scientific Reference Notice:</span>
            <span>All chemical data, molecular structures, and compound indexes on Trustly Pharma are compiled for licensed research and academic laboratory reference only.</span>
          </div>
          <span className="font-mono text-slate-500 whitespace-nowrap">Strictly Non-Human · Non-Clinical</span>
        </div>

      </div>
    </section>
  );
};
