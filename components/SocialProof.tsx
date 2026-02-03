
import React, { useState } from 'react';

const testimonials = [
  {
    name: "Elena Rossi",
    location: "Milan, Italy",
    content: "An absolute dream. Waking up to the sound of the Adriatic and the smell of fresh coffee on the terrace was the highlight of our summer.",
    rating: 5
  },
  {
    name: "James Whitaker",
    location: "London, UK",
    content: "The level of hospitality is unmatched. It feels like staying with family, if your family lived in a luxury villa with a private cove.",
    rating: 5
  },
  {
    name: "Sophie Dupont",
    location: "Paris, France",
    content: "Modern, clean, and perfectly situated. The AI concierge helped us find the most incredible hidden seafood spot in Polignano.",
    rating: 5
  }
];

const SocialProof: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="py-24 bg-stone-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl text-center mb-16 serif italic">Glimpses from our Guests</h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${active * 100}%)` }}>
            {testimonials.map((t, i) => (
              <div key={i} className="w-full flex-shrink-0 px-4">
                <div className="bg-white p-10 md:p-16 rounded-3xl shadow-xl text-center relative">
                  <div className="text-blue-500 mb-8 flex justify-center space-x-1">
                    {[...Array(t.rating)].map((_, j) => (
                      <svg key={j} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl italic text-stone-700 mb-10 leading-relaxed font-light">
                    "{t.content}"
                  </p>
                  <div>
                    <p className="font-bold text-lg text-stone-900">{t.name}</p>
                    <p className="text-stone-500 uppercase tracking-widest text-xs mt-1">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${active === i ? 'bg-blue-600 w-8' : 'bg-stone-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
