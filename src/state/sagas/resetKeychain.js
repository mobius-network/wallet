import * as Keychain from 'react-native-keychain';
import { takeLatest, call } from 'redux-saga/effects';

import { appActions } from '../app/reducer';

function* resetKeychain() {
  yield call(Keychain.resetGenericPassword, {
    service: 'pin',
  });

  yield call(Keychain.resetGenericPassword, {
    service: 'mnemonic',
  });
}

export default takeLatest(appActions.resetKeychain, resetKeychain);
