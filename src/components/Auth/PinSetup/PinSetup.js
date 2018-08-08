import React, { Component } from 'react';
import PINCode from './PinPad';
// import PropTypes from 'prop-types';

import { Container, Title } from './styles';

class PinSetup extends Component {
  static propTypes = {
    // name: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Container>
        <PINCode
          status="choose"
          passwordLength={6}
          titleChoose="Set a Pin"
          titleConfirm=" Confirm Pin"
          subtitleChoose="Enter 4 digit pin to access your mobile wallet"
          subtitleConfirm="Please re-enter your pin"
          stylePinCodeRowButtons={{}}
        />
      </Container>
    );
  }
}

export default PinSetup;
