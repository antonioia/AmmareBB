
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
          ADRIATICA <span className="font-light italic serif">Soul</span>
        </a>
        
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#features" className={`hover:text-blue-500 transition-colors ${isScrolled ? 'text-stone-600' : 'text-stone-100'}`}>The Experience</a>
          <a href="#testimonials" className={`hover:text-blue-500 transition-colors ${isScrolled ? 'text-stone-600' : 'text-stone-100'}`}>Reviews</a>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-transform active:scale-95 shadow-lg shadow-blue-500/30">
            Book Your Stay
          </button>
        </div>

        {/* Mobile Mini-CTA */}
        <div className="md:hidden">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
