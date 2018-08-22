import React, { Component } from 'react';
import { TouchableOpacity, Clipboard } from 'react-native';
import PropTypes from 'prop-types';

import {
  Container, Text, CopyButton, CopyIcon, shadow,
} from './styles';

class MnemonicView extends Component {
  static propTypes = {
    mnemonic: PropTypes.string.isRequired,
    onCopy: PropTypes.func,
    onPress: PropTypes.func,
    withCopyButton: PropTypes.bool,
  };

  static defaultProps = {
    onCopy: null,
    onPress: null,
    withCopyButton: false,
  };

  handleContainerClick = () => {
    const { mnemonic, onPress } = this.props;

    if (onPress) {
      onPress(mnemonic);
    }
  };

  handleCopyClick = () => {
    const { mnemonic, onCopy } = this.props;

    Clipboard.setString(mnemonic);

    if (onCopy) {
      onCopy(mnemonic);
    }
  };

  render() {
    const { mnemonic, onPress, withCopyButton } = this.props;

    if (onPress) {
      return (
        <TouchableOpacity
          accessibilityComponentType="button"
          onPress={this.handleContainerClick}
        >
          <Container style={shadow}>
            <Text selectable>{mnemonic}</Text>
          </Container>
        </TouchableOpacity>
      );
    }

    return (
      <Container style={shadow}>
        <Text selectable>{mnemonic}</Text>

        {withCopyButton && (
          <CopyButton>
            <TouchableOpacity
              accessibilityComponentType="button"
              onPress={this.handleCopyClick}
            >
              <CopyIcon />
            </TouchableOpacity>
          </CopyButton>
        )}
      </Container>
    );
  }
}

export default MnemonicView;
