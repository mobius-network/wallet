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
import { sendHackathonVoteSaga } from './sagas/hackathonVote';
import watchPaymentsSaga from './sagas/watchPayments';
import {
  addUserCurrencySaga,
  removeUsersCurrenciesSaga,
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
    sendHackathonVoteSaga,
    watchPaymentsSaga,
    addUserCurrencySaga,
    removeUsersCurrenciesSaga,
  ]);
}
