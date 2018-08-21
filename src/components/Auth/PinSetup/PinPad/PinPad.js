import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

import Choose from './Choose';
import Unlock from './Unlock';

import styles from './styles';

const pinPadSteps = {
  choose: 'choose',
  unlock: 'unlock',
};

const pinPadComponents = {
  [pinPadSteps.choose]: Choose,
  [pinPadSteps.unlock]: Unlock,
};

class PinPad extends PureComponent {
  static propTypes = {
    onComplete: PropTypes.func,
    step: PropTypes.oneOf(Object.values(pinPadSteps)),
    pinLength: PropTypes.number,
  };

  static defaultProps = {
    onComplete: noop,
    pinLength: 6,
    step: pinPadSteps.choose,
  };

  render() {
    const { step, ...rest } = this.props;
    const StepComponent = pinPadComponents[step];

    return (
      <View style={styles.container}>
        <StepComponent {...rest} />
      </View>
    );
  }
}

export default PinPad;
