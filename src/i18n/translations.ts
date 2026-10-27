export type Language = 'en' | 'kn';

export interface Translations {
  nav: {
    home: string;
    about: string;
    products: string;
    contact: string;
    quoteBtn: string;
    callDirect: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    exploreBtn: string;
    contactBtn: string;
    trust1: string;
    trust2: string;
    trust3: string;
    originTag: string;
    imageCaption: string;
  };
  about: {
    badge: string;
    title: string;
    description: string;
    p1: string;
    p2: string;
    locationTitle: string;
    locationDesc: string;
    growerTitle: string;
    growerDesc: string;
    commTitle: string;
    commDesc: string;
    credentialsBadge: string;
    enterpriseType: string;
    contactPersonLabel: string;
    phoneLabel: string;
    addressLabel: string;
    gstinLabel: string;
  };
  products: {
    badge: string;
    title: string;
    description: string;
    hsVerificationNote: string;
    enquireBtn: string;
    whole: {
      name: string;
      hsCode: string;
      tag: string;
      description: string;
      origin: string;
      form: string;
      packaging: string;
      pricing: string;
      btnText: string;
    };
    crushed: {
      name: string;
      hsCode: string;
      tag: string;
      description: string;
      origin: string;
      form: string;
      packaging: string;
      pricing: string;
      btnText: string;
    };
  };
  contact: {
    badge: string;
    title: string;
    description: string;
    cardTitle: string;
    contactPersonLabel: string;
    phoneLabel: string;
    addressLabel: string;
    gstinLabel: string;
    callBtn: string;
    whatsappBtn: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    nameError: string;
    contactLabel: string;
    contactPlaceholder: string;
    contactError: string;
    productLabel: string;
    productWhole: string;
    productCrushed: string;
    productBoth: string;
    quantityLabel: string;
    quantityPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    whatsappSubmitBtn: string;
    formNote: string;
    modalTitle: string;
    modalSubtitle: string;
    modalWhatsAppBtn: string;
    modalCopyBtn: string;
    modalCopied: string;
    modalCloseBtn: string;
  };
  footer: {
    description: string;
    navHeading: string;
    contactHeading: string;
    allRights: string;
    backToTop: string;
    location: string;
  };
  mobileBar: {
    call: string;
    whatsapp: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      products: 'Our Products',
      contact: 'Contact',
      quoteBtn: 'REQUEST A QUOTE',
      callDirect: 'Call Karna',
    },
    hero: {
      badge: 'INDIAN GINGER EXPORTER',
      titleLine1: 'INDIAN GINGER.',
      titleLine2: 'GLOBAL MARKETS.',
      description:
        'Connecting international spice and fresh produce buyers with authentic Indian ginger sourced directly from the agricultural heartland of Hassan, Karnataka. Direct communication, verified credentials, and transparent commercial terms.',
      exploreBtn: 'OUR PRODUCTS',
      contactBtn: 'CONTACT US',
      trust1: 'Exporting from Hassan, Karnataka',
      trust2: 'Whole & Crushed/Ground Products',
      trust3: 'Transparent Commercial Terms',
      originTag: 'Origin: India',
      imageCaption: 'Fresh Whole Indian Ginger Harvest Crates',
    },
    about: {
      badge: 'ABOUT US',
      title: 'Connecting Indian Ginger Growers With Global Buyers',
      description:
        'Kagili Impex Private Limited is an Indian agricultural export enterprise focused exclusively on exporting high-grade ginger to overseas markets.',
      p1: 'Based in Hassan, Karnataka — one of India’s most fertile ginger cultivation belts — Kagili Impex Private Limited bridges local growers with international produce importers, food distributors, and spice processors.',
      p2: 'We believe in clear, straightforward business relationships. Rather than making speculative claims or unconfirmed promises, every inquiry is answered directly with authentic availability, honest specifications, and realistic shipping timelines.',
      locationTitle: 'Hassan, Karnataka Location',
      locationDesc: 'Located at the heart of South India’s premier ginger producing region.',
      growerTitle: 'Direct Grower Networks',
      growerDesc: 'Sourcing genuine produce directly from farms and regional harvest centers.',
      commTitle: 'Transparent Communication',
      commDesc: 'Prompt commercial responses with verified quantities and delivery terms.',
      credentialsBadge: 'REGISTERED ENTERPRISE',
      enterpriseType: 'Agricultural Produce Import & Export',
      contactPersonLabel: 'Contact Person',
      phoneLabel: 'Direct Phone / WhatsApp',
      addressLabel: 'Registered Address',
      gstinLabel: 'Goods & Services Tax (GSTIN)',
    },
    products: {
      badge: 'OUR PRODUCTS',
      title: 'Export Ginger Products',
      description:
        'We supply Indian ginger in two essential trade forms: Whole Ginger rhizomes and Crushed/Ground ginger. Commercial specifications, packaging, and volume are discussed transparently per buyer requirement.',
      hsVerificationNote:
        'Customs Notice: Harmonized System (HS) codes (091011 & 091012) are provided as standard international trade references. Exact classification should be confirmed with Indian customs/DGFT or the buyer’s import clearing agent for specific shipments.',
      enquireBtn: 'ENQUIRE NOW',
      whole: {
        name: 'Ginger (Whole)',
        hsCode: '091011',
        tag: 'Raw Agricultural Produce',
        description: 'Whole ginger rhizomes for buyers seeking ginger in whole form.',
        origin: 'India (Hassan, Karnataka)',
        form: 'Fresh whole ginger rhizomes',
        packaging: 'Discussed based on buyer requirements (Cartons / crates / mesh bags)',
        pricing: 'Please enquire (Commercial spot quotation on request)',
        btnText: 'ENQUIRE NOW',
      },
      crushed: {
        name: 'Ginger (Crushed/Ground)',
        hsCode: '091012',
        tag: 'Processed Spice Form',
        description: 'Crushed or ground ginger for buyers seeking ginger in processed form.',
        origin: 'India',
        form: 'Crushed pieces or ground ginger powder',
        packaging: 'Discussed based on buyer requirements (Food-grade lined sacks)',
        pricing: 'Please enquire (Commercial spot quotation on request)',
        btnText: 'ENQUIRE NOW',
      },
    },
    contact: {
      badge: 'CONTACT US',
      title: 'Discuss Your Ginger Import Requirements',
      description:
        'Reach out directly to our commercial team in Hassan, Karnataka. We welcome trade inquiries from overseas importers, distributors, and food processors.',
      cardTitle: 'Official Enterprise Details',
      contactPersonLabel: 'Contact Person',
      phoneLabel: 'Direct Phone / WhatsApp',
      addressLabel: 'Registered Address',
      gstinLabel: 'GSTIN Number',
      callBtn: 'Call +91 7892204388',
      whatsappBtn: 'Message on WhatsApp',
      formTitle: 'Submit Trade Inquiry',
      formSubtitle: 'Fill in your requirements below for prompt direct communication.',
      nameLabel: 'Your Full Name / Company Name *',
      namePlaceholder: 'e.g. John Doe / Global Foods LLC',
      nameError: 'Please enter your name or enterprise name',
      contactLabel: 'Email Address or Phone Number *',
      contactPlaceholder: 'e.g. buyer@example.com or +1 234 567 8900',
      contactError: 'Please enter a valid email or phone number',
      productLabel: 'Product Interested In *',
      productWhole: 'Ginger (Whole) [HS 091011]',
      productCrushed: 'Ginger (Crushed/Ground) [HS 091012]',
      productBoth: 'Both Products (Whole & Crushed/Ground)',
      quantityLabel: 'Target Quantity / Volume (Optional)',
      quantityPlaceholder: 'e.g. 1 x 20ft / 40ft Container, 10 MT, or trial shipment',
      messageLabel: 'Specific Requirements or Port of Destination (Optional)',
      messagePlaceholder: 'Please mention your destination port, packaging preferences, or any specific questions...',
      submitBtn: 'Review & Send Inquiry',
      whatsappSubmitBtn: 'Send Inquiry via WhatsApp',
      formNote: 'All inquiries receive direct commercial attention from Karna at Kagili Impex Private Limited.',
      modalTitle: 'Inquiry Summary Ready',
      modalSubtitle: 'Choose how you would like to submit your inquiry directly to Kagili Impex:',
      modalWhatsAppBtn: 'Send Directly to WhatsApp (+91 7892204388)',
      modalCopyBtn: 'Copy Inquiry to Clipboard',
      modalCopied: 'Copied to Clipboard!',
      modalCloseBtn: 'Close',
    },
    footer: {
      description:
        'Kagili Impex Private Limited is a registered Indian export enterprise dedicated to supplying premium quality fresh whole ginger and crushed/ground ginger to global markets.',
      navHeading: 'QUICK NAVIGATION',
      contactHeading: 'CONTACT & LOCATION',
      allRights: 'All rights reserved.',
      backToTop: 'Back to Top',
      location: 'Hassan, Karnataka, India',
    },
    mobileBar: {
      call: 'Call Karna',
      whatsapp: 'WhatsApp',
    },
  },
  kn: {
    nav: {
      home: 'ಮುಖಪುಟ',
      about: 'ನಮ್ಮ ಬಗ್ಗೆ',
      products: 'ನಮ್ಮ ಉತ್ಪನ್ನಗಳು',
      contact: 'ಸಂಪರ್ಕಿಸಿ',
      quoteBtn: 'ದರಪಟ್ಟಿ ವಿಚಾರಿಸಿ',
      callDirect: 'ಕರ್ಣ ಅವರಿಗೆ ಕರೆ ಮಾಡಿ',
    },
    hero: {
      badge: 'ಭಾರತೀಯ ಶುಂಠಿ ರಫ್ತುದಾರರು',
      titleLine1: 'ಭಾರತೀಯ ಶುಂಠಿ.',
      titleLine2: 'ಜಾಗತಿಕ ಮಾರುಕಟ್ಟೆಗಳು.',
      description:
        'ಕರ್ನಾಟಕದ ಹಾಸನ ಜಿಲ್ಲೆಯ ಸಮೃದ್ಧ ಕೃಷಿ ಪ್ರದೇಶಗಳಿಂದ ಅಂತಾರಾಷ್ಟ್ರೀಯ ಮಾರುಕಟ್ಟೆಗಳಿಗೆ ಶುದ್ಧ ಭಾರತೀಯ ಶುಂಠಿ ರಫ್ತು. ನೇರ ವ್ಯಾಪಾರ ಸಂವಹನ, ಅಧಿಕೃತ ದಾಖಲೆಗಳು ಮತ್ತು ಪಾರದರ್ಶಕ ವ್ಯಾಪಾರ ನಿಯಮಗಳು.',
      exploreBtn: 'ನಮ್ಮ ಉತ್ಪನ್ನಗಳು',
      contactBtn: 'ಸಂಪರ್ಕಿಸಿ',
      trust1: 'ಹಾಸನ, ಕರ್ನಾಟಕದಿಂದ ನೇರ ರಫ್ತು',
      trust2: 'ಸಂಪೂರ್ಣ ಶುಂಠಿ ಮತ್ತು ಪುಡಿ/ಪುಡಿಮಾಡಿದ ಶುಂಠಿ',
      trust3: 'ಪಾರದರ್ಶಕ ವಾಣಿಜ್ಯ ನಿಯಮಗಳು',
      originTag: 'ಮೂಲ: ಭಾರತ',
      imageCaption: 'ತಾಜಾ ಭಾರತೀಯ ಶುಂಠಿ ಕೊಯ್ಲು ಕ್ರೇಟುಗಳು',
    },
    about: {
      badge: 'ನಮ್ಮ ಬಗ್ಗೆ',
      title: 'ಭಾರತೀಯ ಶುಂಠಿ ಬೆಳೆಗಾರರನ್ನು ಜಾಗತಿಕ ಮಾರುಕಟ್ಟೆಗೆ ಸಂಪರ್ಕಿಸುವುದು',
      description:
        'ಕಾಗಿಲಿ ಇಂಪೆಕ್ಸ್ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್ ಹಾಸನ, ಕರ್ನಾಟಕದಲ್ಲಿ ನೆಲೆಸಿರುವ ಅಧಿಕೃತ ಭಾರತೀಯ ಕೃಷಿ ರಫ್ತು ಸಂಸ್ಥೆಯಾಗಿದ್ದು, ಅಂತಾರಾಷ್ಟ್ರೀಯ ಮಾರುಕಟ್ಟೆಗಳಿಗೆ ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಶುಂಠಿ ರಫ್ತು ಮಾಡುವುದರಲ್ಲಿ ಪರಿಣತಿ ಹೊಂದಿದೆ.',
      p1: 'ದಕ್ಷಿಣ ಭಾರತದ ಪ್ರಮುಖ ಶುಂಠಿ ಕೃಷಿ ಕೇಂದ್ರವಾದ ಹಾಸನ ಜಿಲ್ಲೆಯಲ್ಲಿ ನೆಲೆಸಿರುವ ಕಾಗಿಲಿ ಇಂಪೆಕ್ಸ್ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್, ಸ್ಥಳೀಯ ಬೆಳೆಗಾರರನ್ನು ವಿದೇಶಿ ಆಹಾರ ವಿತರಕರು, ಸಗಟು ಆಮದುದಾರರು ಮತ್ತು ಸಾಂಬಾರ ಪದಾರ್ಥ ಸಂಸ್ಕರಣಾಕಾರರೊಂದಿಗೆ ಸಂಪರ್ಕಿಸುತ್ತದೆ.',
      p2: 'ನಾವು ಪ್ರಾಮಾಣಿಕ ಮತ್ತು ಪಾರದರ್ಶಕ ವ್ಯಾಪಾರ ಸಂಬಂಧಗಳಲ್ಲಿ ನಂಬಿಕೆ ಇಡುತ್ತೇವೆ. ಯಾವುದೇ ಊಹಾತ್ಮಕ ಭರವಸೆಗಳನ್ನು ನೀಡದೆ, ಲಭ್ಯವಿರುವ ಗುಣಮಟ್ಟ, ನಿಖರವಾದ ಪ್ರಮಾಣ ಮತ್ತು ಸಾಗಣೆ ನಿಯಮಗಳ ಬಗ್ಗೆ ನೇರ ಮಾಹಿತಿಯನ್ನು ಒದಗಿಸುತ್ತೇವೆ.',
      locationTitle: 'ಹಾಸನ, ಕರ್ನಾಟಕ ವಿಳಾಸ',
      locationDesc: 'ದಕ್ಷಿಣ ಭಾರತದ ಪ್ರಮುಖ ಶುಂಠಿ ಬೆಳೆಯುವ ಪ್ರದೇಶದ ಕೇಂದ್ರ ಸ್ಥಾನದಲ್ಲಿದೆ.',
      growerTitle: 'ನೇರ ಬೆಳೆಗಾರರ ಜಾಲ',
      growerDesc: 'ಸ್ಥಳೀಯ ರೈತರಿಂದ ಮತ್ತು ಸಂಗ್ರಹಣಾ ಕೇಂದ್ರಗಳಿಂದ ನೇರ ಸಂಗ್ರಹ.',
      commTitle: 'ಪಾರದರ್ಶಕ ವಾಣಿಜ್ಯ ಸಂವಹನ',
      commDesc: 'ಪ್ರತಿಯೊಂದು ವಿಚಾರಣೆಗೂ ನಿಖರವಾದ ಲಭ್ಯತೆ ಮತ್ತು ವಿತರಣಾ ನಿಯಮಗಳೊಂದಿಗೆ ತ್ವರಿತ ಉತ್ತರ.',
      credentialsBadge: 'ನೋಂದಾಯಿತ ಸಂಸ್ಥೆ',
      enterpriseType: 'ಕೃಷಿ ಉತ್ಪನ್ನಗಳ ಆಮದು ಮತ್ತು ರಫ್ತು',
      contactPersonLabel: 'ಸಂಪರ್ಕ ವ್ಯಕ್ತಿ',
      phoneLabel: 'ನೇರ ದೂರವಾಣಿ / WhatsApp',
      addressLabel: 'ನೋಂದಾಯಿತ ವಿಳಾಸ',
      gstinLabel: 'ಜಿಎಸ್‌ಟಿಐಎನ್ (GSTIN)',
    },
    products: {
      badge: 'ನಮ್ಮ ಉತ್ಪನ್ನಗಳು',
      title: 'ರಫ್ತು ಶುಂಠಿ ಉತ್ಪನ್ನಗಳು',
      description:
        'ನಾವು ಭಾರತೀಯ ಶುಂಠಿಯನ್ನು ಎರಡು ಪ್ರಮುಖ ರೂಪಗಳಲ್ಲಿ ಪೂರೈಸುತ್ತೇವೆ: ಇಡೀ ಶುಂಠಿ (Whole) ಮತ್ತು ಪುಡಿಮಾಡಿದ/ಪುಡಿ ಶುಂಠಿ (Crushed/Ground). ಖರೀದಿದಾರರ ಅಗತ್ಯಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಪ್ಯಾಕೇಜಿಂಗ್ ಮತ್ತು ಪ್ರಮಾಣವನ್ನು ಚರ್ಚಿಸಲಾಗುತ್ತದೆ.',
      hsVerificationNote:
        'ಗಮನಿಸಿ: ಎಚ್‌ಎಸ್ ಕೋಡ್‌ಗಳು (091011 ಮತ್ತು 091012) ಅಂತಾರಾಷ್ಟ್ರೀಯ ವ್ಯಾಪಾರ ವರ್ಗೀಕರಣದ ಉಲ್ಲೇಖಗಳಾಗಿದ್ದು, ನಿರ್ದಿಷ್ಟ ಸಾಗಣೆಗಳಿಗಾಗಿ ಭಾರತೀಯ ಕಸ್ಟಮ್ಸ್/ಡಿಜಿಎಫ್‌ಟಿ ಅಥವಾ ಆಮದು ಏಜೆಂಟರೊಂದಿಗೆ ದೃಢೀಕರಿಸಿಕೊಳ್ಳಬೇಕು.',
      enquireBtn: 'ಈಗಲೇ ವಿಚಾರಿಸಿ',
      whole: {
        name: 'ಶುಂಠಿ (ಇಡೀ / Ginger Whole)',
        hsCode: '091011',
        tag: 'ಕಚ್ಚಾ ಕೃಷಿ ಉತ್ಪನ್ನ',
        description: 'ಸಂಪೂರ್ಣ ರೂಪದಲ್ಲಿ ಶುಂಠಿಯನ್ನು ಬಯಸುವ ಖರೀದಿದಾರರಿಗಾಗಿ ತಾಜಾ ಇಡೀ ಶುಂಠಿ ಕೊಂಬುಗಳು.',
        origin: 'ಭಾರತ (ಕರ್ನಾಟಕ)',
        form: 'ತಾಜಾ ಇಡೀ ಶುಂಠಿ ಕೊಂಬುಗಳು',
        packaging: 'ಖರೀದಿದಾರರ ಅಗತ್ಯಕ್ಕೆ ತಕ್ಕಂತೆ (ಪೆಟ್ಟಿಗೆಗಳು / ಕ್ರೇಟುಗಳು / ಮೆಶ್ ಚೀಲಗಳು)',
        pricing: 'ದಯವಿಟ್ಟು ವಿಚಾರಿಸಿ (ಸ್ಪಾಟ್ ದರವನ್ನು ಕೋರಿಕೆಯ ಮೇರೆಗೆ ನೀಡಲಾಗುತ್ತದೆ)',
        btnText: 'ಈಗಲೇ ವಿಚಾರಿಸಿ',
      },
      crushed: {
        name: 'ಶುಂಠಿ (ಪುಡಿಮಾಡಿದ/ಪುಡಿ / Ginger Crushed/Ground)',
        hsCode: '091012',
        tag: 'ಸಂಸ್ಕರಿಸಿದ ಸಾಂಬಾರ ರೂಪ',
        description: 'ಸಂಸ್ಕರಿಸಿದ ರೂಪದಲ್ಲಿ ಶುಂಠಿಯನ್ನು ಬಯಸುವ ಖರೀದಿದಾರರಿಗಾಗಿ ಪುಡಿಮಾಡಿದ ಅಥವಾ ಪುಡಿ ಶುಂಠಿ.',
        origin: 'ಭಾರತ',
        form: 'ಪುಡಿಮಾಡಿದ ಚೂರುಗಳು ಅಥವಾ ಒಣ ಶುಂಠಿ ಪುಡಿ',
        packaging: 'ಖರೀದಿದಾರರ ಅಗತ್ಯಕ್ಕೆ ತಕ್ಕಂತೆ (ಫುಡ್ ಗ್ರೇಡ್ ಲೈನರ್ ಹೊಂದಿರುವ ಚೀಲಗಳು)',
        pricing: 'ದಯವಿಟ್ಟು ವಿಚಾರಿಸಿ (ಸ್ಪಾಟ್ ದರವನ್ನು ಕೋರಿಕೆಯ ಮೇರೆಗೆ ನೀಡಲಾಗುತ್ತದೆ)',
        btnText: 'ಈಗಲೇ ವಿಚಾರಿಸಿ',
      },
    },
    contact: {
      badge: 'ಸಂಪರ್ಕಿಸಿ',
      title: 'ನಿಮ್ಮ ಶುಂಠಿ ಆಮದು ಅಗತ್ಯಗಳಿಗಾಗಿ ಸಂಪರ್ಕಿಸಿ',
      description:
        'ಕರ್ನಾಟಕದ ಹಾಸನದಲ್ಲಿರುವ ನಮ್ಮ ತಂಡವನ್ನು ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಿ. ಅಂತಾರಾಷ್ಟ್ರೀಯ ಆಮದುದಾರರು ಮತ್ತು ವಿತರಕರ ವ್ಯಾಪಾರ ವಿಚಾರಣೆಗಳನ್ನು ಸ್ವಾಗತಿಸುತ್ತೇವೆ.',
      cardTitle: 'ಅಧಿಕೃತ ಸಂಸ್ಥೆಯ ವಿವರಗಳು',
      contactPersonLabel: 'ಸಂಪರ್ಕ ವ್ಯಕ್ತಿ',
      phoneLabel: 'ನೇರ ದೂರವಾಣಿ / WhatsApp',
      addressLabel: 'ನೋಂದಾಯಿತ ವಿಳಾಸ',
      gstinLabel: 'ಜಿಎಸ್‌ಟಿಐಎನ್ (GSTIN) ಸಂಖ್ಯೆ',
      callBtn: 'ಕರೆ ಮಾಡಿ: +91 7892204388',
      whatsappBtn: 'WhatsApp ಮೂಲಕ ಸಂದೇಶ ಕಳುಹಿಸಿ',
      formTitle: 'ವ್ಯಾಪಾರ ವಿಚಾರಣೆ ನಮೂನೆ',
      formSubtitle: 'ತ್ವರಿತ ವಾಣಿಜ್ಯ ಸಂವಹನಕ್ಕಾಗಿ ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಕೆಳಗೆ ಭರ್ತಿ ಮಾಡಿ.',
      nameLabel: 'ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು / ಕಂಪನಿ ಹೆಸರು *',
      namePlaceholder: 'ಉದಾ: ರಮೇಶ್ / Global Trading Co.',
      nameError: 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಹೆಸರು ಅಥವಾ ಸಂಸ್ಥೆಯ ಹೆಸರನ್ನು ನಮೂದಿಸಿ',
      contactLabel: 'ಇಮೇಲ್ ಅಥವಾ ದೂರವಾಣಿ ಸಂಖ್ಯೆ *',
      contactPlaceholder: 'ಉದಾ: buyer@example.com ಅಥವಾ +91 98765 43210',
      contactError: 'ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ ಇಮೇಲ್ ಅಥವಾ ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ',
      productLabel: 'ಆಸಕ್ತಿಯುಳ್ಳ ಉತ್ಪನ್ನ *',
      productWhole: 'ಶುಂಠಿ (ಇಡೀ / Whole) [HS 091011]',
      productCrushed: 'ಶುಂಠಿ (ಪುಡಿಮಾಡಿದ/ಪುಡಿ / Crushed/Ground) [HS 091012]',
      productBoth: 'ಎರಡೂ ಉತ್ಪನ್ನಗಳು (ಇಡೀ ಮತ್ತು ಪುಡಿ)',
      quantityLabel: 'ಅಗತ್ಯವಿರುವ ಪ್ರಮಾಣ (ಐಚ್ಛಿಕ)',
      quantityPlaceholder: 'ಉದಾ: 1 x 20ft / 40ft ಕಂಟೇನರ್, 10 ಮೆಟ್ರಿಕ್ ಟನ್, ಅಥವಾ ಟ್ರಯಲ್',
      messageLabel: 'ಹೆಚ್ಚುವರಿ ವಿವರಗಳು ಅಥವಾ ತಲುಪಬೇಕಾದ ಬಂದರು (ಐಚ್ಛಿಕ)',
      messagePlaceholder: 'ತಲುಪಬೇಕಾದ ಬಂದರು, ಪ್ಯಾಕೇಜಿಂಗ್ ಅಗತ್ಯಗಳು ಅಥವಾ ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳನ್ನು ಬರೆಯಿರಿ...',
      submitBtn: 'ವಿಚಾರಣೆಯನ್ನು ಪರಿಶೀಲಿಸಿ ಕಳುಹಿಸಿ',
      whatsappSubmitBtn: 'WhatsApp ಮೂಲಕ ವಿಚಾರಣೆ ಕಳುಹಿಸಿ',
      formNote: 'ಎಲ್ಲಾ ವಿಚಾರಣೆಗಳನ್ನು ಕಾಗಿಲಿ ಇಂಪೆಕ್ಸ್ ಸಂಸ್ಥೆಯ ಕರ್ಣ ಅವರು ನೇರವಾಗಿ ಗಮನಿಸುತ್ತಾರೆ.',
      modalTitle: 'ವಿಚಾರಣೆ ಸಿದ್ಧವಾಗಿದೆ',
      modalSubtitle: 'ಕಾಗಿಲಿ ಇಂಪೆಕ್ಸ್ ಸಂಸ್ಥೆಗೆ ನಿಮ್ಮ ವಿಚಾರಣೆಯನ್ನು ತಲುಪಿಸಲು ಆಯ್ಕೆ ಮಾಡಿ:',
      modalWhatsAppBtn: 'ನೇರವಾಗಿ WhatsApp ಗೆ ಕಳುಹಿಸಿ (+91 7892204388)',
      modalCopyBtn: 'ಕ್ಲಿಪ್‌ಬೋರ್ಡ್‌ಗೆ ನಕಲಿಸಿ',
      modalCopied: 'ನಕಲಿಸಲಾಗಿದೆ!',
      modalCloseBtn: 'ಮುಚ್ಚಿ',
    },
    footer: {
      description:
        'ಕಾಗಿಲಿ ಇಂಪೆಕ್ಸ್ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್ ನೋಂದಾಯಿತ ಭಾರತೀಯ ರಫ್ತು ಸಂಸ್ಥೆಯಾಗಿದ್ದು, ಅಂತಾರಾಷ್ಟ್ರೀಯ ಮಾರುಕಟ್ಟೆಗಳಿಗೆ ಉತ್ತಮ ಗುಣಮಟ್ಟದ ತಾಜಾ ಇಡೀ ಶುಂಠಿ ಮತ್ತು ಪುಡಿ ಶುಂಠಿಯನ್ನು ಪೂರೈಸಲು ಬದ್ಧವಾಗಿದೆ.',
      navHeading: 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು',
      contactHeading: 'ಸಂಪರ್ಕ ಮತ್ತು ವಿಳಾಸ',
      allRights: 'ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
      backToTop: 'ಮೇಲಕ್ಕೆ ಹೋಗಿ',
      location: 'ಹಾಸನ, ಕರ್ನಾಟಕ, ಭಾರತ',
    },
    mobileBar: {
      call: 'ಕರ್ಣ ಅವರಿಗೆ ಕರೆ',
      whatsapp: 'WhatsApp',
    },
  },
};
