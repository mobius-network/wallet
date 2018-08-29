import * as Keychain from 'react-native-keychain';
import { AsyncStorage } from 'react-native';
import { call, put } from 'redux-saga/effects';
import { isNil } from 'lodash';

import { appActions } from 'state/app';

function* isHasLaunched() {
  const HAS_LAUNCHED = 'hasLaunched';

  const hasLaunched = yield call(AsyncStorage.getItem, HAS_LAUNCHED);

  if (isNil(hasLaunched)) {
    yield call(AsyncStorage.setItem, HAS_LAUNCHED, 'true');

    return false;
  }

  return true;
}

export default function* appInit() {
  const hasLaunched = yield call(isHasLaunched);

  const pinStore = yield call(Keychain.getGenericPassword, {
    service: 'pin',
  });

  const isPinSetup = Boolean(pinStore);

  yield put(
    appActions.set({ hasLaunched, isPinSetup, isSettingsLoaded: true })
  );
}
