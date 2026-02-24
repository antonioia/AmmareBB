import React, { useState, useEffect, useCallback } from 'react';
import './SeasidePictures.css';

const items = [
    {
        subtitle: 'The grand moment',
        title: 'Le tour',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
        linkText: 'Explore the tour',
    },
    {
        subtitle: 'The big window',
        title: 'Minimal window',
        description: 'Clear Glass Window With Brown and White Wooden Frame iste natus error sit voluptatem accusantium doloremque laudantium.',
        linkText: 'Read the article',
    },
    {
        subtitle: 'Tropical palms',
        title: 'Palms',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
        linkText: 'Explore the palms',
    },
    {
        subtitle: 'Beach',
        title: 'The beach',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
        linkText: 'Explore the beach',
    },
    {
        subtitle: 'The white building',
        title: 'White building',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
        linkText: 'Read the article',
    }
];

const SeasidePictures: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    }, []);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    }, []);

    // Auto-advance every 3 seconds
    useEffect(() => {
        const timer = setInterval(handleNext, 3000);
        return () => clearInterval(timer);
    }, [handleNext]);

    return (
        <section className="seaside-carousel-wrapper w-full flex justify-center items-center py-10 bg-[#eaeaea]">
            <div className="carousel">
                {/* Left Arrow — centered vertically on the left */}
                <button
                    className="carousel__arrow carousel__arrow--left"
                    onClick={handlePrev}
                    aria-label="Previous slide"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>

                {/* Right Arrow — centered vertically on the right */}
                <button
                    className="carousel__arrow carousel__arrow--right"
                    onClick={handleNext}
                    aria-label="Next slide"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>

                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`carousel-item carousel-item--${index + 1} ${index === currentIndex ? 'active' : ''}`}
                    >
                        <div className="carousel-item__image"></div>
                        <div className="carousel-item__info">
                            <div className="carousel-item__container">
                                <h2 className="carousel-item__subtitle">{item.subtitle}</h2>
                                <h1 className="carousel-item__title">{item.title}</h1>
                                <p className="carousel-item__description">{item.description}</p>
                                <a href="#" className="carousel-item__btn" onClick={(e) => e.preventDefault()}>
                                    {item.linkText}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SeasidePictures;
