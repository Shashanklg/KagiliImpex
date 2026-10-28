import { ArrowUpRight, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GINGER_CORE_DATA } from '../data/productData';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  const { t, language } = useLanguage();
  const h = t.hero;

  const whatsappMessage =
    language === 'kn'
      ? 'ನಮಸ್ಕಾರ ಕರ್ಣ ಅವರೇ, ಕಾಗಿಲಿ ಇಂಪೆಕ್ಸ್ ಸಂಸ್ಥೆಯೊಂದಿಗೆ ಕೃಷಿ ಉತ್ಪನ್ನಗಳ ರಫ್ತಿನ ಕುರಿತು ವಿಚಾರಿಸಲು ಇಚ್ಛಿಸುತ್ತೇನೆ.'
      : 'Hello Karna, I would like to enquire about agricultural commodities export with Kagili Impex Private Limited.';

  return (
    <section id="home" className="relative bg-[#081426] pt-6 pb-12 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-24 border-b border-[#174EA6]/30 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center w-full">
          
          {/* Left Column: Heading & Text (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left min-w-0 w-full">
            
            {/* Exporter Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0B1F3A] border border-[#174EA6]/60 text-[#FFCC00] text-xs font-bold tracking-wider uppercase mb-3 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-[#FFCC00]" />
              <span>{h.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] mb-3 sm:mb-5 break-words w-full">
              {h.titleLine1}{' '}
              <br className="hidden xs:inline" />
              <span className="text-[#FFCC00]">{h.titleLine2}</span>
            </h1>

            {/* Concise Description */}
            <p className="text-xs sm:text-base lg:text-lg text-slate-300 leading-relaxed mb-5 sm:mb-8 max-w-xl font-normal">
              {h.description}
            </p>

            {/* Action Buttons: Visible in laptop/desktop view, hidden in mobile view where persistent bottom quick-connect bar is present */}
            <div className="hidden sm:flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-6 sm:mb-8">
              {/* Prominent Yellow WhatsApp Button */}
              <a
                href={`https://wa.me/917892204388?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FFCC00] hover:bg-[#FFE043] active:bg-[#E5BD00] text-[#081426] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all cursor-pointer min-h-[48px] focus:outline-none focus:ring-2 focus:ring-[#FFCC00]"
                aria-label="Enquire directly on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>{h.whatsappBtn || 'ENQUIRE ON WHATSAPP'}</span>
              </a>

              {/* Secondary Products Button */}
              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B1F3A] hover:bg-[#122A4E] border border-[#174EA6] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer min-h-[48px] focus:outline-none focus:ring-2 focus:ring-[#174EA6]"
              >
                <span>{h.exploreBtn}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0 text-[#FFCC00]" />
              </button>
            </div>

          </div>

          {/* Right Column: International Maritime Export Harbour Terminal Photograph */}
          <div className="lg:col-span-6 relative w-full min-w-0">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#174EA6]/40 bg-[#0B1F3A]">
              {/* Full unobstructed harbour export photo without any text overlays or strips */}
              <div className="relative w-full h-[260px] xs:h-[300px] sm:h-[380px] lg:h-[440px] overflow-hidden bg-[#081426]">
                <img
                  src={GINGER_CORE_DATA.heroImageUrl}
                  alt="International container shipping port and export harbour cargo terminal"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
