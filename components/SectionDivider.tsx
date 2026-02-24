import React from 'react';

const SectionDivider: React.FC = () => {
    return (
        <section className="py-20 bg-stone-50 text-center px-6">
            <div className="max-w-3xl mx-auto">
                <hr className="w-24 h-1 mx-auto my-8 bg-blue-900 border-0 rounded" />
                <h3 className="text-3xl md:text-4xl font-light text-stone-800 leading-relaxed serif italic">
                    "The sea, once it casts its spell, holds one in its net of wonder forever."
                </h3>
                <p className="mt-4 text-stone-500 uppercase tracking-widest text-sm">— Jacques Yves Cousteau</p>
            </div>
        </section>
    );
};

export default SectionDivider;
