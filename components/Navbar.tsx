import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showRooms, setShowRooms] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if we're on a room page (force solid navbar)
  const isRoomPage = window.location.hash.startsWith('#/room/');
  const solidNav = isScrolled || isRoomPage;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ease-out ${solidNav ? 'bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#/" className={`text-2xl font-bold transition-colors ${solidNav ? 'text-primary' : 'text-white drop-shadow-md'}`}>
          AMMARE <span className="font-serif italic font-normal">Rooms</span>
        </a>

        <div className="hidden md:flex space-x-8 items-center">
          <a href="#features" className={`hover:text-secondary transition-colors font-sans tracking-wide ${solidNav ? 'text-stone-600' : 'text-stone-100 drop-shadow-sm'}`}>{t('nav.experience')}</a>

          {/* Rooms Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowRooms(true)}
            onMouseLeave={() => setShowRooms(false)}
          >
            <button className={`hover:text-secondary transition-colors font-sans tracking-wide cursor-pointer inline-flex items-center gap-1 ${solidNav ? 'text-stone-600' : 'text-stone-100 drop-shadow-sm'}`}>
              {t('nav.rooms')}
              <svg className={`w-4 h-4 transition-transform ${showRooms ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {showRooms && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 pt-3 z-50">
                <div className="bg-white rounded-xl shadow-2xl border border-stone-100 overflow-hidden py-2">
                  <a
                    href="#/room/sand"
                    className="flex items-center gap-3 px-5 py-3 hover:bg-amber-50 transition-colors group"
                  >
                    <span className="w-3 h-3 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 shadow-sm"></span>
                    <span className="text-stone-700 group-hover:text-amber-700 font-medium">{t('rooms.sand.name')}</span>
                  </a>
                  <a
                    href="#/room/sea"
                    className="flex items-center gap-3 px-5 py-3 hover:bg-sky-50 transition-colors group"
                  >
                    <span className="w-3 h-3 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 shadow-sm"></span>
                    <span className="text-stone-700 group-hover:text-sky-700 font-medium">{t('rooms.sea.name')}</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          <a href="#testimonials" className={`hover:text-secondary transition-colors font-sans tracking-wide ${solidNav ? 'text-stone-600' : 'text-stone-100 drop-shadow-sm'}`}>{t('nav.reviews')}</a>
          <a href="https://wa.me/393404163715?text=Ciao%2C%20vorrei%20prenotare%20una%20stanza%20presso%20Ammare%20Rooms!" target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-yellow-600 text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-accent/30">
            {t('nav.book')}
          </a>
          <div className="pl-4 border-l border-white/20">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Mini-CTA */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <a href="https://wa.me/393404163715?text=Ciao%2C%20vorrei%20prenotare%20una%20stanza%20presso%20Ammare%20Rooms!" target="_blank" rel="noopener noreferrer" className="bg-accent text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-600 transition-colors shadow-md">
            {t('nav.book')}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
