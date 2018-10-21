import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Keyboard from 'components/shared/Keyboard';
import Header from '../../Header';

class Setup extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      pop: PropTypes.func.isRequired,
    }).isRequired,
    onComplete: PropTypes.func.isRequired,
    pinLength: PropTypes.number.isRequired,
    subtitle: PropTypes.string,
    title: PropTypes.string.isRequired,
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

  handleBack = () => this.props.navigation.pop();

  render() {
    const { pinLength, subtitle, title } = this.props;
    const { pin } = this.state;

    return (
      <Fragment>
        <Header
          handleBack={this.handleBack}
          pin={pin}
          pinLength={pinLength}
          showBack={true}
          subtitle={subtitle}
          title={title}
        />
        <Keyboard
          maxLength={pinLength}
          onChange={this.handleKeyboardChange}
          value={pin}
        />
      </Fragment>
    );
  }
}

export default Setup;
