import React, { useState } from 'react';
import { ArrowUpRight, MessageSquare, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GINGER_CORE_DATA } from '../data/productData';

interface ProductSectionProps {
  onEnquireClick: (productName?: string) => void;
}

/**
 * Developer Verification Note:
 * Harmonized System (HS) codes:
 * - 091011: Ginger (neither crushed nor ground / Whole)
 * - 091012: Ginger (crushed or ground)
 * Note for developer/exporter: Confirm applicable customs classification, duty rules,
 * and import regulations with Indian customs / DGFT and buyer's clearing agent before finalizing export shipping documentation.
 */

export const FeaturedProduct: React.FC<ProductSectionProps> = ({ onEnquireClick }) => {
  const { t, language } = useLanguage();
  const p = t.products;
  const [crushedImageError, setCrushedImageError] = useState(false);

  const handleWhatsAppEnquiry = (productName: string) => {
    const text =
      language === 'kn'
        ? `ನಮಸ್ಕಾರ ಕರ್ಣ ಅವರೇ, ಕಾಗಿಲಿ ಇಂಪೆಕ್ಸ್ ಸಂಸ್ಥೆಯಿಂದ "${productName}" ರಫ್ತಿನ ಕುರಿತು ವಿಚಾರಿಸಲು ಇಚ್ಛಿಸುತ್ತೇನೆ.`
        : `Hello Karna, I would like to enquire about exporting "${productName}" with Kagili Impex Private Limited.`;
    window.open(`https://wa.me/917892204388?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="products" className="py-14 sm:py-20 lg:py-24 bg-[#081426] text-white border-b border-[#174EA6]/30 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0B1F3A] border border-[#174EA6]/50 text-[#FFCC00] text-xs font-bold tracking-wider uppercase mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#FFCC00]" />
            <span>{p.badge}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-3 leading-tight">
            {p.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {p.description}
          </p>
        </div>

        {/* 2 Equal Product Cards Grid (1 col on mobile, 2 cols on tablet & desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch mb-8 w-full">
          
          {/* ========================================================
              PRODUCT 1: Ginger (Whole) - HS 091011
              ======================================================== */}
          <div className="bg-[#0B1F3A] rounded-2xl border border-[#174EA6]/50 shadow-xl overflow-hidden flex flex-col justify-between transition-all hover:border-[#174EA6] w-full">
            <div>
              {/* Product Photo & Badges */}
              <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-[#081426] border-b border-[#174EA6]/30">
                <img
                  src={GINGER_CORE_DATA.wholeProductImageUrl}
                  alt="Fresh whole Indian ginger rhizomes in harvest crates"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  <span className="bg-[#081426] text-white text-[11px] font-mono font-bold px-2.5 py-1 rounded-md shadow-sm uppercase tracking-wider border border-[#174EA6]/40">
                    HS: 091011
                  </span>
                  <span className="bg-[#FFCC00] text-[#081426] text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                    {language === 'kn' ? 'ಮೂಲ: ಭಾರತ' : 'Origin: India'}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-7">
                <div className="mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFCC00] block mb-1">
                    {p.whole.tag}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">
                    {p.whole.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {p.whole.description}
                </p>

                {/* Honest Specifications & Commercial Transparency Note */}
                <div className="p-3.5 rounded-xl bg-[#081426] border border-[#174EA6]/40 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFCC00] shrink-0" />
                    <span>
                      <strong className="text-white font-semibold">{language === 'kn' ? 'ಮೂಲ: ' : 'Origin: '}</strong>
                      {p.whole.origin}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFCC00] shrink-0" />
                    <span>
                      <strong className="text-white font-semibold">{language === 'kn' ? 'ಉತ್ಪನ್ನ ರೂಪ: ' : 'Product Form: '}</strong>
                      {p.whole.form}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFCC00] shrink-0" />
                    <span>
                      <strong className="text-white font-semibold">{language === 'kn' ? 'ಪ್ಯಾಕೇಜಿಂಗ್: ' : 'Packaging: '}</strong>
                      {p.whole.packaging}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFCC00] shrink-0" />
                    <span>
                      <strong className="text-white font-semibold">{language === 'kn' ? 'ದರ ಮತ್ತು ಪ್ರಮಾಣ: ' : 'Pricing & Volume: '}</strong>
                      {p.whole.pricing}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-5 sm:p-7 pt-0 border-t border-slate-800 mt-4 flex flex-col sm:flex-row items-stretch gap-2.5">
              <button
                type="button"
                onClick={() => onEnquireClick(p.whole.name)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#FFCC00] hover:bg-[#FFE043] active:bg-[#E5BD00] text-[#081426] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer shadow-xs min-h-[44px]"
              >
                <span>{p.enquireBtn}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </button>
              <button
                type="button"
                onClick={() => handleWhatsAppEnquiry(p.whole.name)}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#081426] hover:bg-[#122A4E] border border-[#174EA6]/50 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer min-h-[44px]"
                title="Direct WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-[#FFCC00] shrink-0" />
                <span className="sm:hidden">WhatsApp</span>
              </button>
            </div>
          </div>

          {/* ========================================================
              PRODUCT 2: Ginger (Crushed/Ground) - HS 091012
              ======================================================== */}
          <div className="bg-[#0B1F3A] rounded-2xl border border-[#174EA6]/50 shadow-xl overflow-hidden flex flex-col justify-between transition-all hover:border-[#174EA6] w-full">
            <div>
              {/* Product Photo & Badges */}
              <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-[#081426] border-b border-[#174EA6]/30">
                <img
                  src={crushedImageError ? GINGER_CORE_DATA.heroImageUrl : GINGER_CORE_DATA.crushedProductImageUrl}
                  alt="Coarsely crushed and ground Indian ginger spice"
                  onError={() => setCrushedImageError(true)}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  <span className="bg-[#081426] text-white text-[11px] font-mono font-bold px-2.5 py-1 rounded-md shadow-sm uppercase tracking-wider border border-[#174EA6]/40">
                    HS: 091012
                  </span>
                  <span className="bg-[#FFCC00] text-[#081426] text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                    {language === 'kn' ? 'ಮೂಲ: ಭಾರತ' : 'Origin: India'}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-7">
                <div className="mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFCC00] block mb-1">
                    {p.crushed.tag}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">
                    {p.crushed.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {p.crushed.description}
                </p>

                {/* Honest Specifications & Commercial Transparency Note */}
                <div className="p-3.5 rounded-xl bg-[#081426] border border-[#174EA6]/40 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFCC00] shrink-0" />
                    <span>
                      <strong className="text-white font-semibold">{language === 'kn' ? 'ಮೂಲ: ' : 'Origin: '}</strong>
                      {p.crushed.origin}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFCC00] shrink-0" />
                    <span>
                      <strong className="text-white font-semibold">{language === 'kn' ? 'ಉತ್ಪನ್ನ ರೂಪ: ' : 'Product Form: '}</strong>
                      {p.crushed.form}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFCC00] shrink-0" />
                    <span>
                      <strong className="text-white font-semibold">{language === 'kn' ? 'ಪ್ಯಾಕೇಜಿಂಗ್: ' : 'Packaging: '}</strong>
                      {p.crushed.packaging}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFCC00] shrink-0" />
                    <span>
                      <strong className="text-white font-semibold">{language === 'kn' ? 'ದರ ಮತ್ತು ಪ್ರಮಾಣ: ' : 'Pricing & Volume: '}</strong>
                      {p.crushed.pricing}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-5 sm:p-7 pt-0 border-t border-slate-800 mt-4 flex flex-col sm:flex-row items-stretch gap-2.5">
              <button
                type="button"
                onClick={() => onEnquireClick(p.crushed.name)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#FFCC00] hover:bg-[#FFE043] active:bg-[#E5BD00] text-[#081426] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer shadow-xs min-h-[44px]"
              >
                <span>{p.enquireBtn}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </button>
              <button
                type="button"
                onClick={() => handleWhatsAppEnquiry(p.crushed.name)}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#081426] hover:bg-[#122A4E] border border-[#174EA6]/50 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer min-h-[44px]"
                title="Direct WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-[#FFCC00] shrink-0" />
                <span className="sm:hidden">WhatsApp</span>
              </button>
            </div>
          </div>

        </div>

        {/* Regulatory & HS Verification Banner */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#0B1F3A] border border-[#174EA6]/40 text-xs text-slate-300 flex items-start gap-3 shadow-sm w-full">
          <AlertCircle className="w-5 h-5 text-[#FFCC00] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {p.hsVerificationNote}
          </p>
        </div>

      </div>
    </section>
  );
};
