/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ResearchMetrics } from './components/ResearchMetrics';
import { CompoundSearch } from './components/CompoundSearch';
import { MethodologySection } from './components/MethodologySection';
import { VendorDirectoryPreview } from './components/VendorDirectoryPreview';
import { RegulatorySection } from './components/RegulatorySection';
import { Footer } from './components/Footer';
import { CompoundDetailModal } from './components/CompoundDetailModal';
import { PeptideCompound } from './types';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [activeCompound, setActiveCompound] = useState<PeptideCompound | null>(null);

  const handleScrollToSearch = () => {
    const el = document.getElementById('compound-directory');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070d1e] text-slate-100 flex flex-col font-sans selection:bg-teal-500/30 selection:text-teal-200">
      
      {/* Top Navigation Bar adhering to Top Bar Contract */}
      <Header onSearchFocus={handleScrollToSearch} />

      {/* Main Homepage Flow */}
      <main className="flex-1">
        {/* 1. Hero Section with Molecular Visuals & Quick Search */}
        <Hero
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          onScrollToSearch={handleScrollToSearch}
        />

        {/* 2. Research Metrics Strip */}
        <ResearchMetrics />

        {/* 3. Interactive Compound Search & Analytical Directory */}
        <CompoundSearch
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onSelectCompound={(compound) => setActiveCompound(compound)}
        />

        {/* 4. Scientific Methodology & Pharmacopeial Highlights */}
        <MethodologySection />

        {/* 5. Vetted Vendor Directory Preview */}
        <VendorDirectoryPreview />

        {/* 6. Regulatory Updates & Legal Compliance */}
        <RegulatorySection />
      </main>

      {/* 7. Comprehensive Scientific Reference Footer */}
      <Footer />

      {/* Modal: Analytical Chemical Detail Sheet */}
      <CompoundDetailModal
        compound={activeCompound}
        onClose={() => setActiveCompound(null)}
      />

    </div>
  );
}
