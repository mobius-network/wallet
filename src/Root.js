import React, { Component } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import { StatusBar } from 'react-native';
import codePush from 'react-native-code-push';
import SplashScreen from 'react-native-splash-screen';

import store from 'state/store';
import i18n from 'utils/i18n';

import Navigator from './Navigator';
import { SafeArea } from './styles';

class Root extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <SafeArea>
            <StatusBar barStyle="light-content" />
            <Navigator />
          </SafeArea>
        </I18nextProvider>
      </Provider>
    );
  }
}

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESUME,
  mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
})(Root);
