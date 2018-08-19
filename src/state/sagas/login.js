import { noop } from 'lodash';
import StellarHDWallet from 'stellar-hd-wallet';
import * as Keychain from 'react-native-keychain';
import { takeLatest, call, put } from 'redux-saga/effects';

import { decrypt } from 'utils';
import navigator from 'state/navigator';

import { authActions } from '../auth/reducer';
import { notificationsActions } from '../notifications';

export function* login({
  payload: { password },
  meta: { resolve = noop, reject = noop } = {},
}) {
  try {
    // get encryptedMnemonic from keyChain
    const encryptedMnemonic = yield call(Keychain.getGenericPassword, {
      service: 'mnemonic',
    });

    // decrypt mnemonic using pinCode
    const mnemonic = yield call(decrypt, password, encryptedMnemonic);
    const wallet = StellarHDWallet.fromMnemonic(mnemonic);
    // const wallet = StellarHDWallet.fromSeed(
    // eslint-disable-next-line
    //   '6c1fc4830bfe1f5df3ad202987a327162c30f3ea6d88b6faf1aab3e2c70d788cf34a66570c59812baec87cd02004030142da16d7e4d14dd4c3270a9ff945f51e'
    // );

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
