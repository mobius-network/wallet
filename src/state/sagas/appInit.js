import * as Keychain from 'react-native-keychain';
import { call } from 'redux-saga/effects';

import { navigators } from 'state/navigator';

export default function* appInit() {
  const pinStore = yield call(Keychain.getGenericPassword, {
    service: 'pin',
  });

  if (pinStore) {
    navigators.Auth.props.navigation.replace('PinSetup');
  } else {
    navigators.Auth.props.navigation.replace('Welcome');
  }
}
