import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  BackButton,
  BackIcon,
  Container,
  Gradient,
  NavRow,
  Title,
} from './styles';

class Header extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
    onBackButtonPress: PropTypes.func,
    title: PropTypes.string,
  };

  render() {
    const { children, onBackButtonPress, title } = this.props;

    return (
      <Gradient>
        <NavRow>
          <BackButton onPress={onBackButtonPress}>
            <BackIcon />
          </BackButton>
          <Title>{title}</Title>
        </NavRow>
        <Container>{children}</Container>
      </Gradient>
    );
  }
}

export default Header;
