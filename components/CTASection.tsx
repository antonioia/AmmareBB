import React from 'react';
import { useTranslation } from 'react-i18next';

const CTASection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
          alt="Beach"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
        <h2 className="text-4xl md:text-6xl mb-8 serif italic font-medium">{t('cta.title')}</h2>
        <p className="text-xl text-blue-100 mb-12 font-light">
          {t('cta.description')}
        </p>
        <div className="inline-flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/393404163715?text=Ciao%2C%20vorrei%20prenotare%20una%20stanza%20presso%20Ammare%20Rooms!" target="_blank" rel="noopener noreferrer" className="bg-accent text-white hover:bg-yellow-600 px-12 py-5 rounded-full text-xl font-bold transition-transform hover:scale-105 shadow-2xl shadow-accent/20 inline-block">
            {t('cta.book')}
          </a>
          <a href="tel:+3900000000" className="px-12 py-5 rounded-full text-xl font-medium border border-white/30 hover:bg-white/10 backdrop-blur-sm transition-colors">
            {t('cta.contact')}
          </a>
        </div>
        <p className="mt-8 text-blue-300 text-sm tracking-wide font-light">
          {t('cta.cancel')}
        </p>
      </div>
    </section>
  );
};

export default CTASection;
