import React from 'react';
import { useTranslation } from 'react-i18next';
import './RoomDetail.css';

interface RoomDetailProps {
    roomId: 'sand' | 'sea';
}

const roomData = {
    sand: {
        image: '/images/room-sand.png',
        accentColor: 'amber',
        gradientFrom: 'from-amber-50',
        gradientTo: 'to-orange-50',
        accentBg: 'bg-amber-500',
        accentText: 'text-amber-600',
        accentHover: 'hover:bg-amber-600',
        accentBorder: 'border-amber-200',
        accentLight: 'bg-amber-50',
        buttonShadow: 'shadow-amber-500/20',
        galleryImages: [
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop',
        ],
    },
    sea: {
        image: '/images/room-sea.png',
        accentColor: 'sky',
        gradientFrom: 'from-sky-50',
        gradientTo: 'to-blue-50',
        accentBg: 'bg-sky-500',
        accentText: 'text-sky-600',
        accentHover: 'hover:bg-sky-600',
        accentBorder: 'border-sky-200',
        accentLight: 'bg-sky-50',
        buttonShadow: 'shadow-sky-500/20',
        galleryImages: [
            'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop',
        ],
    },
};

const amenityIcons = {
    wifi: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
        </svg>
    ),
    ac: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636" />
        </svg>
    ),
    seaview: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    ),
    minibar: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
    ),
    towels: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
        </svg>
    ),
    breakfast: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.126-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265z" />
        </svg>
    ),
};

const RoomDetail: React.FC<RoomDetailProps> = ({ roomId }) => {
    const { t } = useTranslation();
    const room = roomData[roomId];
    const themeClass = roomId; // 'sand' or 'sea'

    const amenities = [
        { key: 'wifi', icon: amenityIcons.wifi },
        { key: 'ac', icon: amenityIcons.ac },
        { key: 'seaview', icon: amenityIcons.seaview },
        { key: 'minibar', icon: amenityIcons.minibar },
        { key: 'towels', icon: amenityIcons.towels },
        { key: 'breakfast', icon: amenityIcons.breakfast },
    ];

    return (
        <div className="min-h-screen bg-stone-50">
            {/* Hero Banner */}
            <section className="room-hero">
                <img
                    src={room.image}
                    alt={t(`rooms.${roomId}.name`)}
                    className="room-hero__image"
                />
                <div className={`room-hero__overlay room-hero__overlay--${themeClass}`}>
                    <div className="container mx-auto max-w-6xl room-animate-in">
                        <a
                            href="#/"
                            className="room-back-link text-white/80 hover:text-white mb-6 inline-flex"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                            {t('rooms.backHome')}
                        </a>
                        <p className="text-white/70 uppercase tracking-[0.3em] text-sm font-medium mb-3">
                            {t(`rooms.${roomId}.tagline`)}
                        </p>
                        <h1 className="text-5xl md:text-7xl text-white serif italic font-medium drop-shadow-2xl">
                            {t(`rooms.${roomId}.name`)}
                        </h1>
                    </div>
                </div>
            </section>

            {/* Room Overview */}
            <section className={`py-20 bg-gradient-to-b ${room.gradientFrom} ${room.gradientTo} room-animate-in--delay-1`}>
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="room-animate-in room-animate-in--delay-2">
                            <h2 className="text-3xl md:text-4xl serif italic text-stone-900 mb-6">
                                {t(`rooms.${roomId}.headline`)}
                            </h2>
                            <p className="text-stone-600 text-lg leading-relaxed mb-8">
                                {t(`rooms.${roomId}.description`)}
                            </p>
                            <div className="flex gap-6">
                                <div className={`room-detail-card room-detail-card--${themeClass} flex-1`}>
                                    <p className={`text-3xl font-bold ${room.accentText}`}>
                                        {roomId === 'sand' ? '28' : '32'}
                                    </p>
                                    <p className="text-stone-500 text-sm mt-1">{t('rooms.sqm')}</p>
                                </div>
                                <div className={`room-detail-card room-detail-card--${themeClass} flex-1`}>
                                    <p className={`text-3xl font-bold ${room.accentText}`}>2</p>
                                    <p className="text-stone-500 text-sm mt-1">{t('rooms.guests')}</p>
                                </div>
                                <div className={`room-detail-card room-detail-card--${themeClass} flex-1`}>
                                    <p className={`text-3xl font-bold ${room.accentText}`}>1</p>
                                    <p className="text-stone-500 text-sm mt-1">{t('rooms.bathroom')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Gallery */}
                        <div className="room-gallery room-animate-in room-animate-in--delay-3">
                            {room.galleryImages.map((img, idx) => (
                                <div key={idx} className="room-gallery__item shadow-lg">
                                    <img src={img} alt={`${t(`rooms.${roomId}.name`)} - ${idx + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Amenities */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-14 room-animate-in">
                        <h2 className="text-3xl md:text-4xl serif italic text-stone-900 mb-3">
                            {t('rooms.amenitiesTitle')}
                        </h2>
                        <div className={`h-1 w-16 ${room.accentBg} mx-auto rounded-full`}></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {amenities.map((amenity, idx) => (
                            <div
                                key={amenity.key}
                                className={`amenity-card amenity-card--${themeClass} room-animate-in`}
                                style={{ animationDelay: `${idx * 0.08}s` }}
                            >
                                <div className={`amenity-icon amenity-icon--${themeClass}`}>
                                    {amenity.icon}
                                </div>
                                <div>
                                    <p className="font-semibold text-stone-800">
                                        {t(`rooms.amenities.${amenity.key}`)}
                                    </p>
                                    <p className="text-stone-500 text-sm">
                                        {t(`rooms.amenities.${amenity.key}Desc`)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={`py-20 bg-gradient-to-br ${room.gradientFrom} ${room.gradientTo}`}>
                <div className="container mx-auto px-6 max-w-3xl text-center room-animate-in">
                    <h2 className="text-3xl md:text-5xl serif italic text-stone-900 mb-6">
                        {t(`rooms.${roomId}.ctaTitle`)}
                    </h2>
                    <p className="text-stone-600 text-lg mb-10 max-w-xl mx-auto">
                        {t(`rooms.${roomId}.ctaDescription`)}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`https://wa.me/393404163715?text=${encodeURIComponent(`Ciao, vorrei prenotare la stanza ${t(`rooms.${roomId}.name`)} presso Ammare Rooms!`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${room.accentBg} ${room.accentHover} text-white px-10 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-xl ${room.buttonShadow} inline-block`}
                        >
                            {t('rooms.bookThis')}
                        </a>
                        <a
                            href={`#/room/${roomId === 'sand' ? 'sea' : 'sand'}`}
                            className="px-10 py-4 rounded-full text-lg font-medium border-2 border-stone-300 text-stone-700 hover:bg-stone-100 transition-all"
                        >
                            {t('rooms.viewOther')}{' '}
                            <span className="italic serif">
                                {t(`rooms.${roomId === 'sand' ? 'sea' : 'sand'}.name`)}
                            </span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RoomDetail;
