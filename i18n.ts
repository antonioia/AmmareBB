
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const rooms = {
    it: {
        backHome: "Torna alla Home",
        sqm: "Metri quadri",
        guests: "Ospiti",
        bathroom: "Bagno privato",
        amenitiesTitle: "Comfort & Servizi",
        bookThis: "Prenota Questa Stanza",
        viewOther: "Scopri la stanza",
        navRooms: "Le Stanze",
        sand: {
            name: "Sabbia",
            tagline: "Calore e Relax",
            headline: "Dove il sole incontra il comfort",
            description: "La Suite Sabbia avvolge i suoi ospiti in tonalità calde di ambra e oro, ispirate alle dorate spiagge adriatiche. Pareti in pietra calcarea, tessuti naturali e una luce soffusa creano un rifugio intimo dove il tempo rallenta. Svegliatevi con i raggi del sole che filtrano attraverso le tende leggere e godetevi la colazione sul vostro balcone privato.",
            ctaTitle: "La vostra fuga dorata vi attende",
            ctaDescription: "Prenotate la Suite Sabbia e lasciatevi cullare dal calore del Mediterraneo."
        },
        sea: {
            name: "Mare",
            tagline: "Brezza e Serenità",
            headline: "L'infinito blu a portata di mano",
            description: "La Suite Mare cattura l'essenza dell'Adriatico con le sue tonalità di blu e turchese. Ogni dettaglio, dalle lenzuola di lino agli accenti decorativi, richiama il colore del mare. Dalle ampie finestre si gode una vista mozzafiato sulla costa, mentre la brezza marina vi accompagna in un sonno ristoratore.",
            ctaTitle: "Tuffatevi nella serenità",
            ctaDescription: "Prenotate la Suite Mare e svegliatevi ogni mattina con il blu dell'orizzonte."
        },
        amenities: {
            wifi: "Wi-Fi Alta Velocità",
            wifiDesc: "Connessione fibra in tutta la struttura",
            ac: "Climatizzazione",
            acDesc: "Controllo temperatura individuale",
            seaview: "Vista Mare",
            seaviewDesc: "Panorama mozzafiato sull'Adriatico",
            minibar: "Minibar Premium",
            minibarDesc: "Prodotti locali selezionati",
            towels: "Set Cortesia",
            towelsDesc: "Asciugamani e prodotti biologici",
            breakfast: "Colazione Inclusa",
            breakfastDesc: "Prodotti freschi del territorio"
        }
    },
    en: {
        backHome: "Back to Home",
        sqm: "Square meters",
        guests: "Guests",
        bathroom: "Private bath",
        amenitiesTitle: "Amenities & Comforts",
        bookThis: "Book This Room",
        viewOther: "Explore the",
        navRooms: "Rooms",
        sand: {
            name: "Sand",
            tagline: "Warmth & Relaxation",
            headline: "Where sunlight meets comfort",
            description: "The Sand Suite wraps its guests in warm tones of amber and gold, inspired by the golden Adriatic shores. Limestone walls, natural fabrics, and soft lighting create an intimate retreat where time slows down. Wake up to sun rays filtering through sheer curtains and enjoy breakfast on your private balcony.",
            ctaTitle: "Your golden escape awaits",
            ctaDescription: "Book the Sand Suite and let the warmth of the Mediterranean embrace you."
        },
        sea: {
            name: "Sea",
            tagline: "Breeze & Serenity",
            headline: "The infinite blue at your fingertips",
            description: "The Sea Suite captures the essence of the Adriatic with its shades of blue and teal. Every detail, from the linen sheets to the decorative accents, echoes the color of the sea. Large windows frame a breathtaking coastal panorama, while the sea breeze lulls you into restorative sleep.",
            ctaTitle: "Dive into serenity",
            ctaDescription: "Book the Sea Suite and wake up every morning to the blue of the horizon."
        },
        amenities: {
            wifi: "High-Speed Wi-Fi",
            wifiDesc: "Fiber connection throughout the property",
            ac: "Air Conditioning",
            acDesc: "Individual temperature control",
            seaview: "Sea View",
            seaviewDesc: "Breathtaking Adriatic panorama",
            minibar: "Premium Minibar",
            minibarDesc: "Curated local products",
            towels: "Luxury Amenities",
            towelsDesc: "Organic towels and toiletries",
            breakfast: "Breakfast Included",
            breakfastDesc: "Fresh local produce daily"
        }
    },
    fr: {
        backHome: "Retour à l'accueil",
        sqm: "Mètres carrés",
        guests: "Invités",
        bathroom: "Salle de bain privée",
        amenitiesTitle: "Équipements & Conforts",
        bookThis: "Réserver Cette Chambre",
        viewOther: "Découvrir la chambre",
        navRooms: "Chambres",
        sand: {
            name: "Sable",
            tagline: "Chaleur & Détente",
            headline: "Où la lumière rencontre le confort",
            description: "La Suite Sable enveloppe ses hôtes de tons chauds d'ambre et d'or, inspirés des rivages dorés de l'Adriatique. Murs en pierre calcaire, tissus naturels et éclairage tamisé créent un refuge intime où le temps ralentit. Réveillez-vous aux rayons du soleil filtrant à travers les rideaux et savourez le petit-déjeuner sur votre balcon privé.",
            ctaTitle: "Votre échappée dorée vous attend",
            ctaDescription: "Réservez la Suite Sable et laissez-vous envelopper par la chaleur méditerranéenne."
        },
        sea: {
            name: "Mer",
            tagline: "Brise & Sérénité",
            headline: "L'infini bleu à portée de main",
            description: "La Suite Mer capture l'essence de l'Adriatique avec ses nuances de bleu et de turquoise. Chaque détail, des draps en lin aux accents décoratifs, évoque la couleur de la mer. De grandes fenêtres offrent un panorama côtier à couper le souffle, tandis que la brise marine vous berce dans un sommeil réparateur.",
            ctaTitle: "Plongez dans la sérénité",
            ctaDescription: "Réservez la Suite Mer et réveillez-vous chaque matin face au bleu de l'horizon."
        },
        amenities: {
            wifi: "Wi-Fi Haut Débit",
            wifiDesc: "Connexion fibre dans tout l'établissement",
            ac: "Climatisation",
            acDesc: "Contrôle individuel de la température",
            seaview: "Vue sur la Mer",
            seaviewDesc: "Panorama époustouflant sur l'Adriatique",
            minibar: "Minibar Premium",
            minibarDesc: "Produits locaux sélectionnés",
            towels: "Équipements de Luxe",
            towelsDesc: "Serviettes et produits biologiques",
            breakfast: "Petit-déjeuner Inclus",
            breakfastDesc: "Produits frais du terroir"
        }
    },
    de: {
        backHome: "Zurück zur Startseite",
        sqm: "Quadratmeter",
        guests: "Gäste",
        bathroom: "Privates Bad",
        amenitiesTitle: "Ausstattung & Komfort",
        bookThis: "Dieses Zimmer Buchen",
        viewOther: "Entdecken Sie das Zimmer",
        navRooms: "Zimmer",
        sand: {
            name: "Sand",
            tagline: "Wärme & Entspannung",
            headline: "Wo Sonnenlicht auf Komfort trifft",
            description: "Die Sand Suite hüllt ihre Gäste in warme Bernstein- und Goldtöne, inspiriert von den goldenen Stränden der Adria. Kalksteinwände, natürliche Stoffe und sanftes Licht schaffen einen intimen Rückzugsort, an dem die Zeit stillsteht. Erwachen Sie mit Sonnenstrahlen, die durch die Vorhänge fallen, und genießen Sie das Frühstück auf Ihrem privaten Balkon.",
            ctaTitle: "Ihre goldene Auszeit erwartet Sie",
            ctaDescription: "Buchen Sie die Sand Suite und lassen Sie sich von der Wärme des Mittelmeers umarmen."
        },
        sea: {
            name: "Meer",
            tagline: "Brise & Gelassenheit",
            headline: "Das unendliche Blau zum Greifen nah",
            description: "Die Meer Suite fängt die Essenz der Adria mit ihren Blau- und Türkistönen ein. Jedes Detail, von den Leinenlaken bis zu den dekorativen Akzenten, spiegelt die Farbe des Meeres wider. Große Fenster rahmen ein atemberaubendes Küstenpanorama, während die Meeresbrise Sie in einen erholsamen Schlaf wiegt.",
            ctaTitle: "Tauchen Sie ein in Gelassenheit",
            ctaDescription: "Buchen Sie die Meer Suite und erwachen Sie jeden Morgen mit dem Blau des Horizonts."
        },
        amenities: {
            wifi: "Highspeed-WLAN",
            wifiDesc: "Glasfaserverbindung im gesamten Haus",
            ac: "Klimaanlage",
            acDesc: "Individuelle Temperaturregelung",
            seaview: "Meerblick",
            seaviewDesc: "Atemberaubendes Adriapanorama",
            minibar: "Premium Minibar",
            minibarDesc: "Ausgewählte lokale Produkte",
            towels: "Luxus-Ausstattung",
            towelsDesc: "Biologische Handtücher und Pflegeprodukte",
            breakfast: "Frühstück Inklusive",
            breakfastDesc: "Täglich frische lokale Produkte"
        }
    }
};

const resources = {
    it: {
        translation: {
            "nav": {
                "experience": "L'Esperienza",
                "reviews": "Recensioni",
                "book": "Prenota",
                "rooms": "Le Stanze"
            },
            "hero": {
                "title": "Risvegliati con l'",
                "subtitle": "Ammare Rooms",
                "description": "Vivi un'intima fuga sul mare dove l'orizzonte turchese incontra il comfort artigianale italiano. Il tuo balcone privato sul Mediterraneo ti aspetta.",
                "check": "Verifica Disponibilità",
                "explore": "Esplora le Stanze"
            },
            "cta": {
                "title": "Pronto per la tua fuga al mare?",
                "description": "Le stanze per questa stagione si stanno riempiendo velocemente. Assicurati il tuo angolo di paradiso oggi stesso.",
                "book": "Prenota Ora",
                "contact": "Contatta Concierge",
                "cancel": "* Cancellazione gratuita fino a 48 ore prima dell'arrivo"
            },
            "rooms": rooms.it
        }
    },
    en: {
        translation: {
            "nav": {
                "experience": "The Experience",
                "reviews": "Reviews",
                "book": "Book Your Stay",
                "rooms": "Rooms"
            },
            "hero": {
                "title": "Wake up to the",
                "subtitle": "Ammare Rooms",
                "description": "Experience an intimate seaside escape where the turquoise horizon meets artisan Italian comfort. Your private balcony over the Mediterranean awaits.",
                "check": "Check Availability",
                "explore": "Explore Rooms"
            },
            "cta": {
                "title": "Ready for your seaside escape?",
                "description": "Rooms for this season are filling up fast. Secure your slice of seaside paradise today and start counting down the days.",
                "book": "Book My Room Now",
                "contact": "Contact Concierge",
                "cancel": "* Free cancellation up to 48 hours before arrival"
            },
            "rooms": rooms.en
        }
    },
    fr: {
        translation: {
            "nav": {
                "experience": "L'Expérience",
                "reviews": "Avis",
                "book": "Réserver",
                "rooms": "Chambres"
            },
            "hero": {
                "title": "Réveillez-vous avec",
                "subtitle": "Ammare Rooms",
                "description": "Vivez une évasion intime au bord de la mer où l'horizon turquoise rencontre le confort artisanal italien. Votre balcon privé sur la Méditerranée vous attend.",
                "check": "Vérifier la Disponibilité",
                "explore": "Explorer les Chambres"
            },
            "cta": {
                "title": "Prêt pour votre évasion au bord de la mer ?",
                "description": "Les chambres pour cette saison se remplissent rapidement. Réservez votre coin de paradis dès aujourd'hui.",
                "book": "Réserver Maintenant",
                "contact": "Contacter la Conciergerie",
                "cancel": "* Annulation gratuite jusqu'à 48 heures avant l'arrivée"
            },
            "rooms": rooms.fr
        }
    },
    de: {
        translation: {
            "nav": {
                "experience": "Das Erlebnis",
                "reviews": "Bewertungen",
                "book": "Buchen",
                "rooms": "Zimmer"
            },
            "hero": {
                "title": "Erwachen Sie mit der",
                "subtitle": "Ammare Rooms",
                "description": "Erleben Sie einen intimen Rückzugsort am Meer, wo der türkisfarbene Horizont auf handwerklichen italienischen Komfort trifft. Ihr privater Balkon über dem Mittelmeer erwartet Sie.",
                "check": "Verfügbarkeit Prüfen",
                "explore": "Zimmer Erkunden"
            },
            "cta": {
                "title": "Bereit für Ihre Flucht ans Meer?",
                "description": "Die Zimmer für diese Saison füllen sich schnell. Sichern Sie sich noch heute Ihr Stück Paradies am Meer.",
                "book": "Jetzt Buchen",
                "contact": "Concierge Kontaktieren",
                "cancel": "* Kostenlose Stornierung bis 48 Stunden vor Anreise"
            },
            "rooms": rooms.de
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'it', // Default language Italian
        lng: 'it', // Force start with Italian
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
