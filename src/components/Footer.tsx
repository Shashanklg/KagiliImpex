import React from 'react';
import { Phone, MapPin, ArrowUp, UserCheck, MessageSquare, FileText } from 'lucide-react';
import { Logo } from './Logo';
import { GINGER_CORE_DATA } from '../data/productData';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const f = t.footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.products, href: '#products' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="bg-[#081426] text-slate-300 text-sm border-t border-[#174EA6]/30 pb-24 sm:pb-0 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 sm:pb-12 border-b border-slate-800 w-full">
          
          {/* Col 1: Logo & Company Description (5 cols) */}
          <div className="lg:col-span-5 space-y-4 min-w-0">
            <Logo variant="full" theme="dark" />
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed mt-4">
              {f.description}
            </p>
            <div className="pt-2 text-xs font-mono text-[#FFCC00] flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 shrink-0" />
              <span>GSTIN: {GINGER_CORE_DATA.gstin}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3 min-w-0">
            <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-[#FFCC00]">
              {f.navHeading}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-[#FFCC00] transition-colors py-2 min-h-[40px] flex items-center"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Official Registered Office & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3 min-w-0">
            <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-[#FFCC00]">
              {f.contactHeading}
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5 text-slate-300 min-w-0">
                <MapPin className="w-4 h-4 text-[#FFCC00] shrink-0 mt-0.5" />
                <span className="leading-relaxed break-words text-xs sm:text-sm">{GINGER_CORE_DATA.address}</span>
              </div>
              
              <div className="flex items-center gap-2.5 text-slate-300 min-w-0">
                <UserCheck className="w-4 h-4 text-[#FFCC00] shrink-0" />
                <span className="truncate">{t.about.contactPersonLabel}: {GINGER_CORE_DATA.contactPerson}</span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-[#FFCC00] shrink-0" />
                <a
                  href={`tel:${GINGER_CORE_DATA.phoneTel}`}
                  className="font-bold text-white hover:text-[#FFCC00] transition-colors font-mono py-1 min-h-[44px] flex items-center"
                >
                  {GINGER_CORE_DATA.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <MessageSquare className="w-4 h-4 text-[#FFCC00] shrink-0" />
                <a
                  href={`https://wa.me/917892204388?text=${encodeURIComponent(
                    language === 'kn'
                      ? 'ನಮಸ್ಕಾರ ಕರ್ಣ ಅವರೇ, ಕಾಗಿಲಿ ಇಂಪೆಕ್ಸ್ ಸಂಸ್ಥೆಯೊಂದಿಗೆ ಶುಂಠಿ ರಫ್ತಿನ ಕುರಿತು ವಿಚಾರಿಸಲು ಇಚ್ಛಿಸುತ್ತೇನೆ.'
                      : 'Hello Karna, I am contacting Kagili Impex Private Limited regarding ginger export.'
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FFCC00] transition-colors text-white font-medium py-1 min-h-[44px] flex items-center"
                >
                  WhatsApp: +91 7892204388
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} {GINGER_CORE_DATA.company}. {f.allRights}
          </div>
          <div className="flex items-center gap-6">
            <span>{f.location}</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-[#FFCC00] transition-colors cursor-pointer py-2 min-h-[44px]"
            >
              <span>{f.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
