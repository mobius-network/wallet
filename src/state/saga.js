import { all } from 'redux-saga/effects';

import {
  loginStartSaga,
  signupFinishSaga,
  signupStartSaga,
} from './sagas/auth';
import submitTransactionSaga from './sagas/submitTransaction';
import watchAccountSaga from './sagas/watchAccount';
import watchPricesSaga from './sagas/watchPricesSaga';

export default function* rootSaga() {
  yield all([
    loginStartSaga,
    signupFinishSaga,
    signupStartSaga,
    submitTransactionSaga,
    watchAccountSaga,
    watchPricesSaga,
  ]);
}
