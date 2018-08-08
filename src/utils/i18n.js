import i18n from 'i18next';
import rn18 from 'react-native-i18n';
import en from 'locales/en.json';
import ch from 'locales/ch.json';
import { isDev } from './env';

const detector = {
  init: Function.prototype,
  type: 'languageDetector',
  detect: () => rn18.currentLocale(),
  cacheUserLanguage: Function.prototype,
};

i18n.use(detector).init({
  debug: isDev,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    wait: false,
  },
  resources: { en, ch },
});

export default i18n;
