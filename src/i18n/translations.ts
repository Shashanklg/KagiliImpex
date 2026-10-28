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
    whatsappBtn: string;
    exploreBtn: string;
  };
  about: {
    badge: string;
    title: string;
    description: string;
    p1: string;
    p2: string;
    credentialsBadge: string;
    enterpriseType: string;
    contactPersonLabel: string;
    phoneLabel: string;
    addressLabel: string;
    gstinLabel: string;
    websiteLabel: string;
  };
  products: {
    badge: string;
    title: string;
    description: string;
    hsVerificationNote: string;
    enquireBtn: string;
    originLabel: string;
    hsLabel: string;
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
    websiteLabel: string;
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
    productPlaceholder: string;
    productError: string;
    quantityLabel: string;
    quantityPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    whatsappSubmitBtn: string;
    formNote: string;
    modalTitle: string;
    modalSubtitle: string;
    modalBuyerLabel: string;
    modalContactLabel: string;
    modalProductLabel: string;
    modalQuantityLabel: string;
    modalMessageLabel: string;
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
      products: 'Products',
      contact: 'Contact',
      quoteBtn: 'Request Quote',
      callDirect: 'Call Directly',
    },
    hero: {
      badge: 'INDIAN AGRICULTURAL EXPORTERS',
      titleLine1: 'INDIAN AGRICULTURAL PRODUCE.',
      titleLine2: 'GLOBAL COMMERCE.',
      description:
        'Connecting international importers and commercial buyers with authentic Indian ginger, premium spices, and durable, long shelf-life agricultural commodities sourced directly from Hassan, Karnataka. Direct communication, verified credentials, and transparent commercial terms.',
      whatsappBtn: 'ENQUIRE ON WHATSAPP',
      exploreBtn: 'VIEW PRODUCTS',
    },
    about: {
      badge: 'ABOUT US',
      title: 'Connecting Indian Agricultural Produce With Global Importers',
      description:
        'Kagili Impex Private Limited (www.kagilitraders.com) is an Indian agricultural export enterprise coordinating farm-sourced produce and spices for international commercial buyers.',
      p1: 'Based in Hassan, Karnataka — at the heart of South India’s fertile agricultural and spice cultivation belt — Kagili Impex Private Limited bridges regional growers with overseas food importers, wholesale distributors, and commercial processors seeking fresh and processed ginger alongside long shelf-life spices and commodities.',
      p2: 'We operate with strict commercial transparency. We provide verifiable quality, accurate moisture-barrier packaging, realistic maritime transit timelines, and straightforward container pricing tailored to your import destination.',
      credentialsBadge: 'REGISTERED ENTERPRISE',
      enterpriseType: 'Indian Agricultural Exporter (Pvt. Ltd.)',
      contactPersonLabel: 'Contact Person',
      phoneLabel: 'Commercial Phone',
      addressLabel: 'Registered Address',
      gstinLabel: 'Government GSTIN',
      websiteLabel: 'Official Website',
    },
    products: {
      badge: 'EXPORT PORTFOLIO',
      title: 'Agricultural & Spice Export Categories',
      description:
        'Direct farm-sourced Indian ginger, selected spices, and long shelf-life agricultural commodities prepared for overseas containerized export.',
      hsVerificationNote:
        'Customs Notice: Harmonized System (HS) codes are provided for international trade reference. Please confirm destination country customs classifications and phytosanitary import regulations with your customs clearing agent prior to commercial dispatch.',
      enquireBtn: 'Enquire for Export',
      originLabel: 'Origin',
      hsLabel: 'HS Code Reference',
    },
    contact: {
      badge: 'GET IN TOUCH',
      title: 'Direct Commercial Inquiries',
      description:
        'Reach out to Karna at Kagili Impex Private Limited for product specifications, volume availability, and export pricing.',
      cardTitle: 'ENTERPRISE CREDENTIALS',
      contactPersonLabel: 'Managing Representative',
      phoneLabel: 'Direct Phone / WhatsApp',
      addressLabel: 'Registered Office',
      gstinLabel: 'Tax Registration (GSTIN)',
      websiteLabel: 'Official Portal',
      callBtn: 'Call +91 7892204388',
      whatsappBtn: 'Chat on WhatsApp',
      formTitle: 'Commercial Inquiry Form',
      formSubtitle: 'Fill in your details below for a prompt export quote and availability report.',
      nameLabel: 'Your Name / Company Name *',
      namePlaceholder: 'Enter your name or company name',
      nameError: 'Please enter your name or enterprise name',
      contactLabel: 'Email Address or Phone Number *',
      contactPlaceholder: 'Enter your email address or phone number',
      contactError: 'Please enter a valid email or phone number',
      productLabel: 'Product Category or Commodity *',
      productPlaceholder: 'Enter product category or commodity name',
      productError: 'Please enter the product or commodity you wish to enquire about',
      quantityLabel: 'Required Quantity / Target Volume (Optional)',
      quantityPlaceholder: 'Enter target quantity / required volume',
      messageLabel: 'Destination Port or Specific Requirements (Optional)',
      messagePlaceholder: 'Enter your message or specific requirements',
      submitBtn: 'Review & Send Inquiry',
      whatsappSubmitBtn: 'Send via WhatsApp',
      formNote: 'All commercial inquiries receive prompt attention from Karna at Kagili Impex Private Limited.',
      modalTitle: 'Inquiry Summary',
      modalSubtitle: 'Review your details before transmitting to Kagili Impex via WhatsApp:',
      modalBuyerLabel: 'Buyer / Company',
      modalContactLabel: 'Contact Info',
      modalProductLabel: 'Product / Commodity',
      modalQuantityLabel: 'Target Volume',
      modalMessageLabel: 'Notes / Destination',
      modalWhatsAppBtn: 'Send Directly to WhatsApp',
      modalCopyBtn: 'Copy Inquiry to Clipboard',
      modalCopied: 'Copied to Clipboard!',
      modalCloseBtn: 'Close',
    },
    footer: {
      description:
        'Kagili Impex Private Limited is an Indian agricultural export company supplying premium ginger, spices, and authentic long shelf-life farm produce to international buyers.',
      navHeading: 'Quick Navigation',
      contactHeading: 'Direct Contact',
      allRights: 'All rights reserved.',
      backToTop: 'Back to Top',
      location: 'Hassan, Karnataka, India',
    },
    mobileBar: {
      call: 'Call Directly',
      whatsapp: 'WhatsApp',
    },
  },
  kn: {
    nav: {
      home: 'ಮುಖಪುಟ',
      about: 'ನಮ್ಮ ಬಗ್ಗೆ',
      products: 'ಉತ್ಪನ್ನಗಳು',
      contact: 'ಸಂಪರ್ಕಿಸಿ',
      quoteBtn: 'ದರಪಟ್ಟಿ ವಿನಂತಿ',
      callDirect: 'ನೇರ ಕರೆ',
    },
    hero: {
      badge: 'ಭಾರತೀಯ ಕೃಷಿ ರಫ್ತುದಾರರು',
      titleLine1: 'ಭಾರತೀಯ ಕೃಷಿ ಉತ್ಪನ್ನಗಳು.',
      titleLine2: 'ಜಾಗತಿಕ ಮಾರುಕಟ್ಟೆಗಳು.',
      description:
        'ಕರ್ನಾಟಕದ ಹಾಸನ ಜಿಲ್ಲೆಯ ಸಮೃದ್ಧ ಕೃಷಿ ಪ್ರದೇಶಗಳಿಂದ ಅಂತಾರಾಷ್ಟ್ರೀಯ ಮಾರುಕಟ್ಟೆಗಳಿಗೆ ಶುದ್ಧ ಭಾರತೀಯ ಶುಂಠಿ, ಆಯ್ದ ಸಾಂಬಾರ ಪದಾರ್ಥಗಳು ಮತ್ತು ದೀರ್ಘಕಾಲ ಬಾಳಿಕೆ ಬರುವ ಕೃಷಿ ಉತ್ಪನ್ನಗಳ ರಫ್ತು. ನೇರ ವ್ಯಾಪಾರ ಸಂವಹನ, ಅಧಿಕೃತ ದಾಖಲೆಗಳು ಮತ್ತು ಪಾರದರ್ಶಕ ವ್ಯಾಪಾರ ನಿಯಮಗಳು.',
      whatsappBtn: 'WhatsApp ನಲ್ಲಿ ವಿಚಾರಿಸಿ',
      exploreBtn: 'ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ',
    },
    about: {
      badge: 'ನಮ್ಮ ಬಗ್ಗೆ',
      title: 'ಭಾರತೀಯ ಕೃಷಿ ಬೆಳೆಗಾರರನ್ನು ಜಾಗತಿಕ ಮಾರುಕಟ್ಟೆಗೆ ಸಂಪರ್ಕಿಸುವುದು',
      description:
        'ಕಾಗಿಲಿ ಇಂಪೆಕ್ಸ್ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್ (www.kagilitraders.com) ಹಾಸನ, ಕರ್ನಾಟಕದಲ್ಲಿ ನೆಲೆಸಿರುವ ಅಧಿಕೃತ ಭಾರತೀಯ ಕೃಷಿ ರಫ್ತು ಸಂಸ್ಥೆಯಾಗಿದ್ದು, ಅಂತಾರಾಷ್ಟ್ರೀಯ ಮಾರುಕಟ್ಟೆಗಳಿಗೆ ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಶುಂಠಿ ಹಾಗೂ ದೀರ್ಘಕಾಲಿಕ ಕೃಷಿ ಉತ್ಪನ್ನಗಳನ್ನು ಪೂರೈಸುತ್ತದೆ.',
      p1: 'ದಕ್ಷಿಣ ಭಾರತದ ಪ್ರಮುಖ ಶುಂಠಿ ಮತ್ತು ಕೃಷಿ ಬೆಳೆಗಳ ಕೇಂದ್ರವಾದ ಹಾಸನ ಜಿಲ್ಲೆಯಲ್ಲಿ ನೆಲೆಸಿರುವ ಕಾಗಿಲಿ ಇಂಪೆಕ್ಸ್ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್, ಸ್ಥಳೀಯ ಬೆಳೆಗಾರರನ್ನು ವಿದೇಶಿ ಆಹಾರ ವಿತರಕರು, ಸಗಟು ಆಮದುದಾರರು ಮತ್ತು ಸಂಸ್ಕರಣಾಕಾರರೊಂದಿಗೆ ಸಂಪರ್ಕಿಸುತ್ತದೆ.',
      p2: 'ನಾವು ಪ್ರಾಮಾಣಿಕ ಮತ್ತು ಪಾರದರ್ಶಕ ವ್ಯಾಪಾರ ಸಂಬಂಧಗಳಲ್ಲಿ ನಂಬಿಕೆ ಇಡುತ್ತೇವೆ. ಯಾವುದೇ ಊಹಾತ್ಮಕ ಭರವಸೆಗಳನ್ನು ನೀಡದೆ, ಲಭ್ಯವಿರುವ ಗುಣಮಟ್ಟ, ನಿಖರವಾದ ಪ್ರಮಾಣ ಮತ್ತು ಸಾಗಣೆ ನಿಯಮಗಳ ಬಗ್ಗೆ ನೇರ ಮಾಹಿತಿಯನ್ನು ಒದಗಿಸುತ್ತೇವೆ.',
      credentialsBadge: 'ನೋಂದಾಯಿತ ಸಂಸ್ಥೆ',
      enterpriseType: 'ಭಾರತೀಯ ಕೃಷಿ ರಫ್ತುದಾರರು (ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್)',
      contactPersonLabel: 'ಸಂಪರ್ಕ ವ್ಯಕ್ತಿ',
      phoneLabel: 'ದೂರವಾಣಿ ಸಂಖ್ಯೆ',
      addressLabel: 'ನೋಂದಾಯಿತ ವಿಳಾಸ',
      gstinLabel: 'ಸರ್ಕಾರಿ ಜಿಎಸ್‌ಟಿ ಸಂಖ್ಯೆ (GSTIN)',
      websiteLabel: 'ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್',
    },
    products: {
      badge: 'ರಫ್ತು ಉತ್ಪನ್ನಗಳು',
      title: 'ಕೃಷಿ ಮತ್ತು ಸಾಂಬಾರ ರಫ್ತು ವಿಭಾಗಗಳು',
      description:
        'ಅಂತರರಾಷ್ಟ್ರೀಯ ಕಂಟೇನರ್ ರಫ್ತಿಗಾಗಿ ನೇರವಾಗಿ ಕೃಷಿ ಭೂಮಿಯಿಂದ ಸಿದ್ಧಪಡಿಸಲಾದ ಭಾರತೀಯ ಶುಂಠಿ, ಮಸಾಲೆಗಳು ಮತ್ತು ದೀರ್ಘಕಾಲ ಬಾಳಿಕೆ ಬರುವ ಕೃಷಿ ಉತ್ಪನ್ನಗಳು.',
      hsVerificationNote:
        'ಕಸ್ಟಮ್ಸ್ ಸೂಚನೆ: ವ್ಯಾಪಾರ ಉಲ್ಲೇಖಕ್ಕಾಗಿ HS ಕೋಡ್‌ಗಳನ್ನು ನೀಡಲಾಗಿದೆ. ಸಾಗಣೆಗೆ ಮುನ್ನ ನಿಮ್ಮ ದೇಶದ ಕಸ್ಟಮ್ಸ್ ನಿಯಮಾವಳಿಗಳು ಮತ್ತು ಫೈಟೊಸ್ಯಾನಿಟರಿ ಷರತ್ತುಗಳನ್ನು ದೃಢೀಕರಿಸಿಕೊಳ್ಳಿ.',
      enquireBtn: 'ರಫ್ತಿಗೆ ವಿಚಾರಿಸಿ',
      originLabel: 'ಮೂಲ',
      hsLabel: 'HS ಕೋಡ್ ಉಲ್ಲೇಖ',
    },
    contact: {
      badge: 'ಸಂಪರ್ಕಿಸಿ',
      title: 'ನೇರ ವಾಣಿಜ್ಯ ವಿಚಾರಣೆಗಳು',
      description:
        'ಉತ್ಪನ್ನಗಳ ವಿವರ, ಲಭ್ಯತೆ ಮತ್ತು ರಫ್ತು ದರಗಳಿಗಾಗಿ ಕಾಗಿಲಿ ಇಂಪೆಕ್ಸ್ ಸಂಸ್ಥೆಯ ಕರ್ಣ ಅವರನ್ನು ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಿ.',
      cardTitle: 'ಸಂಸ್ಥೆಯ ಅಧಿಕೃತ ವಿವರಗಳು',
      contactPersonLabel: 'ಮುಖ್ಯ ಪ್ರತಿನಿಧಿ',
      phoneLabel: 'ದೂರವಾಣಿ / WhatsApp',
      addressLabel: 'ಕಚೇರಿ ವಿಳಾಸ',
      gstinLabel: 'ಜಿಎಸ್‌ಟಿ ಸಂಖ್ಯೆ (GSTIN)',
      websiteLabel: 'ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್',
      callBtn: 'ಕರೆ ಮಾಡಿ: +91 7892204388',
      whatsappBtn: 'WhatsApp ನಲ್ಲಿ ಸಂದೇಶ ಕಳುಹಿಸಿ',
      formTitle: 'ವ್ಯಾಪಾರ ವಿಚಾರಣೆ ನಮೂನೆ',
      formSubtitle: 'ತ್ವರಿತ ವಾಣಿಜ್ಯ ದರಪಟ್ಟಿ ಮತ್ತು ಲಭ್ಯತೆಯ ಮಾಹಿತಿಗಾಗಿ ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಕೆಳಗೆ ಭರ್ತಿ ಮಾಡಿ.',
      nameLabel: 'ನಿಮ್ಮ ಹೆಸರು / ಕಂಪನಿ ಹೆಸರು *',
      namePlaceholder: 'ನಿಮ್ಮ ಹೆಸರು ಅಥವಾ ಕಂಪನಿ ಹೆಸರನ್ನು ನಮೂದಿಸಿ',
      nameError: 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಹೆಸರು ಅಥವಾ ಸಂಸ್ಥೆಯ ಹೆಸರನ್ನು ನಮೂದಿಸಿ',
      contactLabel: 'ಇಮೇಲ್ ಅಥವಾ ದೂರವಾಣಿ ಸಂಖ್ಯೆ *',
      contactPlaceholder: 'ನಿಮ್ಮ ಇಮೇಲ್ ಅಥವಾ ದೂರವಾಣಿ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ',
      contactError: 'ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ ಇಮೇಲ್ ಅಥವಾ ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ',
      productLabel: 'ಆಸಕ್ತಿಯುಳ್ಳ ಉತ್ಪನ್ನ ವಿಭಾಗ ಅಥವಾ ಸರಕು *',
      productPlaceholder: 'ಉತ್ಪನ್ನ ವಿಭಾಗ ಅಥವಾ ಸರಕಿನ ಹೆಸರನ್ನು ನಮೂದಿಸಿ',
      productError: 'ದಯವಿಟ್ಟು ಉತ್ಪನ್ನ ಅಥವಾ ಸರಕಿನ ಹೆಸರನ್ನು ನಮೂದಿಸಿ',
      quantityLabel: 'ಅಗತ್ಯವಿರುವ ಪ್ರಮಾಣ (ಐಚ್ಛಿಕ)',
      quantityPlaceholder: 'ಅಗತ್ಯವಿರುವ ಪ್ರಮಾಣವನ್ನು ನಮೂದಿಸಿ',
      messageLabel: 'ಹೆಚ್ಚುವರಿ ವಿವರಗಳು ಅಥವಾ ತಲುಪಬೇಕಾದ ಬಂದರು (ಐಚ್ಛಿಕ)',
      messagePlaceholder: 'ನಿಮ್ಮ ಸಂದೇಶ ಅಥವಾ ಅಗತ್ಯಗಳನ್ನು ನಮೂದಿಸಿ',
      submitBtn: 'ವಿಚಾರಣೆಯನ್ನು ಪರಿಶೀಲಿಸಿ ಕಳುಹಿಸಿ',
      whatsappSubmitBtn: 'WhatsApp ಮೂಲಕ ಕಳುಹಿಸಿ',
      formNote: 'ಎಲ್ಲಾ ವಿಚಾರಣೆಗಳನ್ನು ಕಾಗಿಲಿ ಇಂಪೆಕ್ಸ್ ಸಂಸ್ಥೆಯ ಕರ್ಣ ಅವರು ನೇರವಾಗಿ ಗಮನಿಸುತ್ತಾರೆ.',
      modalTitle: 'ವಿಚಾರಣೆ ಸಿದ್ಧವಾಗಿದೆ',
      modalSubtitle: 'WhatsApp ಮೂಲಕ ಕಳುಹಿಸುವ ಮುನ್ನ ನಿಮ್ಮ ವಿಚಾರಣೆ ವಿವರಗಳನ್ನು ಪರಿಶೀಲಿಸಿ:',
      modalBuyerLabel: 'ಖರೀದಿದಾರರು / ಕಂಪನಿ',
      modalContactLabel: 'ಸಂಪರ್ಕ ಮಾಹಿತಿ',
      modalProductLabel: 'ಉತ್ಪನ್ನ / ಸರಕು',
      modalQuantityLabel: 'ಅಗತ್ಯವಿರುವ ಪ್ರಮಾಣ',
      modalMessageLabel: 'ಸಂದೇಶ / ಬಂದರು',
      modalWhatsAppBtn: 'ನೇರವಾಗಿ WhatsApp ಗೆ ಕಳುಹಿಸಿ',
      modalCopyBtn: 'ವಿಚಾರಣೆಯನ್ನು ನಕಲಿಸಿ',
      modalCopied: 'ನಕಲಿಸಲಾಗಿದೆ!',
      modalCloseBtn: 'ಮುಚ್ಚಿ',
    },
    footer: {
      description:
        'ಕಾಗಿಲಿ ಇಂಪೆಕ್ಸ್ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್ ನೋಂದಾಯಿತ ಭಾರತೀಯ ಕೃಷಿ ರಫ್ತು ಸಂಸ್ಥೆಯಾಗಿದ್ದು, ಅಂತಾರಾಷ್ಟ್ರೀಯ ಮಾರುಕಟ್ಟೆಗಳಿಗೆ ಉತ್ತಮ ಗುಣಮಟ್ಟದ ತಾಜಾ ಶುಂಠಿ, ಸಾಂಬಾರ ಪದಾರ್ಥಗಳು ಮತ್ತು ದೀರ್ಘಕಾಲ ಬಾಳಿಕೆ ಬರುವ ಕೃಷಿ ಸರಕುಗಳನ್ನು ಪೂರೈಸಲು ಬದ್ಧವಾಗಿದೆ.',
      navHeading: 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು',
      contactHeading: 'ನೇರ ಸಂಪರ್ಕ',
      allRights: 'ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
      backToTop: 'ಮೇಲಕ್ಕೆ ಹೋಗಿ',
      location: 'ಹಾಸನ, ಕರ್ನಾಟಕ, ಭಾರತ',
    },
    mobileBar: {
      call: 'ನೇರ ಕರೆ',
      whatsapp: 'WhatsApp',
    },
  },
};
