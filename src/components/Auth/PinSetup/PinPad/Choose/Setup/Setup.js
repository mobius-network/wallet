import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '../../Header';
import Keyboard from '../../Keyboard';

class Setup extends Component {
  static propTypes = {
    onComplete: PropTypes.func.isRequired,
    subtitle: PropTypes.string,
    title: PropTypes.string.isRequired,
    pinLength: PropTypes.number.isRequired,
  };

  state = {
    pin: '',
  };

  validate = () => {
    const { pinLength, onComplete } = this.props;

    if (this.state.pin.length !== pinLength) {
      return;
    }

    onComplete(this.state.pin);
  };

  handleKeyboardChange = pin => this.setState({ pin }, this.validate);

  render() {
    const { pinLength, subtitle, title } = this.props;
    const { pin } = this.state;

    return (
      <Fragment>
        <Header
          pin={pin}
          pinLength={pinLength}
          subtitle={subtitle}
          title={title}
        />
        <Keyboard
          onChange={this.handleKeyboardChange}
          pin={pin}
          pinLength={pinLength}
        />
      </Fragment>
    );
  }
}

export default Setup;
