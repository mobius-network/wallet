import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Keychain from 'react-native-keychain';
import { isNil } from 'lodash';

import PinPad from './PinPad';

class PinSetup extends Component {
  static propTypes = {
    loginStart: PropTypes.func.isRequired,
    signupStart: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
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

  handlePinPadComplete = () => {
    const { loginStart, signupStart } = this.props;
    const { step } = this.state;

    if (step === 'choose') {
      signupStart();
      return;
    }

    loginStart();
  };

  render() {
    const { t } = this.props;
    const { isPinRetreived, pin, step } = this.state;

    if (isPinRetreived) {
      return (
        <PinPad
          chooseSubtitle={t('pinSetup.chooseSubtitle')}
          chooseTitle={t('pinSetup.chooseTitle')}
          confirmSubtitle={t('pinSetup.confirmSubtitle')}
          confirmTitle={t('pinSetup.confirmTitle')}
          lockedSubtitle={t('pinSetup.lockedSubtitle')}
          lockedTitle={t('pinSetup.lockedTitle')}
          pin={pin}
          step={step}
          unlockTitle={t('pinSetup.unlockTitle')}
          onComplete={this.handlePinPadComplete}
        />
      );
    }

    return null;
  }
}

export default PinSetup;
