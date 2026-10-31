import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, ExternalLink, Search } from 'lucide-react';

interface HeaderProps {
  onSearchFocus?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearchFocus }) => {
  const [vendorsOpen, setVendorsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setVendorsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#090f21]/95 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          
          {/* Zone 1: Single element brand wordmark with molecular mark */}
          <a
            href="https://trustlypharma.uk/"
            className="flex items-center gap-2.5 text-slate-100 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-sm"
          >
            {/* Scientific Molecular Hexagon Logo Mark */}
            <div className="w-9 h-9 rounded-lg bg-slate-900 border border-teal-500/30 flex items-center justify-center p-1.5 shadow-sm group-hover:border-teal-400/60 transition-colors">
              <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
                <circle cx="20" cy="8" r="3" fill="#14b8a6" />
                <circle cx="31" cy="14" r="2.5" fill="#38bdf8" />
                <circle cx="31" cy="26" r="2.5" fill="#14b8a6" />
                <circle cx="20" cy="32" r="3" fill="#38bdf8" />
                <circle cx="9" cy="26" r="2.5" fill="#14b8a6" />
                <circle cx="9" cy="14" r="2.5" fill="#38bdf8" />
                <path d="M20 8L31 14V26L20 32L9 26V14L20 8Z" stroke="#0f766e" strokeWidth="1.5" strokeDasharray="2 2" />
                <path d="M14 17L26 23M26 17L14 23" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" />
                <circle cx="20" cy="20" r="3" fill="#f8fafc" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white whitespace-nowrap">
                Trustly<span className="text-teal-400 ml-1">Pharma</span>
              </span>
            </div>
          </a>

          {/* Zone 2: Concise single-line navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a
              href="https://trustlypharma.uk/"
              className="text-slate-100 hover:text-teal-300 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Home
            </a>
            <a
              href="https://trustlypharma.uk/about/"
              className="hover:text-teal-300 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              About Us
            </a>

            {/* Vendors Dropdown */}
            <div className="relative shrink-0" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setVendorsOpen(!vendorsOpen)}
                className={`flex items-center gap-1.5 hover:text-teal-300 transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded ${
                  vendorsOpen ? 'text-teal-300' : ''
                }`}
                aria-expanded={vendorsOpen}
              >
                <span>Vendors</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${vendorsOpen ? 'rotate-180' : ''}`} />
              </button>

              {vendorsOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-[#0c142b] border border-slate-700/80 rounded-xl shadow-2xl py-2 z-50 text-xs">
                  <div className="px-3.5 py-1.5 border-b border-slate-800 text-[11px] font-mono uppercase tracking-wider text-teal-400/90">
                    Vetted Research Directories
                  </div>
                  <a
                    href="https://trustlypharma.uk/vendors/"
                    className="flex items-center justify-between px-3.5 py-2.5 text-slate-200 hover:bg-slate-800/80 hover:text-teal-300 transition-colors font-medium"
                    onClick={() => setVendorsOpen(false)}
                  >
                    <span>All Chemical Vendors</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                  <div className="h-px bg-slate-800 my-1"></div>
                  <a
                    href="https://trustlypharma.uk/vendors/pharmagrade/"
                    className="flex flex-col px-3.5 py-2 text-slate-300 hover:bg-slate-800/80 hover:text-teal-300 transition-colors"
                    onClick={() => setVendorsOpen(false)}
                  >
                    <span className="font-semibold text-slate-100 flex items-center justify-between">
                      PharmaGrade
                      <span className="text-[10px] text-teal-400 font-mono">UK & Intl</span>
                    </span>
                    <span className="text-[11px] text-slate-400">HPLC tested peptide catalog</span>
                  </a>
                  <a
                    href="https://trustlypharma.uk/vendors/peptide-works/"
                    className="flex flex-col px-3.5 py-2 text-slate-300 hover:bg-slate-800/80 hover:text-teal-300 transition-colors"
                    onClick={() => setVendorsOpen(false)}
                  >
                    <span className="font-semibold text-slate-100 flex items-center justify-between">
                      Peptide Works
                      <span className="text-[10px] text-teal-400 font-mono">UK Laboratory</span>
                    </span>
                    <span className="text-[11px] text-slate-400">High-purity amino chains</span>
                  </a>
                  <a
                    href="https://trustlypharma.uk/vendors/pharmalab-global/"
                    className="flex flex-col px-3.5 py-2 text-slate-300 hover:bg-slate-800/80 hover:text-teal-300 transition-colors"
                    onClick={() => setVendorsOpen(false)}
                  >
                    <span className="font-semibold text-slate-100 flex items-center justify-between">
                      PharmaLab Global
                      <span className="text-[10px] text-teal-400 font-mono">Global Logistics</span>
                    </span>
                    <span className="text-[11px] text-slate-400">International distribution network</span>
                  </a>
                </div>
              )}
            </div>

            <a
              href="https://trustlypharma.uk/regulatory/"
              className="hover:text-teal-300 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Regulatory
            </a>
            <a
              href="https://trustlypharma.uk/contact/"
              className="hover:text-teal-300 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Contact Us
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            {onSearchFocus && (
              <button
                type="button"
                onClick={onSearchFocus}
                aria-label="Search peptide research directory"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
              >
                <Search className="w-3.5 h-3.5 text-slate-950" />
                <span>Search Index</span>
              </button>
            )}

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-[#090f21] px-4 pt-3 pb-6 space-y-3">
          <div className="space-y-1">
            <a
              href="https://trustlypharma.uk/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-slate-800"
            >
              Home
            </a>
            <a
              href="https://trustlypharma.uk/about/"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800"
            >
              About Us
            </a>
            <div className="px-3 py-2">
              <span className="text-xs uppercase font-mono tracking-wider text-teal-400 block mb-1">
                Vendors Directory
              </span>
              <div className="pl-2 space-y-1.5 border-l border-slate-700">
                <a
                  href="https://trustlypharma.uk/vendors/"
                  className="block text-sm text-slate-200 hover:text-teal-300 py-1"
                >
                  All Vendors
                </a>
                <a
                  href="https://trustlypharma.uk/vendors/pharmagrade/"
                  className="block text-sm text-slate-300 hover:text-teal-300 py-1"
                >
                  PharmaGrade
                </a>
                <a
                  href="https://trustlypharma.uk/vendors/peptide-works/"
                  className="block text-sm text-slate-300 hover:text-teal-300 py-1"
                >
                  Peptide Works
                </a>
                <a
                  href="https://trustlypharma.uk/vendors/pharmalab-global/"
                  className="block text-sm text-slate-300 hover:text-teal-300 py-1"
                >
                  PharmaLab Global
                </a>
              </div>
            </div>
            <a
              href="https://trustlypharma.uk/regulatory/"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800"
            >
              Regulatory
            </a>
            <a
              href="https://trustlypharma.uk/contact/"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800"
            >
              Contact Us
            </a>
          </div>

          <div className="pt-2 border-t border-slate-800">
            <a
              href="https://trustlypharma.uk/vendors/"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-teal-500/10 border border-teal-500/40 text-teal-300 font-mono text-sm font-semibold"
            >
              <Search className="w-4 h-4 text-teal-400" />
              Explore Chemical Directory
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
