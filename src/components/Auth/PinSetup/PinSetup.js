import React, { Component } from 'react';
import PINCode from '@haskkor/react-native-pincode';
// import PropTypes from 'prop-types';

import { Container, Title } from './styles';

class PinSetup extends Component {
  static propTypes = {
    // name: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Container>
        <Title>PinSetup</Title>
        <PINCode status="choose" />
      </Container>
    );
  }
}

export default PinSetup;
