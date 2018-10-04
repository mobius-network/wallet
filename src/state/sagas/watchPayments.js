import { delay } from 'redux-saga';
import {
  call,
  cancel,
  fork,
  put,
  take,
  takeLatest,
  select,
} from 'redux-saga/effects';

import { getKeypairFor } from 'state/auth';
import { fetchPayments } from 'core';
import { paymentsActions } from 'state/payments/actions';

let watcher;

function* getPayments() {
  try {
    const keypair = yield select(getKeypairFor);

    const payments = yield call(fetchPayments, keypair.publicKey());

    yield put(paymentsActions.setPayments(payments));
  } catch (error) {
    console.log(error);
  }
}

function* watch(delayDuration = 60000) {
  while (true) {
    yield call(getPayments);
    yield call(delay, delayDuration);
  }
}

function* stopWatch() {
  yield take(paymentsActions.stopWatchPayments);
  yield cancel(watcher);

  watcher = null;
}

function* run() {
  if (watcher) {
    return;
  }

  watcher = yield fork(watch);
  yield fork(stopWatch);
}

export default takeLatest(paymentsActions.watchPayments, run);
