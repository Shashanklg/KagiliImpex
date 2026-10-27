import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GINGER_CORE_DATA } from '../data/productData';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section id="home" className="relative bg-[#081426] pt-8 pb-12 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-24 border-b border-[#174EA6]/30 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center w-full">
          
          {/* Left Column: Heading & Text (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left min-w-0 w-full">
            
            {/* Exporter Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0B1F3A] border border-[#174EA6]/60 text-[#FFCC00] text-xs font-bold tracking-wider uppercase mb-4 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-[#FFCC00]" />
              <span>{h.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] mb-4 sm:mb-5 break-words w-full">
              {h.titleLine1}{' '}
              <br className="hidden xs:inline" />
              <span className="text-[#FFCC00]">{h.titleLine2}</span>
            </h1>

            {/* Concise Description */}
            <p className="text-xs sm:text-base lg:text-lg text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-xl font-normal">
              {h.description}
            </p>

            {/* Two Action Buttons: OUR PRODUCTS and CONTACT US */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-6 sm:mb-8">
              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FFCC00] hover:bg-[#FFE043] active:bg-[#E5BD00] text-[#081426] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all cursor-pointer min-h-[48px] focus:outline-none focus:ring-2 focus:ring-[#FFCC00]"
              >
                <span>{h.exploreBtn}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </button>

              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B1F3A] hover:bg-[#122A4E] border border-[#174EA6] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer min-h-[48px] focus:outline-none focus:ring-2 focus:ring-[#174EA6]"
              >
                <span>{h.contactBtn}</span>
              </button>
            </div>

            {/* 3 Concise Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-6 border-t border-slate-800/80 w-full text-xs text-slate-300">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0B1F3A] border border-[#174EA6]/40">
                <CheckCircle2 className="w-4 h-4 text-[#FFCC00] shrink-0" />
                <span className="truncate">{h.trust1}</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0B1F3A] border border-[#174EA6]/40">
                <CheckCircle2 className="w-4 h-4 text-[#FFCC00] shrink-0" />
                <span className="truncate">{h.trust2}</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0B1F3A] border border-[#174EA6]/40">
                <CheckCircle2 className="w-4 h-4 text-[#FFCC00] shrink-0" />
                <span className="truncate">{h.trust3}</span>
              </div>
            </div>

          </div>

          {/* Right Column: User-provided Ginger Harvest Photograph */}
          <div className="lg:col-span-6 relative w-full min-w-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#174EA6]/40 bg-[#0B1F3A]">
              <img
                src={GINGER_CORE_DATA.heroImageUrl}
                alt="Fresh whole Indian ginger rhizomes in harvest crates"
                className="w-full h-[280px] xs:h-[340px] sm:h-[420px] lg:h-[480px] object-cover object-center"
              />

              {/* Product Information Overlay */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 rounded-xl bg-[#081426]/95 backdrop-blur-md border border-[#174EA6]/50 shadow-xl flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#FFCC00] block truncate">
                    {h.originTag}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white block truncate">
                    {h.imageCaption}
                  </span>
                </div>
                <span className="text-[11px] font-mono font-bold text-[#081426] bg-[#FFCC00] px-2.5 py-1 rounded shrink-0 shadow-xs">
                  091011 / 091012
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
