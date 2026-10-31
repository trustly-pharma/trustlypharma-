import { RegulatoryUpdate } from '../types';

export const REGULATORY_UPDATES: RegulatoryUpdate[] = [
  {
    id: 'mhra-ruo',
    authority: 'UK MHRA (Medicines and Healthcare products Regulatory Agency)',
    title: 'Research Use Only (RUO) Peptide Supply Guidelines',
    referenceCode: 'MHRA-HMR2012-SCH1',
    effectiveScope: 'United Kingdom',
    summary: 'Clarification regarding unlicenced chemical compounds: peptide research chemicals are strictly designated for in vitro scientific research, educational investigations, and laboratory chemical calibration.',
    keyRequirement: 'Suppliers and institutions must maintain clear RUO labelling and documented research chain of custody. Non-human consumption enforcement applies across all distribution channels.',
  },
  {
    id: 'ema-ph-eur',
    authority: 'European Directorate for the Quality of Medicines (EDQM / Ph. Eur.)',
    title: 'European Pharmacopoeia Monograph 2034: Substances for Pharmaceutical Use & Peptide Purity Standards',
    referenceCode: 'Ph. Eur. 11.0 / Monograph 2034',
    effectiveScope: 'UK, EU & International',
    summary: 'Guidelines for chromatographic purity determination in synthetic peptides, requiring specified limits on related substances, deletion sequences, and counterion residue (TFA / acetate salts).',
    keyRequirement: 'Analytical documentation must quantify net peptide content (Karl Fischer water titration + counterion determination) alongside HPLC area normalization.',
  },
  {
    id: 'echa-clp',
    authority: 'ECHA / UK REACH',
    title: 'Chemical Classification, Labelling and Packaging (CLP) Compliance for Laboratory Peptides',
    referenceCode: 'GB-CLP-REG-1272/2008',
    effectiveScope: 'UK & International Border Control',
    summary: 'Mandatory Safety Data Sheet (SDS) provision for research peptides, including accurate CAS registry references, GHS hazard pictograms where applicable, and chemical stability profiles.',
    keyRequirement: 'Customs and laboratory handling protocols require SDS availability alongside shipment documentation for all imported peptide research samples.',
  },
];

export const METHODOLOGY_HIGHLIGHTS = [
  {
    code: 'HPLC-UV',
    title: 'RP-HPLC (Reverse-Phase HPLC)',
    description: 'Separation of peptide chains based on hydrophobicity using C18 stationary phases and water/acetonitrile gradients with 0.1% trifluoroacetic acid (TFA). UV absorbance detection at 214 nm and 220 nm allows quantification of the main peak versus truncated deletion peptides and chemical impurities.',
    standard: 'Purity quantified by area percentage integration (≥ 98.0% minimum threshold).',
  },
  {
    code: 'LC-MS',
    title: 'Mass Spectrometry (ESI-Q-TOF)',
    description: 'Electrospray ionization high-resolution mass spectrometry calculates exact monoisotopic and multicharged ions ([M+H]+, [M+2H]2+). Verifies unambiguous molecular identity, matching theoretical peptide molecular weight within a strict ±5 ppm mass accuracy window.',
    standard: 'Monoisotopic mass confirmation with isotopic envelope fidelity.',
  },
  {
    code: 'AAA / KF',
    title: 'Net Peptide Content & Counterions',
    description: 'Synthetic peptides prepared by solid-phase peptide synthesis (SPPS) naturally retain trifluoroacetate or acetate salts and residual moisture. Karl Fischer titration and elemental/amino acid analysis distinguish gross lyophilized mass from net active peptide substance.',
    standard: 'Reports net peptide percentage (typically 75%–85% of gross vial weight).',
  },
  {
    code: 'ISO-17025',
    title: 'Independent Laboratory Accreditation',
    description: 'Trustly Pharma benchmarks analytical documentation produced under ISO/IEC 17025 accredited analytical laboratories. Verified testing criteria ensure instrument calibration, blind control standards, and uncompromised data integrity across all indexed chemical profiles.',
    standard: 'Third-party analytical verification without commercial manufacturer bias.',
  },
];
