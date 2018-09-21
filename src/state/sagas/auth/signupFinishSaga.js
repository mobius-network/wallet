import {
  takeLatest, call, put, select,
} from 'redux-saga/effects';
import StellarHDWallet from 'stellar-hd-wallet';
import * as Keychain from 'react-native-keychain';

import { API_URL } from 'react-native-dotenv';

import { encrypt, encodeFundToken, trackEvent } from 'utils';
import navigator from 'state/navigator';
import { authActions, getMnemonic } from 'state/auth';
import Api from 'core/services/api';

const apiClient = new Api(API_URL);

function* run() {
  yield call(navigator.navigate, 'Auth', 'Loading');

  const mnemonic = yield select(getMnemonic);

  const wallet = StellarHDWallet.fromMnemonic(mnemonic);

  const token = encodeFundToken(wallet.getPublicKey(0));

  try {
    yield call(apiClient.fundWallet, token);
  } catch (e) {
    console.log(e);
  }

  yield put(authActions.set({ wallet }));
  yield put(authActions.watchAccount());

  const pinStore = yield call(Keychain.getGenericPassword, {
    service: 'pin',
  });

  const encryptedMnemonic = yield call(encrypt, pinStore.password, mnemonic);

  yield call(Keychain.setGenericPassword, 'account', encryptedMnemonic, {
    service: 'mnemonic',
  });

  yield call(navigator.navigate, 'Auth', 'Ready');

  trackEvent('Auth::Success');
}

export default takeLatest(authActions.signupFinish, run);
