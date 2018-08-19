import { noop } from 'lodash';
import { fetchStart } from 'redux-boost';
import StellarHDWallet from 'stellar-hd-wallet';
import * as Keychain from 'react-native-keychain';
import { takeLatest, call, put } from 'redux-saga/effects';

import { encrypt, encodeFundToken } from 'utils';
import navigator from 'state/navigator';

// import navigator from 'state/navigator';
import { authActions } from '../auth/reducer';

export function* signup({ payload, meta: { resolve = noop } = {} }) {
  const { password, mnemonic } = payload;

  // generate wallet from mnemonic
  const wallet = StellarHDWallet.fromMnemonic(mnemonic);

  // generate fund token
  const token = encodeFundToken(wallet.seedHex);

  // send token to mobius backend
  yield call(fetchStart, {
    name: 'loadAppAccount',
    payload: `stellar/fund_wallet?payload=${token}`,
  });

  // start account watcher
  yield put(authActions.watchAccount());

  // lock mnemonic with pincode
  const encryptedMnemonic = yield call(encrypt, password, mnemonic);

  // once we got an account save locked mnemonic to the keychain
  yield call(Keychain.setGenericPassword, 'account', encryptedMnemonic, {
    service: 'mnemonic',
  });

  // redirect to the dashboard
  // yield put(authActions.signupSuccess());
  yield call(navigator.navigate, 'Main', 'App');

  resolve();
}

export default takeLatest(authActions.signupStart, signup);
