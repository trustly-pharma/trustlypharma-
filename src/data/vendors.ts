import { VendorPreview } from '../types';

export const VENDOR_PREVIEWS: VendorPreview[] = [
  {
    id: 'pharmagrade',
    name: 'PharmaGrade',
    url: 'https://trustlypharma.uk/vendors/pharmagrade/',
    region: 'UK & International',
    establishedFocus: 'Synthetic peptide reference standards & research chemicals',
    documentationAvailable: [
      'Batch-specific HPLC chromatograms',
      'Mass spectrometry (LC-MS) reports',
      'Certificate of Analysis (CoA) verification',
    ],
    ruoCompliance: true,
    notes: 'Indexed supplier providing third-party laboratory verification files for laboratory and academic research clients.',
  },
  {
    id: 'peptide-works',
    name: 'Peptide Works',
    url: 'https://trustlypharma.uk/vendors/peptide-works/',
    region: 'United Kingdom & Europe',
    establishedFocus: 'High-purity amino acid chains, custom synthesis & analytical grade reagents',
    documentationAvailable: [
      'Independent purity certificates',
      'HPLC analytical testing documentation',
      'Net peptide content determinations',
    ],
    ruoCompliance: true,
    notes: 'UK research entity supplying analytical grade research compounds strictly designated for in vitro experimental protocols.',
  },
  {
    id: 'pharmalab-global',
    name: 'PharmaLab Global',
    url: 'https://trustlypharma.uk/vendors/pharmalab-global/',
    region: 'International & Global Logistics',
    establishedFocus: 'Global research chemical distribution & multi-peptide analytical batches',
    documentationAvailable: [
      'Third-party laboratory test data',
      'Safety Data Sheets (SDS / CLP compliant)',
      'Batch traceability records',
    ],
    ruoCompliance: true,
    notes: 'International supplier cataloged for analytical transparency and compliance with research chemical documentation standards.',
  },
];
