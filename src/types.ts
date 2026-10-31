export interface PeptideCompound {
  id: string;
  name: string;
  casNumber: string;
  molecularFormula: string;
  molecularWeight: string; // e.g., "4113.58 g/mol"
  sequence?: string;
  classification: 'Metabolic & Incretin' | 'Tissue Regeneration' | 'Cellular & Mitochondrial' | 'Neuro-Endocrine' | 'Analytical Control';
  purityBenchmark: string; // e.g. "≥ 99.0%"
  analyticalMethod: string; // e.g. "RP-HPLC & ESI-MS"
  storageTemp: string; // e.g. "-20°C Lyophilized"
  solubility: string;
  appearance: string;
  theoreticalMass: string;
  observedMass: string;
  retentionTime: string; // e.g. "14.22 min"
  researchSummary: string;
}

export interface VendorPreview {
  id: string;
  name: string;
  url: string;
  region: string;
  establishedFocus: string;
  documentationAvailable: string[];
  ruoCompliance: boolean;
  notes: string;
}

export interface RegulatoryUpdate {
  id: string;
  authority: string;
  title: string;
  referenceCode: string;
  effectiveScope: string;
  summary: string;
  keyRequirement: string;
}
