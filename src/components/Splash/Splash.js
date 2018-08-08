import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { Container, Title } from './styles';

class Splash extends Component {
  static propTypes = {
    // name: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Container>
        <Title>Splash</Title>
      </Container>
    );
  }
}

export default Splash;
