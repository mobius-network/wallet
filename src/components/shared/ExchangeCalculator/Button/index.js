import React, { Component } from 'react';
import PropTypes from 'prop-types';
import image from './resources/button.png';

import { Image, Wrapper } from './styles';

class Button extends Component {
  static propTypes = {
    onSwap: PropTypes.func,
  };

  render() {
    return (
      <Wrapper onPress={this.props.onSwap}>
        <Image alt="Swap Button" source={image} />
      </Wrapper>
    );
  }
}

export default Button;
