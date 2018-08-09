import { all, call } from 'redux-saga/effects';

import {
  watchAccountSaga,
  signupSaga,
  submitTransactionSaga,
  loginSaga,
} from '@mobius-network/core';

export default function* rootSaga() {
  yield all([
    call(watchAccountSaga),
    call(signupSaga),
    call(submitTransactionSaga),
    call(loginSaga),
  ]);
}
