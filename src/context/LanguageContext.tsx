import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations, Translations } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'kagili_preferred_lang';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY) as Language;
      if (saved === 'en' || saved === 'kn') {
        return saved;
      }
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'kn' : 'en');
  };

  useEffect(() => {
    // Update HTML lang attribute
    document.documentElement.lang = language;

    // Update document title and description according to active locale
    if (language === 'kn') {
      document.title = 'ಕಾಗಿಲಿ ಇಂಪೆಕ್ಸ್ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್ | ಭಾರತೀಯ ಶುಂಠಿ ರಫ್ತುದಾರರು';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'ಕಾಗಿಲಿ ಇಂಪೆಕ್ಸ್ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್ (ಹಾಸನ, ಕರ್ನಾಟಕ). ಭಾರತೀಯ ತಾಜಾ ಇಡೀ ಶುಂಠಿ ರಫ್ತು ವಿಚಾರಣೆಗಳು, ಪ್ಯಾಕೇಜಿಂಗ್ ಮತ್ತು ಖರೀದಿದಾರರ ಅಗತ್ಯಗಳಿಗಾಗಿ ಸಂಪರ್ಕಿಸಿ.'
        );
      }
    } else {
      document.title = 'Kagili Impex Private Limited | Indian Ginger Exporters';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Contact Kagili Impex Private Limited in Hassan, Karnataka, India, for fresh whole ginger sourcing and international export inquiries.'
        );
      }
    }
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    toggleLanguage,
    t: translations[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
