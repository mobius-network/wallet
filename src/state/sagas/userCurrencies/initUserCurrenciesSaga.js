import { AsyncStorage } from 'react-native';
import { call, put } from 'redux-saga/effects';
import { userCurrenciesActions } from 'state/userCurrencies';
import { isNil } from 'lodash';

function* loadUserCurrencies() {
  const userCurrencies = yield call(AsyncStorage.getItem, 'userCurrencies');

  if (isNil(userCurrencies)) return [];
  return JSON.parse(userCurrencies);
}

export default function* initCurrenciesSaga() {
  const userCurrencies = yield call(loadUserCurrencies);

  if (userCurrencies) {
    yield put(userCurrenciesActions.setUserCurrencies(userCurrencies));
  }
}
