import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { Container, Content, Action } from './styles';

import background from './images/bg.png';

class BackgroundView extends Component {
  static propTypes = {
    action: PropTypes.any,

    content: PropTypes.any,
    variant: PropTypes.oneOf(['center', 'bottom']),
  };

  render() {
    const { variant, content, action } = this.props;

    return (
      <ThemeProvider theme={{ variant }}>
        <Container source={background}>
          <Content>{content}</Content>
          <Action>{action}</Action>
        </Container>
      </ThemeProvider>
    );
  }
}

export default BackgroundView;
