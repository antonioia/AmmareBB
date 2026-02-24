import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070&auto=format&fit=crop"
          alt="Adriatic Coast"
          className="w-full h-full object-cover scale-105 animate-[ken-burns_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/80"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl text-shadow">
          {t('hero.title')} <br />
          <span className="italic serif font-medium">{t('hero.subtitle')}</span>
        </h1>
        <p className="text-lg md:text-2xl text-stone-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
          {t('hero.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/393404163715?text=Ciao%2C%20vorrei%20prenotare%20una%20stanza%20presso%20Ammare%20Rooms!" target="_blank" rel="noopener noreferrer" className="bg-accent text-white hover:bg-yellow-600 px-10 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-xl shadow-accent/20">
            {t('hero.check')}
          </a>
          <button
            onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/30 px-10 py-4 rounded-full text-lg font-medium transition-all shadow-lg cursor-pointer"
          >
            {t('hero.explore')}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes ken-burns {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
