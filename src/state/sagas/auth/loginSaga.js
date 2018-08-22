import { takeLatest, call, put } from 'redux-saga/effects';
import StellarHDWallet from 'stellar-hd-wallet';
import * as Keychain from 'react-native-keychain';

import { decrypt } from 'utils';
import navigator from 'state/navigator';
import { authActions } from 'state/auth';

function* run() {
  const pinStore = yield call(Keychain.getGenericPassword, {
    service: 'pin',
  });

  const encryptedMnemonicStore = yield call(Keychain.getGenericPassword, {
    service: 'mnemonic',
  });

  const mnemonic = yield call(
    decrypt,
    pinStore.password,
    encryptedMnemonicStore.password
  );

  const wallet = StellarHDWallet.fromMnemonic(mnemonic);

  yield put(authActions.set({ wallet }));

  yield call(navigator.navigate, 'Main', 'App');

  yield put(authActions.loginSuccess());
}

export default takeLatest(authActions.loginStart, run);
