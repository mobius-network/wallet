import {
  takeLatest, call, put, select,
} from 'redux-saga/effects';
import { fetchStart } from 'redux-boost';
import StellarHDWallet from 'stellar-hd-wallet';
import * as Keychain from 'react-native-keychain';

import { encrypt, encodeFundToken } from 'utils';
import navigator from 'state/navigator';
import { authActions, getMnemonic } from 'state/auth';

function* run() {
  const mnemonic = yield select(getMnemonic);

  const wallet = StellarHDWallet.fromMnemonic(mnemonic);

  const token = encodeFundToken(wallet.seedHex);

  yield call(fetchStart, {
    name: 'loadAppAccount',
    payload: `stellar/fund_wallet?payload=${token}`,
  });

  yield put(authActions.watchAccount());

  const pinStore = yield call(Keychain.getGenericPassword, {
    service: 'pin',
  });

  const encryptedMnemonic = yield call(encrypt, pinStore.password, mnemonic);

  yield call(Keychain.setGenericPassword, 'account', encryptedMnemonic, {
    service: 'mnemonic',
  });

  yield call(navigator.navigate, 'Main', 'App');
}

export default takeLatest(authActions.signupFinish, run);
