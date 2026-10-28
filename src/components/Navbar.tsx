import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { Logo } from './Logo';
import { GINGER_CORE_DATA } from '../data/productData';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onEnquireClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onEnquireClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.products, href: '#products' },
    { name: t.nav.contact, href: '#contact' },
  ];

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappMessage =
    language === 'kn'
      ? 'ನಮಸ್ಕಾರ ಕರ್ಣ ಅವರೇ, ಕಾಗಿಲಿ ಇಂಪೆಕ್ಸ್ ಸಂಸ್ಥೆಯೊಂದಿಗೆ ಕೃಷಿ ಉತ್ಪನ್ನಗಳ ರಫ್ತಿನ ಕುರಿತು ವಿಚಾರಿಸಲು ಇಚ್ಛಿಸುತ್ತೇನೆ.'
      : 'Hello Karna, I would like to enquire about agricultural commodities export with Kagili Impex Private Limited.';

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#081426] border-b border-[#174EA6]/30 shadow-lg w-full max-w-full">
      {/* Top micro bar for GSTIN & Direct Contact */}
      <div className="bg-[#050E1B] text-slate-300 py-1.5 px-3 sm:px-6 border-b border-slate-800/80 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 text-[10px] sm:text-xs">
          <div className="flex items-center gap-2 min-w-0">
            <span className="font-mono text-slate-300 font-semibold tracking-wide truncate">
              GSTIN: <span className="text-white font-mono">{GINGER_CORE_DATA.gstin}</span>
            </span>
            <span className="text-slate-600 hidden md:inline">|</span>
            <span className="text-slate-300 hidden md:inline truncate">
              {language === 'kn' ? 'ಭಾರತೀಯ ಕೃಷಿ ಮತ್ತು ಸಾಂಬಾರ ಪದಾರ್ಥಗಳ ರಫ್ತುದಾರರು · ಹಾಸನ, ಕರ್ನಾಟಕ' : 'Indian Agricultural Produce & Spices Exporters · Hassan, Karnataka'}
            </span>
          </div>
          
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`tel:${GINGER_CORE_DATA.phoneTel}`}
              className="text-slate-200 hover:text-[#FFCC00] transition-colors flex items-center gap-1.5 py-0.5 active:text-[#FFCC00]"
              aria-label="Direct Call Karna"
            >
              <Phone className="w-3 h-3 text-[#FFCC00] shrink-0" />
              <span className="hidden sm:inline font-medium">{t.nav.callDirect}:</span>
              <span className="font-mono font-bold text-white">{GINGER_CORE_DATA.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
          
          {/* Official Logo on Left */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center shrink min-w-0 focus:outline-none focus:ring-2 focus:ring-[#FFCC00] rounded-xl p-0.5 transition-transform active:scale-98"
            aria-label="Kagili Impex Home"
          >
            <Logo theme="dark" />
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-sm font-semibold text-white">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-white hover:text-[#FFCC00] transition-colors py-2 relative group whitespace-nowrap focus:outline-none focus:text-[#FFCC00]"
              >
                {link.name}
                <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-[#FFCC00] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Controls: Language Switcher & Hamburger Button on Mobile / Quote CTA on Desktop */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            
            {/* Bilingual Switcher: English | ಕನ್ನಡ */}
            <div
              className="inline-flex items-center p-0.5 sm:p-1 rounded-lg bg-[#0B1F3A] border border-[#174EA6]/50 shadow-inner"
              role="group"
              aria-label="Language selection"
            >
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-1.5 xs:px-2.5 py-1 sm:py-1.5 rounded-md text-[11px] sm:text-xs font-bold transition-all min-h-[44px] flex items-center justify-center cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#FFCC00] text-[#081426] shadow-xs font-black'
                    : 'text-slate-300 hover:text-white hover:bg-white/5 active:text-white'
                }`}
                aria-pressed={language === 'en'}
                aria-label="Switch to English"
              >
                <span className="hidden xs:inline">English</span>
                <span className="xs:hidden">EN</span>
              </button>
              <button
                type="button"
                onClick={() => setLanguage('kn')}
                className={`px-1.5 xs:px-2.5 py-1 sm:py-1.5 rounded-md text-[11px] sm:text-xs font-bold transition-all min-h-[44px] flex items-center justify-center cursor-pointer ${
                  language === 'kn'
                    ? 'bg-[#FFCC00] text-[#081426] shadow-xs font-black'
                    : 'text-slate-300 hover:text-white hover:bg-white/5 active:text-white'
                }`}
                aria-pressed={language === 'kn'}
                aria-label="ಕನ್ನಡ ಭಾಷೆಗೆ ಬದಲಾಯಿಸಿ"
              >
                <span className="hidden xs:inline">ಕನ್ನಡ</span>
                <span className="xs:hidden">KN</span>
              </button>
            </div>

            {/* Yellow REQUEST A QUOTE Button (Desktop) */}
            <button
              type="button"
              onClick={onEnquireClick}
              className="hidden md:inline-flex items-center gap-1.5 px-4 lg:px-5 py-2.5 rounded-xl bg-[#FFCC00] hover:bg-[#FFE043] active:bg-[#E5BD00] text-[#081426] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all cursor-pointer whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#FFCC00] min-h-[44px]"
            >
              <span>{t.nav.quoteBtn}</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </button>

            {/* Mobile Hamburger Menu Button (>=44px touch target) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-[#0B1F3A] text-white hover:text-[#FFCC00] border border-[#174EA6]/60 focus:outline-none focus:ring-2 focus:ring-[#FFCC00] active:scale-95 transition-all cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0 shadow-sm"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#FFCC00]" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer & Backdrop */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-xs transition-opacity duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Menu */}
          <div className="relative z-50 lg:hidden bg-[#081426] border-b border-[#174EA6]/40 shadow-2xl px-4 py-5 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
            <nav className="flex flex-col space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-white hover:text-[#FFCC00] hover:bg-[#0B1F3A] active:bg-[#0B1F3A] px-4 py-3.5 rounded-xl text-base font-semibold transition-colors flex items-center justify-between min-h-[48px] border border-transparent active:border-[#174EA6]/40"
                >
                  <span>{link.name}</span>
                  <span className="text-[#FFCC00] text-sm font-bold">›</span>
                </a>
              ))}

              <div className="pt-4 mt-3 border-t border-slate-800 space-y-3">
                {/* Mobile Drawer Primary Quote CTA */}
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onEnquireClick();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#FFCC00] active:bg-[#E5BD00] text-[#081426] font-bold text-sm uppercase tracking-wider shadow-md min-h-[48px] cursor-pointer"
                >
                  <span>{t.nav.quoteBtn}</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </button>

                {/* Direct WhatsApp Action in Drawer */}
                <a
                  href={`https://wa.me/917892204388?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#0B1F3A] border border-[#174EA6]/60 text-white active:bg-blue-900 font-bold text-sm uppercase tracking-wider min-h-[48px] cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#FFCC00] shrink-0" />
                  <span>WhatsApp: +91 7892204388</span>
                </a>

                {/* Direct Call in Drawer */}
                <a
                  href={`tel:${GINGER_CORE_DATA.phoneTel}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#050E1B] border border-[#174EA6]/30 text-xs text-slate-300 min-h-[44px]"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#FFCC00]" />
                    <span>{t.nav.callDirect}:</span>
                  </span>
                  <span className="font-bold text-[#FFCC00] font-mono text-sm">
                    {GINGER_CORE_DATA.phone}
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};
