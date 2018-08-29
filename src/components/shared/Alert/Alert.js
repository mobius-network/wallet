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
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    children: PropTypes.any,
    buttons: PropTypes.arrayOf(PropTypes.any),

    isVisible: PropTypes.bool,
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
      isVisible, title, text, children,
    } = this.props;

    return (
      <Container>
        <Modal
          animationIn="slideInDown"
          animationOut="slideOutUp"
          isVisible={isVisible}
        >
          <Window>
            <Title>{title}</Title>
            <Text>{text}</Text>

            {children && <Children>{children}</Children>}

            <Buttons>{this.renderButtons()}</Buttons>
          </Window>
        </Modal>
      </Container>
    );
  }
}

export default Alert;
