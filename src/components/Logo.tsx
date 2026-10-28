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

  // Enhanced responsive size dimensions for circular emblem
  const sizeClasses = {
    sm: 'w-9 h-9 sm:w-11 sm:h-11',
    md: 'w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14',
    lg: 'w-16 h-16 sm:w-20 sm:h-20',
  }[size];

  // Official logo image path provided by user
  const logoSrc = '/assets/aistudio/WhatsApp_Image_2026-10-27_at_2.28.08_PM_0e1987e4.jpeg';

  return (
    <div className={`flex items-center gap-2 sm:gap-3 select-none min-w-0 ${className}`}>
      {/* Official circular logo badge - bigger, cleaner, sharp golden ring */}
      <div
        className={`relative ${sizeClasses} rounded-full overflow-hidden shrink-0 bg-[#081426] flex items-center justify-center shadow-lg transition-transform hover:scale-105 p-0.5 ${
          isLight
            ? 'ring-2 ring-slate-900/20 shadow-slate-300'
            : 'ring-2 ring-[#FFCC00] shadow-black/60'
        }`}
      >
        <img
          src={logoSrc}
          alt="KAGILI IMPEX PRIVATE LIMITED Official Logo"
          className="w-full h-full object-contain rounded-full"
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
        <div className="flex flex-col text-left min-w-0 justify-center">
          <div className="flex items-center gap-1 sm:gap-1.5 leading-tight">
            <span
              className={`font-display font-extrabold text-sm xs:text-base sm:text-lg lg:text-xl tracking-wider ${
                isLight ? 'text-[#0B1F3A]' : 'text-white'
              }`}
            >
              KAGILI
            </span>
            <span
              className="font-display font-black text-sm xs:text-base sm:text-lg lg:text-xl tracking-wider text-[#FFCC00]"
            >
              IMPEX
            </span>
          </div>

          {showSubtitle && (
            <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5 leading-none">
              <span
                className={`text-[8px] xs:text-[9px] sm:text-[10px] uppercase font-bold tracking-wider ${
                  isLight ? 'text-slate-600' : 'text-slate-300'
                }`}
              >
                PVT. LTD.
              </span>
              <span className="text-[8px] xs:text-[9px] text-[#FFCC00]">
                •
              </span>
              <span
                className="text-[8px] xs:text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-[#FFCC00] truncate"
              >
                {language === 'kn' ? 'ಕೃಷಿ ರಫ್ತು' : 'AGRO EXPORT'}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
