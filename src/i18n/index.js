import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-xhr-backend';

// TODO: Yay, first TODO! Move the locales to the backend and fetch and cache them

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      addPath: '/i18n/{{lng}}/{{ns}}',
      loadPath: '/i18n/{{lng}}/{{ns}}'
    },
    debug: false,
    fallbackLng: 'en',
    preload: ['sv'],
    interpolation: {
      escapeValue: false
    },
    saveMissing: true,
    defaultNS: 'common',
    react: {
      wait: true,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default'
    }
  });

export default i18n;
