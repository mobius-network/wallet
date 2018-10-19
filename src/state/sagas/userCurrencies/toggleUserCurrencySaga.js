import { AsyncStorage } from 'react-native';
import { takeLatest, call } from 'redux-saga/effects';
import { userCurrenciesActions } from 'state/userCurrencies';

function* toggleUserCurrency(action) {
  const currencyId = action.payload;
  const userCurrenciesEntry = yield call(
    AsyncStorage.getItem,
    'userCurrencies'
  );
  const userCurrencies = userCurrenciesEntry
    ? JSON.parse(userCurrenciesEntry)
    : [];
  const currencyIdx = userCurrencies.indexOf(currencyId);
  if (currencyIdx < 0) {
    userCurrencies.push(currencyId);
  } else {
    userCurrencies.splice(currencyIdx, 1);
  }
  const newUserCurrenciesEntry = JSON.stringify(userCurrencies);
  return yield call(
    AsyncStorage.setItem,
    'userCurrencies',
    newUserCurrenciesEntry
  );
}

export default takeLatest(
  userCurrenciesActions.addUserCurrency,
  toggleUserCurrency
);
