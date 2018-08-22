import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MnemonicView from 'components/shared/MnemonicView';
import Button from 'components/shared/Button';

import {
  Container,
  Header,
  Title,
  Description,
  ContentContainer,
} from './styles';

class Write extends Component {
  static propTypes = {
    mnemonic: PropTypes.string.isRequired,
    onComplete: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
  };

  render() {
    const { t, onComplete, mnemonic } = this.props;

    return (
      <Container>
        <Header>
          <Title>{t('mnemonic.write.title')}</Title>
          <Description>{t('mnemonic.write.description')}</Description>
        </Header>

        <ContentContainer>
          <MnemonicView mnemonic={mnemonic} withCopyButton />
        </ContentContainer>

        <Button
          onPress={onComplete}
          title={t('mnemonic.write.continueButton')}
        />
      </Container>
    );
  }
}

export default Write;
