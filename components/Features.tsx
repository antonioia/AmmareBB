
import React from 'react';
import { useTranslation } from 'react-i18next';

const features = [
  {
    title: "Direct Sea Access",
    description: "Tucked into the limestone cliffs, we offer private access to crystal clear coves. No crowds, just the sound of the waves.",
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Organic Adriatic Breakfast",
    description: "Wake up to freshly baked focaccia, local Puglia honey, and seasonal fruits picked from our own cliffside gardens.",
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 0A9 9 0 115.636 5.636a9 9 0 0112.728 12.728z" />
      </svg>
    )
  },
  {
    title: "Modern Minimalist Design",
    description: "Each suite is a blend of traditional Italian limestone and high-end contemporary comfort. Elegance in every detail.",
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  }
];

const Features: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-stone-900 mb-4">Why Ammare Rooms?</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-stone-50 border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-2xl transition-all duration-300">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl text-stone-900 mb-4">{feature.title}</h3>
              <p className="text-stone-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Room Teaser Cards */}
        <div id="rooms" className="mt-24 scroll-mt-24">
          <h3 className="text-3xl md:text-4xl text-center serif italic text-stone-900 mb-12">
            {t('nav.rooms')}
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Sand Room Card */}
            <a
              href="#/room/sand"
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer block"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/room-sand.png"
                  alt={t('rooms.sand.name')}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-800/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-amber-200 uppercase tracking-[0.2em] text-xs font-medium mb-2">
                  {t('rooms.sand.tagline')}
                </p>
                <h4 className="text-3xl text-white serif italic font-medium mb-2">
                  {t('rooms.sand.name')}
                </h4>
                <span className="inline-flex items-center gap-2 text-amber-200 text-sm font-medium group-hover:gap-3 transition-all">
                  {t('hero.explore')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Sea Room Card */}
            <a
              href="#/room/sea"
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer block"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/room-sea.png"
                  alt={t('rooms.sea.name')}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-800/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-sky-200 uppercase tracking-[0.2em] text-xs font-medium mb-2">
                  {t('rooms.sea.tagline')}
                </p>
                <h4 className="text-3xl text-white serif italic font-medium mb-2">
                  {t('rooms.sea.name')}
                </h4>
                <span className="inline-flex items-center gap-2 text-sky-200 text-sm font-medium group-hover:gap-3 transition-all">
                  {t('hero.explore')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
