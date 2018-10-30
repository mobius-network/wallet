import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckBox from 'react-native-check-box';

import { colors } from 'components/shared/Styleguide';

import { Container, Label } from './styles';

class AlertCheckbox extends Component {
  static propTypes = {
    isChecked: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isChecked: false,
  };

  render() {
    const {
      isChecked, label, onPress, ...rest
    } = this.props;

    return (
      <Container {...rest}>
        <CheckBox
          checkBoxColor={colors.textPrimary}
          isChecked={isChecked}
          onClick={() => onPress()}
        />
        <Label>{label}</Label>
      </Container>
    );
  }
}

export default AlertCheckbox;
