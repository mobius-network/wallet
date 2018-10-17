import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  BackButton, BackIcon, Gradient, NavRow,
} from './styles';

class Header extends PureComponent {
  static propTypes = {
    onBackButtonClick: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
  };

  render() {
    const { onBackButtonClick } = this.props;

    return (
      <Gradient>
        <NavRow>
          <BackButton onPress={onBackButtonClick}>
            <BackIcon />
          </BackButton>
        </NavRow>
      </Gradient>
    );
  }
}

export default Header;
