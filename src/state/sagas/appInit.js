import * as Keychain from 'react-native-keychain';
import { AsyncStorage } from 'react-native';
import { call } from 'redux-saga/effects';
import { isNil } from 'lodash';

import { navigators } from 'state/navigator';

function* isHasLaunched() {
  const HAS_LAUNCHED = 'hasLaunched';

  const hasLaunched = yield call(AsyncStorage.getItem, HAS_LAUNCHED);

  if (isNil(hasLaunched)) {
    yield call(AsyncStorage.setItem, HAS_LAUNCHED, 'true');

    return false;
  }

  return true;
}

function* resetKeychainCredentials() {
  yield call(Keychain.resetGenericPassword, {
    service: 'pin',
  });

  yield call(Keychain.resetGenericPassword, {
    service: 'mnemonic',
  });
}

export default function* appInit() {
  const hasLaunched = yield call(isHasLaunched);

  if (!hasLaunched) {
    yield call(resetKeychainCredentials);
  }

  const pinStore = yield call(Keychain.getGenericPassword, {
    service: 'pin',
  });

  if (pinStore) {
    navigators.Auth.props.navigation.replace('PinSetup');
  } else {
    navigators.Auth.props.navigation.replace('Welcome');
  }
}
