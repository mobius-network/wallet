import React, { Component } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import { shuffle } from 'lodash';

import MnemonicView from 'components/shared/MnemonicView';

import {
  Container, Header, Title, Description,
} from './styles';

class Confirm extends Component {
  static propTypes = {
    mnemonic: PropTypes.string.isRequired,
    mnemonicVariants: PropTypes.arrayOf(PropTypes.string).isRequired,
    onComplete: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
  };

  handleMnemonicVariantClick = mnemonicVariant => {
    const {
      mnemonic, onComplete, onError, t,
    } = this.props;

    if (mnemonicVariant !== mnemonic) {
      Alert.alert(
        t('mnemonic.confirm.alertTitle'),
        t('mnemonic.confirm.alertMessage'),
        [{ text: t('mnemonic.confirm.alertButton'), onPress: onError }],
        { cancelable: false }
      );

      return;
    }

    onComplete();
  };

  render() {
    const { t, mnemonic, mnemonicVariants } = this.props;
    const mnemonics = shuffle([...mnemonicVariants, mnemonic]);

    return (
      <Container>
        <Header>
          <Title>{t('mnemonic.confirm.title')}</Title>
          <Description>{t('mnemonic.confirm.description')}</Description>
        </Header>

        {mnemonics.map((variant, i) => (
          <MnemonicView
            key={i}
            mnemonic={variant}
            onPress={this.handleMnemonicVariantClick}
          />
        ))}
      </Container>
    );
  }
}

export default Confirm;
