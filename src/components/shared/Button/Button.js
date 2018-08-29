import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { TouchableOpacity } from 'react-native';

import {
  Container, Content, Gradient, Title, shadow,
} from './styles';

class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
    square: PropTypes.bool,
    style: PropTypes.object,
    title: PropTypes.any.isRequired,
    variant: PropTypes.oneOf(['primary', 'text', 'secondary']),
  };

  static defaultProps = {
    disabled: false,
    square: false,
    variant: 'primary',
  };

  renderContent = () => {
    const { title, variant } = this.props;

    if (typeof title !== 'string') {
      return <Content>{title}</Content>;
    }

    switch (variant) {
      case 'primary':
        return (
          <Gradient>
            <Content>
              <Title>{title}</Title>
            </Content>
          </Gradient>
        );

      default:
        return (
          <Content>
            <Title>{title}</Title>
          </Content>
        );
    }
  };

  render() {
    const {
      disabled, onPress, square, variant, style,
    } = this.props;

    return (
      <ThemeProvider theme={{ square, variant }}>
        <Container style={[variant !== 'text' && shadow, style]}>
          <TouchableOpacity
            accessibilityComponentType="button"
            disabled={disabled}
            onPress={onPress}
          >
            {this.renderContent()}
          </TouchableOpacity>
        </Container>
      </ThemeProvider>
    );
  }
}

export default Button;
