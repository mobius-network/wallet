import {
  takeLatest, call, put, select,
} from 'redux-saga/effects';
import StellarHDWallet from 'stellar-hd-wallet';
import * as Keychain from 'react-native-keychain';

import { encrypt, logSignUp } from 'utils';
import navigator from 'state/navigator';
import { authActions, getMnemonic } from 'state/auth';

function* run() {
  yield call(navigator.navigate, 'Auth', 'Loading');

  const mnemonic = yield select(getMnemonic);

  const wallet = StellarHDWallet.fromMnemonic(mnemonic);

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

  logSignUp('Mnemonic', true);
}

export default takeLatest(authActions.recoveryFinish, run);
