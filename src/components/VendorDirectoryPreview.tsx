import React from 'react';
import { ExternalLink, CheckCircle, FileCheck, ArrowUpRight, Shield } from 'lucide-react';
import { VENDOR_PREVIEWS } from '../data/vendors';

export const VendorDirectoryPreview: React.FC = () => {
  return (
    <section id="vendors-preview" className="py-16 bg-[#070d1e] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-teal-400 mb-2">
              Supplier Directory &amp; Laboratory Documentation
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Trustly Pharma Chemical Vendor Directory
            </h2>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              An objective index of UK and international chemical distributors providing publicly accessible analytical testing reports, batch Certificates of Analysis, and strict Research-Use-Only compliance.
            </p>
          </div>

          <a
            href="https://trustlypharma.uk/vendors/"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 border border-teal-500/40 text-teal-300 hover:text-teal-200 text-xs font-semibold rounded-lg transition-colors shrink-0"
          >
            <span>Explore Full Vendor Directory</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Grid: 3 Vendor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VENDOR_PREVIEWS.map((vendor) => (
            <div
              key={vendor.id}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header: Name and Region */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {vendor.name}
                    </h3>
                    <div className="text-xs font-mono text-teal-400 mt-0.5">
                      {vendor.region}
                    </div>
                  </div>
                  <span className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400">
                    <Shield className="w-4 h-4 text-teal-400" />
                  </span>
                </div>

                {/* Focus Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {vendor.establishedFocus}
                </p>

                {/* Verified Documentation Checklist */}
                <div className="space-y-2 py-3 border-y border-slate-800/80 mb-4">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    Analytical Documentation Tracked:
                  </div>
                  {vendor.documentationAvailable.map((doc, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>

                {/* Neutral note */}
                <p className="text-[11px] text-slate-400 leading-normal italic">
                  {vendor.notes}
                </p>
              </div>

              {/* Direct Link to Vendor Subpage */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <a
                  href={vendor.url}
                  className="flex items-center justify-between w-full py-2.5 px-3.5 rounded-lg bg-slate-950 hover:bg-slate-800/90 text-xs font-medium text-slate-200 hover:text-teal-300 border border-slate-800 transition-colors"
                >
                  <span>View {vendor.name} Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Laboratory Audit Standards Callout Banner with Lab Image */}
        <div className="mt-12 bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-4 aspect-[4/3] lg:aspect-auto h-full overflow-hidden">
            <img
              src="/images/analytical_lab_peptides.jpg"
              alt="Accredited laboratory peptide analysis vials and Certificates of Analysis"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/src/assets/images/analytical_lab_peptides_1793428581462.jpg';
              }}
            />
          </div>
          <div className="lg:col-span-8 p-6 lg:p-8 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-teal-400">
              Vendor Indexing Criteria &amp; Non-Endorsement Policy
            </div>
            <h3 className="text-lg font-bold text-white">
              Strict RUO Listing Protocols Without Commercial Bias
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Trustly Pharma does not endorse or sponsor commercial chemical suppliers. Vendors are listed in our directory solely on the basis of published third-party laboratory verification, provision of batch-traceable HPLC chromatograms and Mass Spectrometry documentation, and strict adherence to Research-Use-Only legal frameworks.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <span>· Tamper-evident packaging</span>
              <span>· Batch Certificate of Analysis</span>
              <span>· Non-human consumption declarations</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
