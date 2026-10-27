import React, { useState, useEffect } from 'react';
import {
  Phone,
  MapPin,
  FileText,
  UserCheck,
  Send,
  MessageSquare,
  Copy,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { GINGER_CORE_DATA } from '../data/productData';
import { useLanguage } from '../context/LanguageContext';

interface ContactProps {
  prefilledProduct?: string;
}

export const Contact: React.FC<ContactProps> = ({ prefilledProduct }) => {
  const { t, language } = useLanguage();
  const c = t.contact;

  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    product: 'whole',
    quantity: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [showSummaryModal, setShowSummaryModal] = useState(false);

  useEffect(() => {
    if (prefilledProduct) {
      if (
        prefilledProduct.toLowerCase().includes('crushed') ||
        prefilledProduct.toLowerCase().includes('ground') ||
        prefilledProduct.includes('ಪುಡಿ')
      ) {
        setFormData((prev) => ({ ...prev, product: 'crushed' }));
      } else if (
        prefilledProduct.toLowerCase().includes('whole') ||
        prefilledProduct.includes('ಇಡೀ')
      ) {
        setFormData((prev) => ({ ...prev, product: 'whole' }));
      } else if (
        prefilledProduct.toLowerCase().includes('both') ||
        prefilledProduct.includes('ಎರಡೂ')
      ) {
        setFormData((prev) => ({ ...prev, product: 'both' }));
      }
    }
  }, [prefilledProduct]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const getProductName = (key: string) => {
    if (key === 'whole') return c.productWhole;
    if (key === 'crushed') return c.productCrushed;
    return c.productBoth;
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = c.nameError;
    }
    if (!formData.contactInfo.trim()) {
      errors.contactInfo = c.contactError;
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const generateInquiryText = () => {
    const isKn = language === 'kn';
    return [
      `*${isKn ? 'ಶುಂಠಿ ರಫ್ತು ವಿಚಾರಣೆ' : 'GINGER EXPORT INQUIRY'} — KAGILI IMPEX PRIVATE LIMITED*`,
      `------------------------------------------`,
      `• *${isKn ? 'ಖರೀದಿದಾರರ ಹೆಸರು' : 'Buyer Name'}*: ${formData.name.trim() || 'Prospective Buyer'}`,
      `• *${isKn ? 'ಸಂಪರ್ಕ ಮಾಹಿತಿ' : 'Contact (Email/Phone)'}*: ${formData.contactInfo.trim() || 'Not specified'}`,
      `• *${isKn ? 'ಉತ್ಪನ್ನ' : 'Product'}*: ${getProductName(formData.product)}`,
      `• *${isKn ? 'ಅಗತ್ಯವಿರುವ ಪ್ರಮಾಣ' : 'Target Quantity'}*: ${formData.quantity.trim() || 'To be discussed'}`,
      formData.message.trim() ? `• *${isKn ? 'ಸಂದೇಶ' : 'Message'}*: ${formData.message.trim()}` : null,
      `------------------------------------------`,
      `*${isKn ? 'ಪ್ರತಿಕ್ರಿಯಿಸಲು ವಿನಂತಿ' : 'Requested Response'}*: ${isKn ? 'ದರಪಟ್ಟಿ ಮತ್ತು ಲಭ್ಯತೆ' : 'Pricing & Availability'}`,
    ]
      .filter(Boolean)
      .join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setShowSummaryModal(true);
    }
  };

  const handleWhatsAppSend = () => {
    const inquiry = generateInquiryText();
    const encoded = encodeURIComponent(inquiry);
    window.open(`https://wa.me/917892204388?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const copyInquirySummary = () => {
    navigator.clipboard.writeText(generateInquiryText());
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  const copyPhoneToClipboard = () => {
    navigator.clipboard.writeText(GINGER_CORE_DATA.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-12 sm:py-20 lg:py-24 bg-[#0B1F3A] text-white border-b border-[#174EA6]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#081426] border border-[#174EA6]/50 text-[#FFCC00] text-xs font-bold tracking-wider uppercase mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#FFCC00]" />
            <span>{c.badge}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-3 leading-tight">
            {c.title}
          </h2>
          <p className="text-xs sm:text-base lg:text-lg text-slate-300 leading-relaxed">
            {c.description}
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          
          {/* Left Column: Official Enterprise Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 w-full">
            <div className="bg-[#081426] rounded-2xl border border-[#174EA6]/50 p-5 sm:p-8 shadow-xl space-y-5">
              
              <div className="border-b border-slate-800 pb-3">
                <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#FFCC00] block mb-1">
                  {c.cardTitle}
                </span>
                <h3 className="font-display text-base sm:text-xl font-bold text-white leading-tight">
                  {GINGER_CORE_DATA.company}
                </h3>
              </div>

              {/* Verified Details */}
              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                
                {/* Contact Person */}
                <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-[#0B1F3A] border border-[#174EA6]/30">
                  <UserCheck className="w-4 h-4 text-[#FFCC00] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] sm:text-[11px] text-slate-400 block">{c.contactPersonLabel}</span>
                    <span className="font-bold text-white text-xs sm:text-sm">{GINGER_CORE_DATA.contactPerson}</span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-[#0B1F3A] border border-[#174EA6]/30">
                  <Phone className="w-4 h-4 text-[#FFCC00] shrink-0 mt-0.5" />
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] sm:text-[11px] text-slate-400 block">{c.phoneLabel}</span>
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <a
                        href={`tel:${GINGER_CORE_DATA.phoneTel}`}
                        className="font-mono font-bold text-sm sm:text-base text-white hover:text-[#FFCC00] transition-colors py-1 min-h-[44px] flex items-center"
                      >
                        {GINGER_CORE_DATA.phone}
                      </a>
                      <button
                        type="button"
                        onClick={copyPhoneToClipboard}
                        className="text-[11px] font-bold text-[#FFCC00] hover:text-white flex items-center gap-1 cursor-pointer py-1.5 px-2.5 rounded bg-[#081426] border border-[#174EA6]/40 min-h-[36px]"
                      >
                        <Copy className="w-3 h-3" />
                        <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Address with Google Maps link */}
                <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-[#0B1F3A] border border-[#174EA6]/30">
                  <MapPin className="w-4 h-4 text-[#FFCC00] shrink-0 mt-0.5" />
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] sm:text-[11px] text-slate-400 block">{c.addressLabel}</span>
                    <p className="font-medium text-slate-200 leading-relaxed text-xs mb-2">
                      {GINGER_CORE_DATA.address}
                    </p>
                    <a
                      href="https://maps.google.com/?q=Hassan+Karnataka+India"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#FFCC00] hover:underline"
                    >
                      <span>Hassan, Karnataka</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* GSTIN */}
                <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-[#0B1F3A] border border-[#174EA6]/30">
                  <FileText className="w-4 h-4 text-[#FFCC00] shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-[11px] text-slate-400 block">{c.gstinLabel}</span>
                    <span className="font-mono font-bold text-white text-xs sm:text-sm">
                      {GINGER_CORE_DATA.gstin}
                    </span>
                  </div>
                </div>

              </div>

              {/* Direct Quick Action Buttons (Comfortable >=46px tap height) */}
              <div className="pt-2 space-y-2.5">
                <a
                  href={`tel:${GINGER_CORE_DATA.phoneTel}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0B1F3A] hover:bg-[#122A4E] border border-[#174EA6] text-white font-bold text-xs uppercase tracking-wider transition-all min-h-[46px] active:bg-blue-900"
                >
                  <Phone className="w-4 h-4 text-[#FFCC00]" />
                  <span>{c.callBtn}</span>
                </a>

                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#FFCC00] hover:bg-[#FFE043] active:bg-[#E5BD00] text-[#081426] font-bold text-xs uppercase tracking-wider transition-all shadow-xs min-h-[46px] cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{c.whatsappBtn}</span>
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Short Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-[#081426] rounded-2xl border border-[#174EA6]/50 p-5 sm:p-8 shadow-xl">
              
              <div className="mb-5 sm:mb-6">
                <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1">
                  {c.formTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  {c.formSubtitle}
                </p>
              </div>

              {/* Form with text-base on mobile to prevent iOS Safari auto-zoom */}
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                    {c.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={c.namePlaceholder}
                    className={`w-full px-4 py-3 rounded-xl bg-[#0B1F3A] border text-base sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#FFCC00] focus:ring-1 focus:ring-[#FFCC00] transition-all min-h-[48px] ${
                      formErrors.name ? 'border-red-500' : 'border-[#174EA6]/50'
                    }`}
                  />
                  {formErrors.name && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.name}
                    </p>
                  )}
                </div>

                {/* Email / Phone Field */}
                <div>
                  <label htmlFor="contactInfo" className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                    {c.contactLabel}
                  </label>
                  <input
                    type="text"
                    id="contactInfo"
                    name="contactInfo"
                    value={formData.contactInfo}
                    onChange={handleChange}
                    placeholder={c.contactPlaceholder}
                    className={`w-full px-4 py-3 rounded-xl bg-[#0B1F3A] border text-base sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#FFCC00] focus:ring-1 focus:ring-[#FFCC00] transition-all min-h-[48px] ${
                      formErrors.contactInfo ? 'border-red-500' : 'border-[#174EA6]/50'
                    }`}
                  />
                  {formErrors.contactInfo && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.contactInfo}
                    </p>
                  )}
                </div>

                {/* Product Interested In Dropdown */}
                <div>
                  <label htmlFor="product" className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                    {c.productLabel}
                  </label>
                  <div className="relative">
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B1F3A] border border-[#174EA6]/50 text-base sm:text-sm text-white focus:outline-none focus:border-[#FFCC00] focus:ring-1 focus:ring-[#FFCC00] transition-all min-h-[48px] appearance-none cursor-pointer pr-10 font-medium"
                    >
                      <option value="whole" className="bg-[#0B1F3A] text-white">{c.productWhole}</option>
                      <option value="crushed" className="bg-[#0B1F3A] text-white">{c.productCrushed}</option>
                      <option value="both" className="bg-[#0B1F3A] text-white">{c.productBoth}</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-400">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Target Quantity Field */}
                <div>
                  <label htmlFor="quantity" className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                    {c.quantityLabel}
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder={c.quantityPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B1F3A] border border-[#174EA6]/50 text-base sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#FFCC00] focus:ring-1 focus:ring-[#FFCC00] transition-all min-h-[48px]"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                    {c.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={c.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B1F3A] border border-[#174EA6]/50 text-base sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#FFCC00] focus:ring-1 focus:ring-[#FFCC00] transition-all"
                  />
                </div>

                {/* Two Action Buttons on Mobile: Yellow Submit + Direct WhatsApp */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#FFCC00] hover:bg-[#FFE043] active:bg-[#E5BD00] text-[#081426] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all cursor-pointer min-h-[48px]"
                  >
                    <Send className="w-4 h-4 shrink-0" />
                    <span>{c.submitBtn}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-[#0B1F3A] hover:bg-[#122A4E] border border-[#174EA6] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer min-h-[48px]"
                  >
                    <MessageSquare className="w-4 h-4 text-[#FFCC00] shrink-0" />
                    <span>{c.whatsappSubmitBtn}</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-center pt-1">
                  {c.formNote}
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>

      {/* Inquiry Summary Modal */}
      {showSummaryModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#081426] border border-[#174EA6]/60 rounded-2xl max-w-lg w-full p-6 shadow-2xl text-white animate-in fade-in duration-200">
            <div className="border-b border-slate-800 pb-3 mb-4">
              <h4 className="font-display text-lg font-bold text-white">
                {c.modalTitle}
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                {c.modalSubtitle}
              </p>
            </div>

            <pre className="bg-[#0B1F3A] p-4 rounded-xl text-xs font-mono text-slate-200 whitespace-pre-wrap leading-relaxed border border-[#174EA6]/30 mb-5 max-h-56 overflow-y-auto">
              {generateInquiryText()}
            </pre>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#FFCC00] active:bg-[#E5BD00] text-[#081426] font-bold text-xs uppercase tracking-wider shadow-sm min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{c.modalWhatsAppBtn}</span>
              </button>

              <button
                type="button"
                onClick={copyInquirySummary}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0B1F3A] border border-[#174EA6]/60 text-white font-bold text-xs uppercase tracking-wider min-h-[44px]"
              >
                <Copy className="w-4 h-4" />
                <span>{copiedSummary ? c.modalCopied : c.modalCopyBtn}</span>
              </button>

              <button
                type="button"
                onClick={() => setShowSummaryModal(false)}
                className="inline-flex items-center justify-center py-3 px-4 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-bold uppercase tracking-wider min-h-[44px]"
              >
                {c.modalCloseBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
