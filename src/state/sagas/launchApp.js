import * as Keychain from 'react-native-keychain';
import { takeLatest, call } from 'redux-saga/effects';
import { navigators } from 'state/navigator';

import { appActions } from '../app/reducer';

function* launchApp() {
  const pinStore = yield call(Keychain.getGenericPassword, {
    service: 'pin',
  });

  if (pinStore) {
    navigators.Auth.props.navigation.replace('PinSetup');
  } else {
    navigators.Auth.props.navigation.replace('Welcome');
  }
}

export default takeLatest(appActions.launchApp, launchApp);
