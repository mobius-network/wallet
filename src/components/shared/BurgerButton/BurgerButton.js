import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button, BurgerIcon } from './styles';

class BurgerButton extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
  };

  render() {
    const { onPress } = this.props;

    return (
      <Button onPress={onPress}>
        <BurgerIcon />
      </Button>
    );
  }
}

export default BurgerButton;
