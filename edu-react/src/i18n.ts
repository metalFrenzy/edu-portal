import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                welcome: "Welcome to Edu Portal",
                login: "Get Started",
                logout: "Logout",
                dashboard: "Dashboard",
                announcements: "Announcements",
                quizzes: "Quizzes",
                welcomeMessage: 'Your gateway to quizzes and announcements'
            }
        }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
