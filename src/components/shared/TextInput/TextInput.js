import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { Container, Label, Input } from './styles';

class TextInput extends Component {
  static propTypes = {
    input: PropTypes.object,
    label: PropTypes.string,
    meta: PropTypes.shape({
      dirty: PropTypes.bool,
      error: PropTypes.string,
      touched: PropTypes.bool,
    }),
    placeholder: PropTypes.string,
  };

  render() {
    const {
      input,
      label,
      placeholder,
      meta: { error, dirty, touched },
      ...rest
    } = this.props;
    const showError = error && (dirty || touched);

    return (
      <ThemeProvider theme={{ error: showError }}>
        <Container>
          {label && <Label>{label}</Label>}
          <Input
            {...input}
            error={showError}
            onChangeText={input.onChange}
            placeholder={placeholder}
            {...rest}
          />
        </Container>
      </ThemeProvider>
    );
  }
}
export default TextInput;
