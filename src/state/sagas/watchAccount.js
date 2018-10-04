import { delay } from 'redux-saga';
import {
  takeLatest,
  call,
  put,
  select,
  fork,
  take,
  cancel,
} from 'redux-saga/effects';
import { requestActions } from 'redux-boost';
import { safeLoadAccount } from 'core';

import { authActions } from '../auth/reducer';
import { getPublicKeyFor } from '../auth/selectors';

import { accountActions } from '../account/reducer';
import { getMasterTrustlineCreated } from '../account/selectors';
import { notificationsActions } from '../notifications';

let watcher;

export function* loadAccount(publicKey) {
  try {
    const account = yield call(safeLoadAccount, publicKey);

    if (account) {
      yield put(accountActions.setMasterAccount(account));
    }
  } catch (error) {
    // TODO: use fetchStart to `safeLoadAccount` and error handling
    yield put(requestActions.fetchFail({ name: 'loadAccount', error }));
    yield put(
      notificationsActions.addNotification({
        type: 'error',
        message: error.message,
      })
    );
  }
}

export function* watchAccount(publicKey, delayDuration = 60000) {
  while (true) {
    yield call(loadAccount, publicKey);
    yield call(delay, delayDuration);
  }
}

export function* cancelWatcherOnLogout() {
  yield take(authActions.logout);
  yield cancel(watcher);

  watcher = null;
}

export function* prepareAccount() {
  if (watcher) {
    return;
  }

  const publicKey = yield select(getPublicKeyFor);

  watcher = yield fork(watchAccount, publicKey);
  yield fork(cancelWatcherOnLogout, publicKey);

  // Wait for account activation
  yield take(accountActions.setMasterAccount);

  const state = yield select();

  if (!getMasterTrustlineCreated(state)) {
    yield put(accountActions.createTrustline());
  }
}

export default takeLatest(
  [authActions.loginSuccess, authActions.watchAccount],
  prepareAccount
);
