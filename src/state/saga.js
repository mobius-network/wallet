import { all } from 'redux-saga/effects';

import { createTrustlineSaga } from './sagas/account';
import {
  loginStartSaga,
  signupFinishSaga,
  signupStartSaga,
} from './sagas/auth';
import { sendStartSaga } from './sagas/send';
import submitTransactionSaga from './sagas/submitTransaction';
import watchAccountSaga from './sagas/watchAccount';
import watchPricesSaga from './sagas/watchPricesSaga';

export default function* rootSaga() {
  yield all([
    createTrustlineSaga,
    loginStartSaga,
    sendStartSaga,
    signupFinishSaga,
    signupStartSaga,
    submitTransactionSaga,
    watchAccountSaga,
    watchPricesSaga,
  ]);
}
