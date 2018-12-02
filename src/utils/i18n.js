import RNLanguages from 'react-native-languages';
import i18n from 'i18next';
import en from 'locales/en.json';
import ko from 'locales/ko.json';
import pt from 'locales/pt_BR.json';
import ru from 'locales/ru.json';
import zh from 'locales/zh_CN.json';
import { isDev } from './env';

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
    en,
    ko,
    pt,
    ru,
    zh,
  },
});

export function getMessageByErrorType(et) {
  let key = 'defaultMessage';

  if (et.isNetworkError) key = 'networkErrorMessage';
  else if (et.isInsufficientBalance) key = 'insufficientBalanceMessage';

  return i18n.t(`notice.error.${key}`);
}

export default i18n;
