import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import * as sv from './sv';

// TODO: Yay, first TODO! Move the locales to the backend and fetch and cache them

i18n.use(LanguageDetector).init({
  resources: {
    sv
  },
  debug: false,
  fallbackLng: 'en',
  preload: ['sv', 'en'],
  interpolation: {
    escapeValue: false
  },
  defaultNS: 'common',
  react: {
    wait: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default'
  }
});

export default i18n;
