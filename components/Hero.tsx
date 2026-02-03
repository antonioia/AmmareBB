
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070&auto=format&fit=crop" 
          alt="Adriatic Coast" 
          className="w-full h-full object-cover scale-105 animate-[ken-burns_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-transparent to-stone-900/60"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl">
          Wake up to the <br />
          <span className="italic serif">Adriatic Soul</span>
        </h1>
        <p className="text-lg md:text-2xl text-stone-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Experience an intimate seaside escape where the turquoise horizon meets artisan Italian comfort. Your private balcony over the Mediterranean awaits.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-900 hover:bg-stone-100 px-10 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-xl">
            Check Availability
          </button>
          <button className="bg-transparent border-2 border-white/80 text-white hover:bg-white/10 px-10 py-4 rounded-full text-lg font-medium transition-all">
            Explore Rooms
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
