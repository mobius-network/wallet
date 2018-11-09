import {
  takeLatest, call, put, select,
} from 'redux-saga/effects';
import StellarHDWallet from 'stellar-hd-wallet';
import * as Keychain from 'react-native-keychain';

import { stellarTestnet } from 'utils/env';
import { encrypt, logSignUp } from 'utils';
import { stellarServer } from 'core';
import navigator from 'state/navigator';
import { authActions, getMnemonic } from 'state/auth';

function callFriendBot(address) {
  return stellarServer.friendbot(address).call();
}

function* run() {
  yield call(navigator.navigate, 'Auth', 'Loading');

  const mnemonic = yield select(getMnemonic);

  const wallet = StellarHDWallet.fromMnemonic(mnemonic);

  if (stellarTestnet) {
    try {
      yield call(callFriendBot, wallet.getPublicKey(0));
    } catch (e) {
      console.log(e);
    }
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

  logSignUp('Mnemonic', true);
}

export default takeLatest(authActions.signupFinish, run);
