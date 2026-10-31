import React from 'react';
import { ExternalLink, ShieldAlert, Award, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050914] border-t border-slate-800 text-slate-300">
      
      {/* Primary Footer Directory Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Contact Information */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-teal-500/30 flex items-center justify-center p-1">
                <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
                  <circle cx="20" cy="8" r="3" fill="#14b8a6" />
                  <circle cx="31" cy="14" r="2.5" fill="#38bdf8" />
                  <circle cx="31" cy="26" r="2.5" fill="#14b8a6" />
                  <circle cx="20" cy="32" r="3" fill="#38bdf8" />
                  <circle cx="9" cy="26" r="2.5" fill="#14b8a6" />
                  <circle cx="9" cy="14" r="2.5" fill="#38bdf8" />
                  <path d="M20 8L31 14V26L20 32L9 26V14L20 8Z" stroke="#0f766e" strokeWidth="1.5" />
                  <circle cx="20" cy="20" r="3" fill="#f8fafc" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Trustly<span className="text-teal-400 ml-0.5">Pharma</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Trustly Pharma is the UK &amp; international peptide research index and analytical chemical directory providing independent HPLC/LC-MS verification standards and regulatory reference data.
            </p>

            {/* Scientific Registry Info */}
            <div className="pt-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                Authoritative Chemical Index
              </div>
              <a
                href="https://trustlypharma.uk/"
                className="inline-flex items-center gap-2 text-slate-100 font-mono font-bold text-sm hover:text-teal-300 transition-colors"
              >
                <Globe className="w-4 h-4 text-teal-400" />
                <span>trustlypharma.uk</span>
              </a>
              <div className="text-[11px] text-slate-500 mt-0.5">
                UK &amp; International Analytical Reference Repository
              </div>
            </div>
          </div>

          {/* Quick Links: Core Pages */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-teal-400 font-semibold">
              Index Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://trustlypharma.uk/" className="hover:text-teal-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="https://trustlypharma.uk/about/" className="hover:text-teal-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="https://trustlypharma.uk/vendors/" className="hover:text-teal-300 transition-colors">
                  Vendor Directory
                </a>
              </li>
              <li>
                <a href="https://trustlypharma.uk/regulatory/" className="hover:text-teal-300 transition-colors">
                  Regulatory Repository
                </a>
              </li>
              <li>
                <a href="https://trustlypharma.uk/contact/" className="hover:text-teal-300 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Vendor Directory Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-teal-400 font-semibold">
              Indexed Vendors
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://trustlypharma.uk/vendors/pharmagrade/"
                  className="hover:text-teal-300 transition-colors flex items-center justify-between group"
                >
                  <span>PharmaGrade</span>
                  <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-teal-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://trustlypharma.uk/vendors/peptide-works/"
                  className="hover:text-teal-300 transition-colors flex items-center justify-between group"
                >
                  <span>Peptide Works</span>
                  <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-teal-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://trustlypharma.uk/vendors/pharmalab-global/"
                  className="hover:text-teal-300 transition-colors flex items-center justify-between group"
                >
                  <span>PharmaLab Global</span>
                  <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-teal-400" />
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="https://trustlypharma.uk/vendors/"
                  className="text-teal-400 hover:text-teal-300 font-mono text-[11px] transition-colors"
                >
                  → View All Chemical Suppliers
                </a>
              </li>
            </ul>
          </div>

          {/* Analytical Standards & Reference Framework */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-teal-400 font-semibold">
              Standards Benchmark
            </div>
            <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-slate-200 font-semibold">
                <Award className="w-4 h-4 text-teal-400 shrink-0" />
                <span>ISO/IEC 17025 Criteria</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Trustly Pharma compiles independent chromatographic and mass-spectrometric data benchmarked against British Pharmacopoeia analytical standards.
              </p>
            </div>
          </div>

        </div>

        {/* Scientific Legal Disclaimer (Mandatory) */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 sm:p-5 flex items-start gap-3.5">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs text-slate-400 leading-relaxed">
              <span className="font-semibold text-slate-200 block">
                Scientific Reference &amp; Non-Medical Disclaimer:
              </span>
              <p>
                Trustly Pharma is an independent analytical chemistry index and research chemical reference database. Content provided on <strong className="text-slate-300">trustlypharma.uk</strong> is strictly for educational, scientific, and laboratory research reference purposes. Trustly Pharma does not provide medical advice, diagnosis, or clinical recommendations. All referenced compounds are intended solely for in vitro laboratory research by qualified scientific personnel and are strictly not for human or animal consumption.
              </p>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Attribution */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-3">
            <div>
              © 2026 Trustly Pharma. All rights reserved. Registered UK chemical reference repository.
            </div>
            <div className="flex items-center gap-4">
              <span>Domain: trustlypharma.uk</span>
              <span>·</span>
              <span>RUO Analytical Standards</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
