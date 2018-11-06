import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FloatingButton, FloatingButtonPosition } from './styles';

class FloatingPlusButton extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  openCurrenciesScreen = () => this.props.navigation.navigate('Currencies');

  render() {
    return (
      <FloatingButtonPosition>
        <FloatingButton
          onPress={this.openCurrenciesScreen}
          shape="circle"
          variant="floatingButton"
        />
      </FloatingButtonPosition>
    );
  }
}

export default FloatingPlusButton;
