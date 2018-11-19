import { all } from 'redux-saga/effects';

import { createTrustlineSaga } from './sagas/account';
import {
  loginStartSaga,
  recoveryFinishSaga,
  signupFinishSaga,
  signupStartSaga,
} from './sagas/auth';
import { sendStartSaga } from './sagas/send';
import submitTransactionSaga from './sagas/submitTransaction';
import watchAccountSaga from './sagas/watchAccount';
import watchPricesSaga from './sagas/watchCoinMarketCapSaga';
import loadPayments from './sagas/loadPayments';
import {
  addUserCurrencySaga,
  removeUsersCurrenciesSaga,
  refreshHistoryWhenCurrencySetSaga,
  refreshHistoryWhenUserCurrenciesSetSaga,
  refreshHistoryWhenUserCurrencyAddedSaga,
} from './sagas/userCurrencies';

export default function* rootSaga() {
  yield all([
    createTrustlineSaga,
    loginStartSaga,
    recoveryFinishSaga,
    sendStartSaga,
    signupFinishSaga,
    signupStartSaga,
    submitTransactionSaga,
    watchAccountSaga,
    watchPricesSaga,
    loadPayments,
    addUserCurrencySaga,
    removeUsersCurrenciesSaga,
    refreshHistoryWhenCurrencySetSaga,
    refreshHistoryWhenUserCurrenciesSetSaga,
    refreshHistoryWhenUserCurrencyAddedSaga,
  ]);
}
