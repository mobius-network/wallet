import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Keychain from 'react-native-keychain';
import { isNil } from 'lodash';

import PinPad from './PinPad';

class PinSetup extends Component {
  static propTypes = {
    loginStart: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    signupStart: PropTypes.func.isRequired,
  };

  state = {
    step: 'choose',
    isPinRetreived: false,
    pin: null,
  };

  componentDidMount() {
    this.getPin();
  }

  async getPin() {
    const { password } = await Keychain.getGenericPassword({ service: 'pin' });

    this.setState({
      isPinRetreived: true,
      pin: password,
      step: isNil(password) ? 'choose' : 'unlock',
    });
  }

  render() {
    const { navigation } = this.props;
    const { isPinRetreived, pin, step } = this.state;

    if (isPinRetreived) {
      return (
        <PinPad
          chooseSubtitle="Enter a 6-digit PIN to access your mobile wallet"
          chooseTitle="Set a Pin"
          confirmSubtitle="Please re-enter your PIN."
          confirmTitle="Confirm PIN"
          pin={pin}
          step={step}
          unlockTitle="Enter your PIN code"
          lockedTitle="Maximum attempts reached"
          lockedSubtitle="To protect your information, access has been locked for 5 minutes.
            Try again later."
          onComplete={() => {
            navigation.navigate('Welcome');
          }}
        />
      );
    }

    return null;
  }
}

export default PinSetup;
