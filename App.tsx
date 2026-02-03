
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import CTASection from './components/CTASection';
import ConciergeChat from './components/ConciergeChat';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <main>
        {/* Pattern: Hero -> Features -> Social Proof -> CTA */}
        <Hero />
        
        <Features />
        
        <SocialProof />
        
        <CTASection />
      </main>

      <footer className="bg-stone-900 text-stone-400 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-stone-800 pb-8 mb-8">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-white tracking-tighter">
                ADRIATICA <span className="font-light italic serif">Soul</span>
              </h2>
              <p className="text-sm mt-2">Boutique B&B, Polignano a Mare, Italy</p>
            </div>
            <div className="flex space-x-8 text-sm uppercase tracking-widest font-medium">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">Email</a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
            <p>&copy; {new Date().getFullYear()} Adriatica Soul. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating AI Concierge */}
      <ConciergeChat />
    </div>
  );
};

export default App;
