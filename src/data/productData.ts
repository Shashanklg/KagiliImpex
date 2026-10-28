/**
 * Central Data File for Kagili Impex Private Limited (www.kagilitraders.com)
 * Scope: Agricultural exports from India to international commercial buyers.
 * Exactly 2 Product Categories:
 * 1. Ginger Products (Fresh & Processed) - HS 091011 / 091012
 * 2. Indian Spices & Long Shelf-Life Commodities - HS Chapter 09
 */

export interface ExportProductItem {
  id: string;
  name: string;
  kannadaName: string;
  hsCode: string;
  categoryTag: string;
  kannadaCategoryTag: string;
  description: string;
  kannadaDescription: string;
  origin: string;
  imageUrl: string;
  specs: {
    label: string;
    kannadaLabel: string;
    value: string;
    kannadaValue: string;
  }[];
  buttonText: string;
  kannadaButtonText: string;
}

export const GINGER_CORE_DATA = {
  company: 'KAGILI IMPEX PRIVATE LIMITED',
  website: 'www.kagilitraders.com',
  websiteUrl: 'https://www.kagilitraders.com',
  business: 'Export of agricultural commodities, ginger, and long shelf-life spices from India to international buyers',
  contactPerson: 'Karna',
  phone: '+91 7892204388',
  phoneTel: '+917892204388',
  address: 'Opp. MCF Staff Quarters, Antarikhsha Nagar (Haralahalli), Hassan – 573 202, Karnataka, India',
  gstin: '29AANCK2745E1ZB',
  whatsappUrl: 'https://wa.me/917892204388',
  logoUrl: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_2.28.08_PM_0e1987e4.jpeg',
  heroImageUrl: '/assets/harbour-export.jpg',
  wholeProductImageUrl: '/assets/ginger-farm-produce.jpg',
  crushedProductImageUrl: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_2.27.48_PM_476f5cb7.jpeg',
  spicesImageUrl: '/assets/cardamom.jpg',
};

export const EXPORT_PRODUCTS: ExportProductItem[] = [
  {
    id: 'ginger_products',
    name: 'Ginger Products (Fresh & Processed)',
    kannadaName: 'ಶುಂಠಿ ಉತ್ಪನ್ನಗಳು (ತಾಜಾ ಮತ್ತು ಸಂಸ್ಕರಿಸಿದ)',
    hsCode: '091011 / 091012',
    categoryTag: 'Core Agricultural Export',
    kannadaCategoryTag: 'ಪ್ರಮುಖ ಕೃಷಿ ರಫ್ತು ಉತ್ಪನ್ನ',
    description: 'Farm-fresh whole ginger rhizomes from Hassan, Karnataka and shelf-stable dehydrated ginger flakes, coarse granules, and fine ginger powder.',
    kannadaDescription: 'ಹಾಸನ ಮೂಲದ ಉತ್ತಮ ಗುಣಮಟ್ಟದ ತಾಜಾ ಇಡೀ ಶುಂಠಿ ಹಾಗೂ ರಫ್ತು ದರ್ಜೆಯ ಒಣ ಶುಂಠಿ ಫ್ಲೇಕ್ಸ್, ಗ್ರ್ಯಾನ್ಯೂಲ್ಸ್ ಮತ್ತು ನಯವಾದ ಶುಂಠಿ ಪುಡಿ.',
    origin: 'India (Hassan, Karnataka)',
    imageUrl: GINGER_CORE_DATA.wholeProductImageUrl,
    specs: [
      { label: 'Origin', kannadaLabel: 'ಮೂಲ', value: 'India (Hassan, Karnataka)', kannadaValue: 'ಭಾರತ (ಹಾಸನ, ಕರ್ನಾಟಕ)' },
      { label: 'HS Codes', kannadaLabel: 'HS ಕೋಡ್‌ಗಳು', value: '091011 (Fresh) / 091012 (Processed)', kannadaValue: '091011 / 091012' },
      { label: 'Available Forms', kannadaLabel: 'ಲಭ್ಯವಿರುವ ರೂಪಗಳು', value: 'Fresh Whole Rhizomes, Flakes, Granules & Powder', kannadaValue: 'ತಾಜಾ ಇಡೀ ಶುಂಠಿ, ಫ್ಲೇಕ್ಸ್, ಗ್ರ್ಯಾನ್ಯೂಲ್ಸ್ ಮತ್ತು ಪುಡಿ' },
      { label: 'Export Packaging', kannadaLabel: 'ರಫ್ತು ಪ್ಯಾಕಿಂಗ್', value: 'Ventilated cartons / moisture-resistant food grade bags', kannadaValue: 'ಗಾಳಿಯಾಡುವ ಕಾರ್ಟನ್‌ಗಳು / ಆಹಾರ ದರ್ಜೆಯ ಬ್ಯಾಗ್‌ಗಳು' },
    ],
    buttonText: 'Enquire About Ginger Products',
    kannadaButtonText: 'ಶುಂಠಿ ಉತ್ಪನ್ನಗಳ ಕುರಿತು ವಿಚಾರಿಸಿ',
  },
  {
    id: 'spices_commodities',
    name: 'Indian Spices & Long Shelf-Life Commodities',
    kannadaName: 'ಭಾರತೀಯ ಸಾಂಬಾರ ಪದಾರ್ಥಗಳು ಮತ್ತು ದೀರ್ಘಕಾಲಿಕ ಕೃಷಿ ಉತ್ಪನ್ನಗಳು',
    hsCode: '0908 / 0910',
    categoryTag: 'Durable Spices & Commodities',
    kannadaCategoryTag: 'ದೀರ್ಘಕಾಲಿಕ ಸಾಂಬಾರ ಹಾಗೂ ಕೃಷಿ ಸರಕುಗಳು',
    description: 'Selected premium Indian whole spices and durable agricultural commodities structured to retain optimum quality, aroma, and stability throughout long-distance ocean shipping.',
    kannadaDescription: 'ಸುದೀರ್ಘ ಸಾಗರ ಸಾರಿಗೆ ಮತ್ತು ರಫ್ತು ಸಂಗ್ರಹಣೆಯಲ್ಲಿ ತಾಜಾತನ ಮತ್ತು ಸುವಾಸನೆಯನ್ನು ಕಾಯ್ದುಕೊಳ್ಳುವ ಉತ್ತಮ ದರ್ಜೆಯ ಭಾರತೀಯ ಸಾಂಬಾರ ಪದಾರ್ಥಗಳು ಮತ್ತು ದೀರ್ಘಕಾಲಿಕ ಕೃಷಿ ಉತ್ಪನ್ನಗಳು.',
    origin: 'India',
    imageUrl: GINGER_CORE_DATA.spicesImageUrl,
    specs: [
      { label: 'Origin', kannadaLabel: 'ಮೂಲ', value: 'India (South India)', kannadaValue: 'ಭಾರತ (ದಕ್ಷಿಣ ಭಾರತ)' },
      { label: 'HS Category', kannadaLabel: 'HS ವಿಭಾಗ', value: 'Chapter 09 (Spices & Agricultural Commodities)', kannadaValue: 'ಅಧ್ಯಾಯ 09 (ಸಾಂಬಾರ ಹಾಗೂ ಕೃಷಿ ಉತ್ಪನ್ನಗಳು)' },
      { label: 'Transit Stability', kannadaLabel: 'ಸಾಗಣೆ ಬಾಳಿಕೆ', value: 'Long shelf-life produce suitable for ocean container freight', kannadaValue: 'ದೀರ್ಘಕಾಲದ ಕಂಟೇನರ್ ಸಾಗಾಟಕ್ಕೆ ಸೂಕ್ತವಾದ ಅಧಿಕ ಬಾಳಿಕೆ' },
      { label: 'Export Packaging', kannadaLabel: 'ರಫ್ತು ಪ್ಯಾಕಿಂಗ್', value: 'Multi-ply moisture-barrier bags & containerized pallet packs', kannadaValue: 'ತೇವಾಂಶ ನಿರೋಧಕ ಬಹುಪದರದ ರಫ್ತು ಪ್ಯಾಕಿಂಗ್' },
    ],
    buttonText: 'Enquire About Spices & Commodities',
    kannadaButtonText: 'ಸಾಂಬಾರ ಮತ್ತು ಕೃಷಿ ಉತ್ಪನ್ನಗಳ ಕುರಿತು ವಿಚಾರಿಸಿ',
  },
];
