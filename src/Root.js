import React, { Component } from 'react';
import { StatusBar, BackHandler } from 'react-native';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { I18nextProvider } from 'react-i18next';

import i18n from 'utils/i18n';

import store from 'state/store';

import { navigators } from 'state/navigator';
import Navigator from './Navigator';
import { SafeArea } from './styles';

class Root extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

    SplashScreen.hide();
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    // if on the Autn screen there is nothign to navigate back so block default closing app
    if (navigators.Auth) {
      return true;
    }

    // need to test if the StackNavigator is on the root screen - if so return true (prevent default action of exiting app)
    if (false) {
      return true;
    }

    return false;
  };

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
