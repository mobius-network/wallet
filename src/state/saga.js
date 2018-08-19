import { all } from 'redux-saga/effects';

import watchAccountSaga from './sagas/watchAccount';
import signupSaga from './sagas/signup';
import submitTransactionSaga from './sagas/submitTransaction';
import loginSaga from './sagas/login';
import loadCurrencyPricesSaga from './sagas/assetPrices';

export default function* rootSaga() {
  yield all([
    watchAccountSaga,
    signupSaga,
    submitTransactionSaga,
    loginSaga,
    loadCurrencyPricesSaga,
  ]);
}
