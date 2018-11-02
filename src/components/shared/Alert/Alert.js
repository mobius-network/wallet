import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';

import {
  Container,
  Window,
  Title,
  Text,
  Children,
  Buttons,
  ButtonContainer,
} from './styles';

class Alert extends Component {
  static propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.any),
    children: PropTypes.any,
    isVisible: PropTypes.bool,
    testID: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    isVisible: false,
    buttons: [],
  };

  renderButtons() {
    const { buttons } = this.props;

    return buttons.map((button, i) => (
      <ButtonContainer key={i}>{button}</ButtonContainer>
    ));
  }

  render() {
    const {
      isVisible, title, text, children, testID,
    } = this.props;

    return (
      <Container>
        <Modal
          animationIn="slideInDown"
          animationOut="slideOutUp"
          isVisible={isVisible}
        >
          <Window testID={testID}>
            <Title>{title}</Title>
            {text && <Text>{text}</Text>}

            {children && <Children>{children}</Children>}

            <Buttons>{this.renderButtons()}</Buttons>
          </Window>
        </Modal>
      </Container>
    );
  }
}

export default Alert;
