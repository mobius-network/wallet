import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { I18nextProvider } from 'react-i18next';

import i18n from 'utils/i18n';

import store from 'state/store';

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

export default Root;
