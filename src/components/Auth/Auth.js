import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { Container, Title } from './styles';

class Auth extends Component {
  static propTypes = {
    // name: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Container>
        <Title>Auth</Title>
      </Container>
    );
  }
}

export default Auth;
