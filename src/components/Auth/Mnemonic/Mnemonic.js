import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Write from './Write';
import Confirm from './Confirm';

const mnemonicSteps = {
  write: 'write',
  confirm: 'confirm',
};

class Mnemonic extends Component {
  static propTypes = {
    mnemonic: PropTypes.string.isRequired,
    mnemonicVariants: PropTypes.arrayOf(PropTypes.string).isRequired,
    signupFinish: PropTypes.func.isRequired,
  };

  state = {
    step: mnemonicSteps.write,
  };

  handleStepSwitch = (step = mnemonicSteps.confirm) => () =>
    this.setState({ step });

  render() {
    const { step } = this.state;
    const { mnemonic, mnemonicVariants, signupFinish } = this.props;

    switch (step) {
      case mnemonicSteps.write:
        return (
          <Write
            mnemonic={mnemonic}
            onComplete={this.handleStepSwitch(mnemonicSteps.confirm)}
          />
        );

      case mnemonicSteps.confirm:
        return (
          <Confirm
            mnemonic={mnemonic}
            mnemonicVariants={mnemonicVariants}
            onError={this.handleStepSwitch(mnemonicSteps.write)}
            onComplete={signupFinish}
          />
        );

      default:
        return null;
    }
  }
}

export default Mnemonic;
