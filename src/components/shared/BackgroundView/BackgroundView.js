import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import {
  Container, Content, Action, SecondaryAction,
} from './styles';

import background from './images/bg.png';

class BackgroundView extends Component {
  static propTypes = {
    action: PropTypes.any,
    content: PropTypes.any,
    secondaryAction: PropTypes.any,
    variant: PropTypes.oneOf(['center', 'bottom']),
  };

  render() {
    const {
      variant, content, action, secondaryAction, ...rest
    } = this.props;

    return (
      <ThemeProvider theme={{ variant }}>
        <Container source={background} {...rest}>
          <Content>{content}</Content>
          {action && <Action>{action}</Action>}

          {secondaryAction && (
            <SecondaryAction>{secondaryAction}</SecondaryAction>
          )}
        </Container>
      </ThemeProvider>
    );
  }
}

export default BackgroundView;
