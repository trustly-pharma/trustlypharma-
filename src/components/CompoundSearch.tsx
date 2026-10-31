import React, { useState } from 'react';
import { Search, Filter, SlidersHorizontal, ArrowUpRight, Eye, RefreshCw } from 'lucide-react';
import { PeptideCompound } from '../types';
import { PEPTIDE_COMPOUNDS } from '../data/peptides';

interface CompoundSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onSelectCompound: (compound: PeptideCompound) => void;
}

export const CompoundSearch: React.FC<CompoundSearchProps> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  onSelectCompound,
}) => {
  const [minPurityFilter, setMinPurityFilter] = useState<'all' | '98.5' | '99.0'>('all');

  const categories = [
    'All Categories',
    'Metabolic & Incretin',
    'Tissue Regeneration',
    'Cellular & Mitochondrial',
    'Neuro-Endocrine',
    'Analytical Control',
  ];

  const filteredCompounds = PEPTIDE_COMPOUNDS.filter((compound) => {
    // Category match
    const categoryMatch =
      selectedCategory === 'All Categories' || compound.classification === selectedCategory;

    // Search query match (name, CAS, formula, sequence)
    const term = searchTerm.toLowerCase().trim();
    const searchMatch =
      !term ||
      compound.name.toLowerCase().includes(term) ||
      compound.casNumber.toLowerCase().includes(term) ||
      compound.molecularFormula.toLowerCase().includes(term) ||
      (compound.sequence && compound.sequence.toLowerCase().includes(term));

    // Purity filter
    let purityMatch = true;
    if (minPurityFilter === '98.5') {
      const purityVal = parseFloat(compound.purityBenchmark.replace(/[^0-9.]/g, ''));
      purityMatch = purityVal >= 98.5;
    } else if (minPurityFilter === '99.0') {
      const purityVal = parseFloat(compound.purityBenchmark.replace(/[^0-9.]/g, ''));
      purityMatch = purityVal >= 99.0;
    }

    return categoryMatch && searchMatch && purityMatch;
  });

  return (
    <section id="compound-directory" className="py-16 bg-[#070d1e] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-teal-400 mb-1">
              Independent Analytical Chemical Registry
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Trustly Pharma Compound Research Index
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl">
              Query validated reference monographs, analytical HPLC retention profiles, mass spectrometry confirmations, and molecular identifiers for in vitro biochemical investigations.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400 bg-slate-900 px-3.5 py-2 rounded-lg border border-slate-800 shrink-0">
            SHOWING <span className="text-teal-400 font-semibold tabular-nums">{filteredCompounds.length}</span> OF <span className="tabular-nums">{PEPTIDE_COMPOUNDS.length}</span> INDEXED COMPOUNDS
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-8 relative">
              <Search className="w-4 h-4 text-teal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Filter by compound name, CAS registry, or formula (e.g. BPC-157, 910463-68-2)..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-700/80 rounded-lg text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Purity Benchmark Selector */}
            <div className="md:col-span-4 flex items-center justify-end gap-2">
              <span className="text-xs font-mono text-slate-400 whitespace-nowrap">Min Purity:</span>
              <div className="flex items-center p-1 bg-slate-950 rounded-lg border border-slate-800">
                <button
                  type="button"
                  onClick={() => setMinPurityFilter('all')}
                  className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                    minPurityFilter === 'all'
                      ? 'bg-slate-800 text-teal-300 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  All
                </button>
                <button
                  type="button"
                  onClick={() => setMinPurityFilter('98.5')}
                  className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                    minPurityFilter === '98.5'
                      ? 'bg-slate-800 text-teal-300 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  ≥98.5%
                </button>
                <button
                  type="button"
                  onClick={() => setMinPurityFilter('99.0')}
                  className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                    minPurityFilter === '99.0'
                      ? 'bg-slate-800 text-teal-300 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  ≥99.0%
                </button>
              </div>
            </div>

          </div>

          {/* Category Tabs: Functional Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-800/80">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => onSelectCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-teal-500/20 text-teal-300 border border-teal-500/50'
                      : 'text-slate-400 hover:text-slate-200 bg-slate-950/60 hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Compound Grid */}
        {filteredCompounds.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompounds.map((compound) => (
              <div
                key={compound.id}
                className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 hover:border-teal-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header: CAS and Classification */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                    <span className="text-teal-400">CAS: {compound.casNumber}</span>
                    <span className="text-slate-500">{compound.classification}</span>
                  </div>

                  {/* Compound Name */}
                  <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                    {compound.name}
                  </h3>

                  {/* Formula and MW */}
                  <div className="mt-3 py-2 px-3 bg-slate-950 rounded-lg border border-slate-800/80 font-mono text-xs space-y-1">
                    <div className="flex justify-between text-slate-400">
                      <span>Formula:</span>
                      <span className="text-slate-200 font-semibold truncate max-w-[170px]">
                        {compound.molecularFormula}
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Mol. Weight:</span>
                      <span className="text-slate-200 font-semibold">{compound.molecularWeight}</span>
                    </div>
                  </div>

                  {/* Analytical Methodology & Purity Metrics */}
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2 bg-slate-900 rounded border border-slate-800">
                      <div className="text-[10px] text-slate-500 uppercase">Purity Target</div>
                      <div className="text-teal-400 font-semibold mt-0.5">{compound.purityBenchmark}</div>
                    </div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800">
                      <div className="text-[10px] text-slate-500 uppercase">Primary Assay</div>
                      <div className="text-slate-300 font-semibold mt-0.5 truncate">{compound.analyticalMethod}</div>
                    </div>
                  </div>

                  {/* Brief research excerpt */}
                  <p className="mt-3 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {compound.researchSummary}
                  </p>
                </div>

                {/* Card Action Button */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">
                    {compound.storageTemp.split(' ')[0]}
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectCompound(compound)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-teal-500 hover:text-slate-950 text-slate-200 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Analytical Profile</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-12 text-center">
            <Search className="w-8 h-8 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-white">No indexed compounds found</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
              No chemical entries matched "{searchTerm}". Try searching by CAS number, standard peptide code, or resetting your filters.
            </p>
            <button
              type="button"
              onClick={() => {
                onSearchChange('');
                onSelectCategory('All Categories');
                setMinPurityFilter('all');
              }}
              className="mt-4 inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 rounded-lg transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5 text-teal-400" />
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
