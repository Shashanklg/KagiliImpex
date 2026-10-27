import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'horizontal';
  showSubtitle?: boolean;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  showSubtitle = true,
  theme = 'dark',
  size = 'md',
}) => {
  const isLight = theme === 'light';
  let language = 'en';
  try {
    const langContext = useLanguage();
    language = langContext.language;
  } catch {
    language = 'en';
  }

  // Size dimensions for circular emblem
  const sizeClasses = {
    sm: 'w-8 h-8 sm:w-10 sm:h-10',
    md: 'w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12',
    lg: 'w-14 h-14 sm:w-20 sm:h-20',
  }[size];

  // Official logo image path provided by user (2nd photo)
  const logoSrc = '/assets/aistudio/WhatsApp_Image_2026-10-27_at_2.28.08_PM_0e1987e4.jpeg';

  return (
    <div className={`flex items-center gap-1.5 xs:gap-2 sm:gap-3 select-none min-w-0 ${className}`}>
      {/* Official circular logo badge */}
      <div
        className={`relative ${sizeClasses} rounded-full overflow-hidden shrink-0 bg-[#0B1F3A] flex items-center justify-center shadow-md transition-transform hover:scale-102 ${
          isLight
            ? 'ring-2 ring-slate-900/10 shadow-slate-200'
            : 'ring-2 ring-[#FFCC00]/50 shadow-black/50'
        }`}
      >
        <img
          src={logoSrc}
          alt="KAGILI IMPEX PRIVATE LIMITED Official Logo"
          className="w-full h-full object-cover object-center transform scale-102"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== window.location.origin + '/assets/logo.png') {
              target.src = '/assets/logo.png';
            }
          }}
        />
      </div>

      {/* Brand Wordmark & Official Identification */}
      {variant !== 'mark' && (
        <div className="flex flex-col text-left min-w-0">
          <div className="flex items-center gap-1 sm:gap-1.5 leading-none">
            <span
              className={`font-display font-extrabold text-xs xs:text-sm sm:text-lg tracking-wider ${
                isLight ? 'text-[#0B1F3A]' : 'text-white'
              }`}
            >
              KAGILI
            </span>
            <span
              className="font-display font-black text-xs xs:text-sm sm:text-lg tracking-wider text-[#FFCC00]"
            >
              IMPEX
            </span>
          </div>

          {showSubtitle && (
            <div className="hidden sm:flex items-center gap-1.5 mt-1">
              <span
                className={`text-[10px] uppercase font-bold tracking-widest ${
                  isLight ? 'text-slate-600' : 'text-slate-300'
                }`}
              >
                PVT. LTD.
              </span>
              <span className="text-[10px] text-[#FFCC00]">
                ·
              </span>
              <span
                className="text-[10px] uppercase font-bold tracking-wider text-[#FFCC00]"
              >
                {language === 'kn' ? 'ಶುಂಠಿ ರಫ್ತುದಾರರು' : 'Ginger Exporter'}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
