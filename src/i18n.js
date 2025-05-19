// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// your one–big JSON with en/ru/he at top level
import rawTranslations from './locales/translations.json';

i18n
  .use(LanguageDetector)            // auto-detect / cache
  .use(initReactI18next)            // hook into React
  .init({
    resources: {
      en: { translation: rawTranslations.en },
      ru: { translation: rawTranslations.ru },
      he: { translation: rawTranslations.he },
    },
    fallbackLng: 'ru',
    lng: 'ru',
    interpolation: { escapeValue: false }
  });

export default i18n;
