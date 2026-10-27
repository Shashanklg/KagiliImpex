/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedProduct } from './components/FeaturedProduct';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { GINGER_CORE_DATA } from './data/productData';

function MainApp() {
  const { t, language } = useLanguage();
  const [selectedProductForInquiry, setSelectedProductForInquiry] = useState<string>('');

  const scrollToProducts = () => {
    const productsSection = document.querySelector('#products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = (productName?: string) => {
    if (productName) {
      setSelectedProductForInquiry(productName);
    }
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappMessage =
    language === 'kn'
      ? 'ನಮಸ್ಕಾರ ಕರ್ಣ ಅವರೇ, ಕಾಗಿಲಿ ಇಂಪೆಕ್ಸ್ ಸಂಸ್ಥೆಯೊಂದಿಗೆ ಶುಂಠಿ ರಫ್ತಿನ ಕುರಿತು ವಿಚಾರಿಸಲು ಇಚ್ಛಿಸುತ್ತೇನೆ.'
      : 'Hello Karna, I would like to enquire about ginger export with Kagili Impex Private Limited.';

  return (
    <div className="min-h-screen bg-[#081426] text-white flex flex-col font-sans selection:bg-[#FFCC00] selection:text-[#081426] w-full max-w-full overflow-x-hidden">
      
      {/* 1. Navbar: Official logo, simple nav, language switcher, yellow quote button */}
      <Navbar onEnquireClick={() => scrollToContact()} />

      {/* Main Content: Exactly 4 sections between Navbar and Footer */}
      <main className="flex-grow w-full max-w-full">
        
        {/* 2. Hero Section: 'INDIAN GINGER. GLOBAL MARKETS.', concise copy, natural ginger photo, buttons */}
        <Hero
          onExploreClick={scrollToProducts}
          onContactClick={() => scrollToContact()}
        />

        {/* 3. About Us: Company intro, Hassan, Karnataka credentials (dark theme) */}
        <About />

        {/* 4. Our Products: Ginger (Whole) [HS 091011] & Ginger (Crushed/Ground) [HS 091012] */}
        <FeaturedProduct onEnquireClick={(product) => scrollToContact(product)} />

        {/* 5. Contact Us: Karna, Hassan address, phone, GSTIN, touch-friendly inquiry form */}
        <Contact prefilledProduct={selectedProductForInquiry} />

      </main>

      {/* 6. Footer: Company name, phone, essential navigation links */}
      <Footer />

      {/* Mobile Floating Quick Connect Bar (iOS & Android touch-optimized with >= 44px targets) */}
      <div className="sm:hidden fixed bottom-3 left-3 right-3 z-40 flex items-center gap-2 p-1.5 rounded-2xl bg-[#081426]/95 backdrop-blur-md border border-[#174EA6]/40 shadow-2xl safe-bottom">
        <a
          href={`tel:${GINGER_CORE_DATA.phoneTel}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#0B1F3A] border border-[#174EA6]/40 text-white font-bold text-xs uppercase tracking-wider active:bg-blue-900 min-h-[44px]"
        >
          <Phone className="w-4 h-4 text-[#FFCC00] shrink-0" />
          <span className="truncate">{t.mobileBar.call}</span>
        </a>
        <a
          href={`https://wa.me/917892204388?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#FFCC00] active:bg-[#E5BD00] text-[#081426] font-bold text-xs uppercase tracking-wider shadow-sm min-h-[44px]"
        >
          <MessageSquare className="w-4 h-4 shrink-0" />
          <span className="truncate">{t.mobileBar.whatsapp}</span>
        </a>
      </div>

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
