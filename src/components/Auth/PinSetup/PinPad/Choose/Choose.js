import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import * as Keychain from 'react-native-keychain';

import Setup from './Setup';
import Confirm from './Confirm';

const chooseSteps = {
  setup: 'setup',
  confirm: 'confirm',
};

class Choose extends PureComponent {
  static propTypes = {
    chooseSubtitle: PropTypes.string,
    chooseTitle: PropTypes.string,
    confirmErrorSubtitle: PropTypes.string,
    confirmErrorTitle: PropTypes.string,
    confirmSubtitle: PropTypes.string,
    confirmTitle: PropTypes.string,
    onComplete: PropTypes.func.isRequired,
    pinLength: PropTypes.number.isRequired,
  };

  state = {
    pin: '',
    step: chooseSteps.setup,
  };

  handleSetupComplete = pin =>
    this.setState({ pin, step: chooseSteps.confirm });

  handleConfirmComplete = async pin => {
    const { onComplete } = this.props;

    await Keychain.setGenericPassword('account', pin, { service: 'pin' });

    onComplete(pin);
  };

  handleConfirmFailed = () =>
    this.setState({ pin: '', step: chooseSteps.setup });

  render() {
    const { pin, step } = this.state;
    const {
      chooseSubtitle,
      chooseTitle,
      confirmErrorSubtitle,
      confirmErrorTitle,
      confirmSubtitle,
      confirmTitle,
      pinLength,
    } = this.props;

    switch (step) {
      case chooseSteps.setup:
        return (
          <Setup
            onComplete={this.handleSetupComplete}
            pinLength={pinLength}
            subtitle={chooseSubtitle}
            title={chooseTitle}
          />
        );
      case chooseSteps.confirm:
        return (
          <Confirm
            errorSubtitle={confirmErrorSubtitle}
            errorTitle={confirmErrorTitle}
            onComplete={this.handleConfirmComplete}
            onError={this.handleConfirmFailed}
            pin={pin}
            pinLength={pinLength}
            subtitle={confirmSubtitle}
            title={confirmTitle}
          />
        );

      default:
        return null;
    }
  }
}

export default Choose;
