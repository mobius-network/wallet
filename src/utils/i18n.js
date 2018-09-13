import RNLanguages from 'react-native-languages';
import i18n from 'i18next';
import en from 'locales/en.json';
import ko from 'locales/ko.json';
import ru from 'locales/ru.json';
import zh from 'locales/zh_CN.json';
import { isDev } from './env';

/*
 * Exmaple of current locale:
 * rn18.currentLocale() -> 'zh-Hans-US'
 *
 * zh-Hans – Chinese language and the Hans script
 * US – the region
 *
 */

i18n.init({
  lng: RNLanguages.language,
  debug: isDev,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    wait: false,
  },
  resources: {
    en, ko, ru, zh,
  },
});

export default i18n;
