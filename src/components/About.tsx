import { MapPin, UserCheck, Phone, FileText, Globe } from 'lucide-react';
import { GINGER_CORE_DATA } from '../data/productData';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="py-14 sm:py-20 lg:py-24 bg-[#0B1F3A] text-white border-b border-[#174EA6]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#081426] border border-[#174EA6]/50 text-[#FFCC00] text-xs font-bold tracking-wider uppercase mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#FFCC00]" />
            <span>{a.badge}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-4 leading-tight">
            {a.title}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
            {a.description}
          </p>
        </div>

        {/* Compact 2-Column Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Focused Company Overview (7 cols) */}
          <div className="lg:col-span-7 text-slate-200 text-sm sm:text-base leading-relaxed">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#081426] border border-[#174EA6]/40 shadow-sm space-y-4">
              <p className="leading-relaxed text-slate-200">
                {a.p1}
              </p>
              <p className="leading-relaxed text-slate-300">
                {a.p2}
              </p>
            </div>
          </div>

          {/* Right Column: Registered Enterprise Credentials Card (5 cols) */}
          <div className="lg:col-span-5 w-full min-w-0">
            <div className="bg-[#081426] rounded-2xl border border-[#174EA6]/50 p-5 sm:p-7 shadow-lg space-y-4 sm:space-y-5 w-full overflow-hidden">
              
              {/* Logo Emblem Header */}
              <div className="border-b border-slate-800 pb-4 sm:pb-5 flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 bg-[#081426] ring-2 ring-[#FFCC00] shadow-md flex items-center justify-center p-0.5">
                  <img
                    src={GINGER_CORE_DATA.logoUrl}
                    alt="KAGILI IMPEX Official Circular Emblem"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#FFCC00] block">
                    {a.credentialsBadge}
                  </span>
                  <h3 className="font-display text-base sm:text-lg font-bold text-white leading-tight break-words">
                    {GINGER_CORE_DATA.company}
                  </h3>
                  <span className="text-[11px] font-semibold text-slate-400 block mt-0.5">
                    {a.enterpriseType}
                  </span>
                </div>
              </div>

              {/* Verified Information Items */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5 sm:gap-3 p-3 rounded-lg bg-[#0B1F3A] border border-[#174EA6]/30 min-w-0">
                  <UserCheck className="w-4 h-4 text-[#FFCC00] shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <span className="text-[11px] text-slate-400 block">{a.contactPersonLabel}</span>
                    <span className="font-bold text-white text-sm block truncate">{GINGER_CORE_DATA.contactPerson}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3 p-3 rounded-lg bg-[#0B1F3A] border border-[#174EA6]/30 min-w-0">
                  <Phone className="w-4 h-4 text-[#FFCC00] shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <span className="text-[11px] text-slate-400 block">{a.phoneLabel}</span>
                    <a
                      href={`tel:${GINGER_CORE_DATA.phoneTel}`}
                      className="font-bold text-white hover:text-[#FFCC00] transition-colors font-mono text-sm block"
                    >
                      {GINGER_CORE_DATA.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3 p-3 rounded-lg bg-[#0B1F3A] border border-[#174EA6]/30 min-w-0">
                  <MapPin className="w-4 h-4 text-[#FFCC00] shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <span className="text-[11px] text-slate-400 block">{a.addressLabel}</span>
                    <p className="font-medium text-slate-200 leading-relaxed text-xs break-words">
                      {GINGER_CORE_DATA.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3 p-3 rounded-lg bg-[#0B1F3A] border border-[#174EA6]/30 min-w-0">
                  <Globe className="w-4 h-4 text-[#FFCC00] shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <span className="text-[11px] text-slate-400 block">{a.websiteLabel}</span>
                    <a
                      href="https://www.kagilitraders.com"
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono font-bold text-[#FFCC00] hover:underline text-xs sm:text-sm block"
                    >
                      www.kagilitraders.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3 p-3 rounded-lg bg-[#0B1F3A] border border-[#174EA6]/30 min-w-0">
                  <FileText className="w-4 h-4 text-[#FFCC00] shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <span className="text-[11px] text-slate-400 block">{a.gstinLabel}</span>
                    <span className="font-mono font-bold text-white text-xs sm:text-sm tracking-wide block">
                      {GINGER_CORE_DATA.gstin}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
