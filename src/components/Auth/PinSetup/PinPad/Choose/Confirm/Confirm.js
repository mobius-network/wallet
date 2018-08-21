import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '../../Header';
import Keyboard from '../../Keyboard';

class Confirm extends Component {
  static propTypes = {
    errorSubtitle: PropTypes.string,
    errorTitle: PropTypes.string,
    onComplete: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired,
    pin: PropTypes.string.isRequired,
    pinLength: PropTypes.number.isRequired,
    subtitle: PropTypes.string,
    title: PropTypes.string,
  };

  static defaultProps = {
    title: '',
    subtitle: '',
    errorTitle: 'Your entries did not match',
    errorSubtitle: 'Please try again',
  };

  state = {
    pin: '',
    showError: false,
  };

  validate = () => {
    const { pin, pinLength, onComplete } = this.props;

    if (this.state.pin.length !== pinLength) {
      return;
    }

    if (this.state.pin !== pin) {
      this.setState({ showError: true });
      return;
    }

    onComplete(this.state.pin);
  };

  handleKeyboardChange = pin => this.setState({ pin }, this.validate);

  render() {
    const {
      pinLength,
      subtitle,
      title,
      errorTitle,
      errorSubtitle,
      onError,
    } = this.props;
    const { showError, pin } = this.state;

    return (
      <Fragment>
        <Header
          errorSubtitle={errorSubtitle}
          errorTitle={errorTitle}
          onErrorShown={onError}
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

export default Confirm;
