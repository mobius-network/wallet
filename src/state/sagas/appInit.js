import * as Keychain from 'react-native-keychain';
import { AsyncStorage } from 'react-native';
import codePush from 'react-native-code-push';
import { call, put } from 'redux-saga/effects';
import { isNil } from 'lodash';

import { navigators } from 'state/navigator';
import { appActions } from 'state/app';
import { authActions } from 'state/auth';

function* getCodePushLabel() {
  const update = yield call(
    codePush.getUpdateMetadata,
    codePush.UpdateState.RUNNING
  );

  if (update) return update.label;
  return undefined;
}

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
  const codePushLabel = yield call(getCodePushLabel);
  yield put(appActions.setCodePushLabel(codePushLabel));

  const hasLaunched = yield call(isHasLaunched);

  if (!hasLaunched) {
    yield call(resetKeychainCredentials);
  }

  const pinStore = yield call(Keychain.getGenericPassword, {
    service: 'pin',
  });

  if (pinStore) {
    navigators.Auth.props.navigation.replace('PinSetup', {
      action: ({ dispatch }) => dispatch(authActions.loginStart()),
    });
  } else {
    navigators.Auth.props.navigation.replace('Welcome');
  }
}
