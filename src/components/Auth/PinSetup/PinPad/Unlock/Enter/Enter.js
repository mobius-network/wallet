import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '../../Header';
import Keyboard from '../../Keyboard';

class Enter extends Component {
  static propTypes = {
    errorSubtitle: PropTypes.string,
    errorTitle: PropTypes.string,
    maxAttempts: PropTypes.number,
    onComplete: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired,
    pin: PropTypes.string.isRequired,
    pinLength: PropTypes.number.isRequired,
    setUnlockStatus: PropTypes.func.isRequired,
    subtitle: PropTypes.string,
    title: PropTypes.string,
    unlockStatus: PropTypes.shape({
      attempts: PropTypes.string,
    }),
  };

  static defaultProps = {
    title: '',
    subtitle: '',
    errorTitle: 'Incorrect PIN',
    errorSubtitle: 'Please try again',
  };

  state = {
    pin: '',
    showError: false,
    shouldLock: false,
  };

  repeatFailedAttempt = () =>
    this.setState({ pin: '', showError: false, shouldLock: false });

  validate = () => {
    const {
      pin,
      pinLength,
      onComplete,
      setUnlockStatus,
      maxAttempts,
      unlockStatus: { attempts },
    } = this.props;

    if (this.state.pin.length !== pinLength) {
      return;
    }

    if (this.state.pin !== pin) {
      this.setState(
        {
          showError: true,
          shouldLock: parseInt(attempts, 10) + 1 >= maxAttempts,
        },
        setUnlockStatus
      );
      return;
    }

    onComplete(this.state.pin);
  };

  handleKeyboardChange = pin => this.setState({ pin }, this.validate);

  render() {
    const {
      errorSubtitle,
      errorTitle,
      onError,
      pinLength,
      subtitle,
      title,
    } = this.props;
    const { showError, pin, shouldLock } = this.state;

    return (
      <Fragment>
        <Header
          errorSubtitle={errorSubtitle}
          errorTitle={errorTitle}
          onErrorShown={shouldLock ? onError : this.repeatFailedAttempt}
          pin={pin}
          pinLength={pinLength}
          showError={showError}
          subtitle={subtitle}
          title={title}
        />
        <Keyboard
          disabled={showError}
          onChange={this.handleKeyboardChange}
          pin={pin}
          pinLength={pinLength}
        />
      </Fragment>
    );
  }
}

export default Enter;
