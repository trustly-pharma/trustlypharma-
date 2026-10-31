import React from 'react';
import { X, CheckCircle, AlertTriangle, FileText, Download, ShieldCheck, Microscope, Binary } from 'lucide-react';
import { PeptideCompound } from '../types';

interface CompoundDetailModalProps {
  compound: PeptideCompound | null;
  onClose: () => void;
}

export const CompoundDetailModal: React.FC<CompoundDetailModalProps> = ({
  compound,
  onClose,
}) => {
  if (!compound) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#0b132b] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 bg-slate-900/90 border-b border-slate-800 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-teal-400 mb-1">
              <span>CAS: {compound.casNumber}</span>
              <span>·</span>
              <span>{compound.classification}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {compound.name}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close chemical detail sheet"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Chemical Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-900/70 p-4 rounded-xl border border-slate-800">
            <div>
              <div className="text-[10px] font-mono uppercase text-slate-400">Formula</div>
              <div className="text-xs font-mono font-semibold text-slate-100 mt-0.5 break-all">
                {compound.molecularFormula}
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase text-slate-400">Mol Weight</div>
              <div className="text-xs font-mono font-semibold text-slate-100 mt-0.5">
                {compound.molecularWeight}
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase text-slate-400">Purity Spec</div>
              <div className="text-xs font-mono font-semibold text-teal-400 mt-0.5">
                {compound.purityBenchmark}
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase text-slate-400">Appearance</div>
              <div className="text-xs font-mono font-semibold text-slate-100 mt-0.5 truncate">
                {compound.appearance}
              </div>
            </div>
          </div>

          {/* Sequence Breakdown */}
          {compound.sequence && (
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Binary className="w-3.5 h-3.5 text-teal-400" />
                  Primary Amino Acid Sequence
                </span>
                <span className="text-[11px] font-mono text-slate-500">IUPAC / 1-Letter/3-Letter</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-xs text-teal-200/90 break-words leading-relaxed select-all">
                {compound.sequence}
              </div>
            </div>
          )}

          {/* Analytical Chromatography & Mass Spectrometry Profile */}
          <div className="border border-slate-800 rounded-xl p-4 bg-slate-900/40 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-semibold text-white flex items-center gap-2">
                <Microscope className="w-4 h-4 text-teal-400" />
                Analytical Assay &amp; Chromatographic Parameters
              </span>
              <span className="text-[11px] font-mono text-teal-400">Validated ISO 17025 Criteria</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-2.5 bg-slate-950/80 rounded-lg border border-slate-800">
                <div className="text-[10px] text-slate-500 uppercase">Theoretical Mass</div>
                <div className="text-slate-200 font-semibold mt-0.5">{compound.theoreticalMass}</div>
              </div>
              <div className="p-2.5 bg-slate-950/80 rounded-lg border border-slate-800">
                <div className="text-[10px] text-slate-500 uppercase">Observed Mass (MS)</div>
                <div className="text-teal-400 font-semibold mt-0.5">{compound.observedMass}</div>
              </div>
              <div className="p-2.5 bg-slate-950/80 rounded-lg border border-slate-800">
                <div className="text-[10px] text-slate-500 uppercase">HPLC Retention</div>
                <div className="text-slate-200 font-semibold mt-0.5">{compound.retentionTime}</div>
              </div>
            </div>

            {/* Simulated Clean HPLC Peak Curve Graphic */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                <span>RP-HPLC UV Absorbance Spectrum (λ = 214 nm)</span>
                <span className="text-teal-400">Peak Purity: {compound.purityBenchmark}</span>
              </div>
              <div className="h-28 w-full relative">
                <svg viewBox="0 0 500 100" className="w-full h-full" preserveAspectRatio="none">
                  {/* Grid lines */}
                  <line x1="0" y1="20" x2="500" y2="20" stroke="#1e293b" strokeDasharray="2 2" />
                  <line x1="0" y1="50" x2="500" y2="50" stroke="#1e293b" strokeDasharray="2 2" />
                  <line x1="0" y1="80" x2="500" y2="80" stroke="#1e293b" strokeDasharray="2 2" />
                  
                  {/* Baseline and peak */}
                  <path
                    d="M 0 90 L 150 90 Q 200 90 230 85 L 245 10 Q 250 5 255 10 L 270 85 Q 300 90 500 90"
                    fill="none"
                    stroke="#14b8a6"
                    strokeWidth="2"
                  />
                  {/* Peak shading */}
                  <path
                    d="M 230 85 L 245 10 Q 250 5 255 10 L 270 85 Z"
                    fill="rgba(20, 184, 166, 0.15)"
                  />
                  {/* Minor baseline noise representation */}
                  <path
                    d="M 0 90 Q 30 89 60 90 Q 90 91 120 90"
                    fill="none"
                    stroke="#14b8a6"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                </svg>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-mono text-teal-300 bg-slate-900/90 px-2 py-0.5 rounded border border-teal-500/30">
                  Main Compound Peak ({compound.retentionTime.split(' ')[0]})
                </div>
              </div>
            </div>
          </div>

          {/* Quality Control & Certificate of Analysis (CoA) Checklist */}
          <div>
            <h3 className="text-xs font-semibold text-slate-300 uppercase font-mono tracking-wider mb-2.5 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-teal-400" />
              Certificate of Analysis (CoA) Verification Criteria
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 p-2 bg-slate-900/50 rounded-lg border border-slate-800">
                <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Chromatographic area percentage ≥ 98%</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-slate-900/50 rounded-lg border border-slate-800">
                <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>MS accurate mass ± 5 ppm theoretical</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-slate-900/50 rounded-lg border border-slate-800">
                <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Net peptide content quantified by AAA</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-slate-900/50 rounded-lg border border-slate-800">
                <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Trifluoroacetic acid (TFA) salt / acetate ratio</span>
              </div>
            </div>
          </div>

          {/* Research Summary */}
          <div className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-3.5 rounded-lg border border-slate-800">
            <span className="font-semibold text-slate-100 block mb-1">Index Summary &amp; Research Context:</span>
            {compound.researchSummary}
          </div>

          {/* Mandatory Non-Medical RUO Warning */}
          <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-start gap-3 text-xs text-amber-200">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-amber-300">Laboratory Research Notice: </span>
              This profile is maintained by Trustly Pharma for analytical reference only. This compound is strictly not approved for human or veterinary use, clinical diagnostics, or therapy.
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs">
          <div className="text-slate-400 font-mono">
            Storage: <span className="text-slate-200">{compound.storageTemp}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-lg transition-colors cursor-pointer"
          >
            Close Sheet
          </button>
        </div>

      </div>
    </div>
  );
};
