import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const isActive = (lng: string) => i18n.language === lng;

    return (
        <div className="flex items-center space-x-2">
            <button
                onClick={() => changeLanguage('it')}
                className={`w-6 h-6 rounded-full overflow-hidden border transition-all ${isActive('it') ? 'border-accent scale-110 shadow-md' : 'border-transparent opacity-70 hover:opacity-100 hover:scale-105'}`}
                aria-label="Italiano"
            >
                <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
                    <g fillRule="evenodd">
                        <path fill="#fff" d="M0 0h640v480H0z" />
                        <path fill="#009246" d="M0 0h213.3v480H0z" />
                        <path fill="#ce2b37" d="M426.7 0H640v480H426.7z" />
                    </g>
                </svg>
            </button>

            <button
                onClick={() => changeLanguage('en')}
                className={`w-6 h-6 rounded-full overflow-hidden border transition-all ${isActive('en') ? 'border-accent scale-110 shadow-md' : 'border-transparent opacity-70 hover:opacity-100 hover:scale-105'}`}
                aria-label="English"
            >
                <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
                    <path fill="#012169" d="M0 0h640v480H0z" />
                    <path fill="#FFF" d="M75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-179L0 62V0h75z" />
                    <path fill="#C8102E" d="M424 281l216 159v40L369 281h55zm-118-80l41-26 293 219v20L306 201zm-306-20l334 249-39 24L0 205v-24zm0-61L252 281l-40 24L0 120v24zm0-96l245 182 39-24L0 0v24zM0 0l221 165L5 0H0z" />
                    <path fill="#FFF" d="M250 0h140v480H250zM0 170h640v140H0z" />
                    <path fill="#C8102E" d="M280 0h80v480h-80zM0 200h640v80H0z" />
                </svg>
            </button>

            <button
                onClick={() => changeLanguage('fr')}
                className={`w-6 h-6 rounded-full overflow-hidden border transition-all ${isActive('fr') ? 'border-accent scale-110 shadow-md' : 'border-transparent opacity-70 hover:opacity-100 hover:scale-105'}`}
                aria-label="Français"
            >
                <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
                    <g fillRule="evenodd">
                        <path fill="#fff" d="M0 0h640v480H0z" />
                        <path fill="#002395" d="M0 0h213.3v480H0z" />
                        <path fill="#ed2939" d="M426.7 0H640v480H426.7z" />
                    </g>
                </svg>
            </button>

            <button
                onClick={() => changeLanguage('de')}
                className={`w-6 h-6 rounded-full overflow-hidden border transition-all ${isActive('de') ? 'border-accent scale-110 shadow-md' : 'border-transparent opacity-70 hover:opacity-100 hover:scale-105'}`}
                aria-label="Deutsch"
            >
                <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
                    <g fillRule="evenodd">
                        <path fill="#ffe936" d="M0 320h640v160H0z" />
                        <path fill="#ff0000" d="M0 160h640v160H0z" />
                        <path fill="#000000" d="M0 0h640v160H0z" />
                    </g>
                </svg>
            </button>
        </div>
    );
};

export default LanguageSwitcher;
