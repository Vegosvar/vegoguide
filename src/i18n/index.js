import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-xhr-backend';
import { getUrl } from 'api/helpers';

const getLocaleMessages = messages =>
  messages.reduce(
    (parsedMessages, { message, translation }) => ({
      ...parsedMessages,
      [message]: translation
    }),
    {}
  );

const getMessages = data =>
  data.reduce(
    (localeMessages, { messages = [] }) => ({
      ...localeMessages,
      ...getLocaleMessages(messages)
    }),
    {}
  );

// TODO: Yay, first TODO! Move the locales to the backend and fetch and cache them
const url = `${getUrl('i18n')}/{{lng}}/{{ns}}`;

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      addPath: url,
      loadPath: url,
      parse(body) {
        const { data } = JSON.parse(body);
        return getMessages(data);
      }
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
