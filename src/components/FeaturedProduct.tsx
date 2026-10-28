import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { EXPORT_PRODUCTS, ExportProductItem } from '../data/productData';

interface ProductSectionProps {
  onEnquireClick?: (productName?: string) => void;
}

export const FeaturedProduct: React.FC<ProductSectionProps> = () => {
  const { t, language } = useLanguage();
  const p = t.products;
  const isKn = language === 'kn';

  return (
    <section id="products" className="py-12 sm:py-18 lg:py-20 bg-[#081426] text-white border-b border-[#174EA6]/30 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0B1F3A] border border-[#174EA6]/50 text-[#FFCC00] text-xs font-bold tracking-wider uppercase mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#FFCC00]" />
            <span>{p.badge}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-2.5 leading-tight">
            {p.title}
          </h2>
          <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
            {p.description}
          </p>
        </div>

        {/* 2 Agricultural & Spices Product Categories (2-col grid on desktop, 1-col on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch mb-8 w-full">
          {EXPORT_PRODUCTS.map((prod: ExportProductItem) => {
            const productName = isKn ? prod.kannadaName : prod.name;
            const categoryTag = isKn ? prod.kannadaCategoryTag : prod.categoryTag;
            const description = isKn ? prod.kannadaDescription : prod.description;

            return (
              <div
                key={prod.id}
                className="bg-[#0B1F3A] rounded-2xl border border-[#174EA6]/50 shadow-xl overflow-hidden flex flex-col justify-between transition-all hover:border-[#174EA6] w-full"
              >
                <div>
                  {/* Product Image & Badges */}
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden border-b border-[#174EA6]/30 flex items-center justify-center bg-[#081426]">
                    <img
                      src={prod.imageUrl}
                      alt={productName}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      <span className="bg-[#081426] text-white text-[10px] sm:text-[11px] font-mono font-bold px-2.5 py-1 rounded-md shadow-sm uppercase tracking-wider border border-[#174EA6]/40">
                        HS: {prod.hsCode}
                      </span>
                      <span className="bg-[#FFCC00] text-[#081426] text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                        {isKn ? 'ಮೂಲ: ಭಾರತ' : 'Origin: India'}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 pb-6 sm:pb-7">
                    <div className="mb-2.5">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#FFCC00] block mb-1">
                        {categoryTag}
                      </span>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-tight">
                        {productName}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 min-h-[38px]">
                      {description}
                    </p>

                    {/* Specifications List */}
                    <div className="p-3.5 rounded-xl bg-[#081426] border border-[#174EA6]/40 space-y-2 text-xs text-slate-300">
                      {prod.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FFCC00] shrink-0" />
                          <span className="truncate">
                            <strong className="text-white font-semibold">
                              {isKn ? spec.kannadaLabel : spec.label}:{' '}
                            </strong>
                            {isKn ? spec.kannadaValue : spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Customs Transparency Notice */}
        <div className="p-4 rounded-xl bg-[#0B1F3A] border border-[#174EA6]/40 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#FFCC00] shrink-0 mt-0.5" />
          <p className="text-xs text-slate-300 leading-relaxed">
            {p.hsVerificationNote}
          </p>
        </div>

      </div>
    </section>
  );
};
