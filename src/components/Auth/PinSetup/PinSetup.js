import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Keychain from 'react-native-keychain';
import { isNil } from 'lodash';

import PinPad from './PinPad';

class PinSetup extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      pop: PropTypes.func.isRequired,
    }).isRequired,
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
    const {
      dispatch,
      navigation: {
        state: {
          params: { action },
        },
      },
    } = this.props;

    action({ dispatch });
  };

  render() {
    const { t, navigation } = this.props;
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
          navigation={navigation}
          onComplete={this.handlePinPadComplete}
          pin={pin}
          step={step}
          unlockTitle={t('pinSetup.unlockTitle')}
        />
      );
    }

    return null;
  }
}

export default PinSetup;
