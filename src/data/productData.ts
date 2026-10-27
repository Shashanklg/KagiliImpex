/**
 * Central Data File for Kagili Impex Private Limited
 * Focus: Ginger as the sole export product from India to international buyers.
 * Exactly two products:
 * 1. Ginger (Whole) - HS Reference 091011
 * 2. Ginger (Crushed/Ground) - HS Reference 091012
 * 
 * Developer Note: Harmonized System (HS) codes (091011 for whole ginger, 091012 for crushed/ground ginger)
 * should always be verified with Indian customs / DGFT or the buyer's import agent for specific commercial shipments.
 */

export interface ExportProductItem {
  id: 'whole' | 'crushed';
  name: string;
  hsCode: string;
  categoryTag: string;
  description: string;
  origin: string;
  imageUrl: string;
  fallbackImageUrl: string;
  specs: {
    label: string;
    value: string;
    isUnconfirmed?: boolean;
    note?: string;
  }[];
  buttonText: string;
}

export const GINGER_CORE_DATA = {
  company: 'KAGILI IMPEX PRIVATE LIMITED',
  business: 'Export of ginger from India to international buyers',
  contactPerson: 'Karna',
  phone: '+91 7892204388',
  phoneTel: '+917892204388',
  address: 'Opp. MCF Staff Quarters, Antarikhsha Nagar (Haralahalli), Hassan – 573 202, Karnataka, India',
  gstin: '29AANCK2745E1ZB',
  whatsappUrl: 'https://wa.me/917892204388',
  logoUrl: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_2.28.08_PM_0e1987e4.jpeg',
  heroImageUrl: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_2.28.05_PM_a3512df0.jpeg',
  wholeProductImageUrl: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_10.58.43_PM_9db5f25a.jpeg',
  crushedProductImageUrl: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_2.27.48_PM_476f5cb7.jpeg',
};

export const EXPORT_PRODUCTS: ExportProductItem[] = [
  {
    id: 'whole',
    name: 'Ginger (Whole)',
    hsCode: '091011',
    categoryTag: 'Raw Agricultural Produce',
    description: 'Whole ginger rhizomes for buyers seeking ginger in whole form.',
    origin: 'India',
    imageUrl: GINGER_CORE_DATA.wholeProductImageUrl,
    fallbackImageUrl: GINGER_CORE_DATA.heroImageUrl,
    specs: [
      { label: 'Origin', value: 'India' },
      { label: 'HS Code Reference', value: '091011', note: 'Verify with customs / import agent' },
      { label: 'Product Form', value: 'Fresh whole rhizomes' },
      { label: 'Grade / Sizing', value: 'Please enquire', isUnconfirmed: true },
      { label: 'Moisture Content', value: 'To be confirmed', isUnconfirmed: true },
      { label: 'Packaging Options', value: 'Discussed based on buyer requirements', note: 'Ventilated cartons / crates / mesh bags' },
      { label: 'Minimum Order (MOQ)', value: 'Please enquire', isUnconfirmed: true },
      { label: 'Commercial Pricing', value: 'Please enquire', isUnconfirmed: true, note: 'Spot quotation on request' },
    ],
    buttonText: 'Enquire About Whole Ginger',
  },
  {
    id: 'crushed',
    name: 'Ginger (Crushed/Ground)',
    hsCode: '091012',
    categoryTag: 'Processed Spice Form',
    description: 'Crushed or ground ginger for buyers seeking ginger in processed form.',
    origin: 'India',
    imageUrl: GINGER_CORE_DATA.crushedProductImageUrl,
    fallbackImageUrl: GINGER_CORE_DATA.wholeProductImageUrl,
    specs: [
      { label: 'Origin', value: 'India' },
      { label: 'HS Code Reference', value: '091012', note: 'Verify with customs / import agent' },
      { label: 'Product Form', value: 'Crushed pieces or ground ginger' },
      { label: 'Granulation / Mesh', value: 'Please enquire', isUnconfirmed: true },
      { label: 'Moisture Content', value: 'To be confirmed', isUnconfirmed: true },
      { label: 'Packaging Options', value: 'Discussed based on buyer requirements', note: 'Multi-wall bags / food-grade liners' },
      { label: 'Minimum Order (MOQ)', value: 'Please enquire', isUnconfirmed: true },
      { label: 'Commercial Pricing', value: 'Please enquire', isUnconfirmed: true, note: 'Spot quotation on request' },
    ],
    buttonText: 'Enquire About Crushed/Ground Ginger',
  },
];
