import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckBox from 'react-native-check-box';

import { colors } from 'components/shared/Styleguide';

import { Container, Label } from './styles';

class AlertCheckbox extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,

    isChecked: PropTypes.bool,
  };

  static defaultProps = {
    isChecked: false,
  };

  render() {
    const { isChecked, label, onPress } = this.props;

    return (
      <Container>
        <CheckBox
          isChecked={isChecked}
          onClick={() => onPress()}
          checkBoxColor={colors.textPrimary}
        />
        <Label>{label}</Label>
      </Container>
    );
  }
}

export default AlertCheckbox;
