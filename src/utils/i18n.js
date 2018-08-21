import i18n from 'i18next';
import rn18 from 'react-native-i18n';
import en from 'locales/en.json';
import zh from 'locales/zh.json';
import { isDev } from './env';

/*
 * Exmaple of current locale:
 * rn18.currentLocale() -> 'zh-Hans-US'
 *
 * zh-Hans – Chinese language and the Hans script
 * US – the region
 *
 */

const detector = {
  init: Function.prototype,
  type: 'languageDetector',
  detect: () =>
    rn18
      .currentLocale()
      .split('-')
      .shift(),
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
  resources: { en, zh },
});

export default i18n;
