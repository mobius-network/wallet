import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { Container, Title, StartButton } from './styles';

class Welcome extends Component {
  static propTypes = {
    // name: PropTypes.string.isRequired,
  };

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <Title>Welcome</Title>
        <Title>Create a wallet ...</Title>
        <StartButton
          title="Setup wallet"
          onPress={() => navigation.navigate('PinSetup')}
        />
      </Container>
    );
  }
}

export default Welcome;
