
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SeasidePictures from './components/SeasidePictures';
import SocialProof from './components/SocialProof';
import SectionDivider from './components/SectionDivider';
import CTASection from './components/CTASection';

import RoomDetail from './components/RoomDetail';

type Route = { page: 'home' } | { page: 'room'; roomId: 'sand' | 'sea' };

function parseHash(hash: string): Route {
  const clean = hash.replace(/^#\/?/, '');
  if (clean === 'room/sand') return { page: 'room', roomId: 'sand' };
  if (clean === 'room/sea') return { page: 'room', roomId: 'sea' };
  return { page: 'home' };
}

function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash));

  useEffect(() => {
    const handleHash = () => {
      setRoute(parseHash(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return route;
}

const App: React.FC = () => {
  const route = useRoute();
  const { i18n } = useTranslation();

  // Sync HTML lang attribute with current language for SEO & accessibility
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="relative min-h-screen">
      <Navbar />

      {route.page === 'home' ? (
        <main>
          {/* Pattern: Hero -> Features -> Social Proof -> CTA */}
          <Hero />

          <Features />

          <SeasidePictures />

          <SectionDivider />

          <SocialProof />

          <CTASection />
        </main>
      ) : (
        <main>
          <RoomDetail roomId={route.roomId} />
        </main>
      )}

      <footer className="bg-stone-900 text-stone-400 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-stone-800 pb-8 mb-8">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-white tracking-tighter">
                AMMARE <span className="font-light italic serif">Rooms</span>
              </h2>
              <p className="text-sm mt-2">Boutique B&B, Termoli, Italy</p>
            </div>
            <div className="flex space-x-8 text-sm uppercase tracking-widest font-medium">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">Email</a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
            <p>&copy; {new Date().getFullYear()} Ammare Rooms. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
