
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop" 
          alt="Beach" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
        <h2 className="text-4xl md:text-6xl mb-8 serif italic">Ready for your Adriatic escape?</h2>
        <p className="text-xl text-blue-100 mb-12 font-light">
          Rooms for this season are filling up fast. Secure your slice of seaside paradise today and start counting down the days.
        </p>
        <div className="inline-flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-blue-900 hover:bg-stone-100 px-12 py-5 rounded-full text-xl font-bold transition-transform hover:scale-105 shadow-2xl">
            Book My Room Now
          </button>
          <a href="tel:+3900000000" className="px-12 py-5 rounded-full text-xl font-medium border border-white/30 hover:bg-white/10 transition-colors">
            Contact Concierge
          </a>
        </div>
        <p className="mt-8 text-blue-300 text-sm tracking-wide font-light">
          * Free cancellation up to 48 hours before arrival
        </p>
      </div>
    </section>
  );
};

export default CTASection;
