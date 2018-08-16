import { noop } from 'lodash';
import StellarHDWallet from 'stellar-hd-wallet';
import * as Keychain from 'react-native-keychain';
import { takeLatest, call, put } from 'redux-saga/effects';
import { decrypt } from '@mobius-network/core';

import navigator from 'state/navigator';

import { authActions } from '../auth/reducer';
import { notificationsActions } from '../notifications';

export function* login({
  payload: { password },
  meta: { resolve = noop, reject = noop } = {},
}) {
  // get encryptedMnemonic from keyChain
  const encryptedMnemonic = yield call(Keychain.getGenericPassword, {
    service: 'mnemonic',
  });

  try {
    // decrypt mnemonic using pinCode
    const mnemonic = yield call(decrypt, password, encryptedMnemonic);
    const wallet = StellarHDWallet.fromMnemonic(mnemonic);

    resolve(wallet);

    yield put(authActions.set({ wallet }));

    // redirect to the dashboard
    yield call(navigator.navigate, 'Main', 'App');
    yield put(authActions.loginSuccess());
  } catch (error) {
    yield put(
      notificationsActions.addNotification({
        type: 'error',
        message: error.message,
      })
    );

    if (error.message === 'Network Error') {
      reject({ keyfile: 'Network error occured!' });
    } else {
      reject({
        keyfile: 'Wrong password or keyfile corrupted!',
        password: ' ',
      });
    }
  }
}

export default takeLatest(authActions.loginStart, login);
