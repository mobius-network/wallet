import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { TouchableOpacity, ViewPropTypes } from 'react-native';

import {
  Container,
  Content,
  Gradient,
  Title,
  shadow,
  PlusIcon,
} from './styles';

class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
    padding: PropTypes.bool,
    shape: PropTypes.oneOf(['square', 'circle', 'rounded']),
    style: ViewPropTypes.style,
    title: PropTypes.any,
    variant: PropTypes.oneOf([
      'primary',
      'text',
      'secondary',
      'floatingButton',
    ]),
  };

  static defaultProps = {
    disabled: false,
    shape: 'rounded',
    variant: 'primary',
    padding: true,
  };

  renderContent = () => {
    const { title, variant, disabled } = this.props;

    if (typeof title !== 'string' && variant !== 'floatingButton') {
      return <Content>{title}</Content>;
    }

    const text = variant === 'text' || title === undefined ? title : title.toUpperCase();

    switch (variant) {
      case 'primary':
        return (
          <Gradient>
            <Content>
              <Title disabled={disabled}>{text}</Title>
            </Content>
          </Gradient>
        );
      case 'floatingButton':
        return (
          <Gradient>
            <Content>
              <PlusIcon />
            </Content>
          </Gradient>
        );

      default:
        return (
          <Content>
            <Title disabled={disabled}>{text}</Title>
          </Content>
        );
    }
  };

  render() {
    const {
      disabled, onPress, shape, variant, padding, style,
    } = this.props;

    return (
      <ThemeProvider
        theme={{
          shape,
          variant,
          padding,
        }}
      >
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
