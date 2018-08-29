import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, Alert } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import Navigator from 'components/Navigator';
import { SafeArea } from './styles';

export default class Main extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    isNeedToShowCredetialAlert: PropTypes.bool.isRequired,
    isSettingsLoaded: PropTypes.bool.isRequired,

    launchApp: PropTypes.func.isRequired,
    resetKeychain: PropTypes.func.isRequired,
  };

  componentWillReceiveProps(nextProps) {
    const { t, isNeedToShowCredetialAlert, isSettingsLoaded } = nextProps;

    if (isSettingsLoaded) {
      if (isNeedToShowCredetialAlert) {
        Alert.alert(
          t('main.alertTitle'),
          t('main.alertMessage'),
          [
            { text: t('main.alertReset'), onPress: this.reset },
            { text: t('main.alertUseExisting'), onPress: this.launch },
          ],
          { cancelable: false }
        );
      } else {
        this.launch();
      }
    }
  }

  reset = () => {
    this.props.resetKeychain();
    SplashScreen.hide();
    this.props.launchApp();
  };

  launch = () => {
    SplashScreen.hide();
    this.props.launchApp();
  };

  render() {
    return (
      <SafeArea>
        <StatusBar barStyle="light-content" />
        <Navigator />
      </SafeArea>
    );
  }
}
