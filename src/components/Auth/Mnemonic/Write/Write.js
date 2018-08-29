import React, { Component } from 'react';
import { Clipboard } from 'react-native';
import PropTypes from 'prop-types';

import MnemonicView from 'components/shared/MnemonicView';
import Button from 'components/shared/Button';
import Alert from 'components/shared/Alert';
import AlertCheckbox from 'components/shared/AlertCheckbox';

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

  state = {
    isAlertVisisble: false,
    isAlertChecked: false,
  };

  showAlert = () => {
    this.setState({ isAlertVisisble: true });
  };

  toggleCheckbox = () => {
    this.setState({ isAlertChecked: !this.state.isAlertChecked });
  };

  onCancel = () => {
    this.setState({ isAlertVisisble: false, isAlertChecked: false });
  };

  onComplete = () => {
    Clipboard.setString(this.props.mnemonic);

    this.setState({ isAlertVisisble: false }, this.props.onComplete);
  };

  render() {
    const { isAlertVisisble, isAlertChecked } = this.state;
    const { t, mnemonic } = this.props;

    return (
      <Container>
        <Alert
          isVisible={isAlertVisisble}
          title={t('mnemonic.write.alertTitle')}
          text={t('mnemonic.write.alertMessage')}
          buttons={[
            <Button
              key="cancel"
              square={true}
              variant="text"
              padding={false}
              title={t('mnemonic.write.alertButtonCancel').toUpperCase()}
              onPress={this.onCancel}
            />,

            <Button
              key="confirm"
              square={true}
              variant="text"
              padding={false}
              title={t('mnemonic.write.alertButtonConfirm').toUpperCase()}
              disabled={!isAlertChecked}
              onPress={this.onComplete}
            />,
          ]}
        >
          <AlertCheckbox
            isChecked={isAlertChecked}
            label={t('mnemonic.write.alertUnderstand')}
            onPress={this.toggleCheckbox}
          />
        </Alert>

        <Header>
          <Title>{t('mnemonic.write.title')}</Title>
          <Description>{t('mnemonic.write.description')}</Description>
        </Header>

        <ContentContainer>
          <MnemonicView mnemonic={mnemonic} withCopyButton />
        </ContentContainer>

        <Button
          onPress={this.showAlert}
          title={t('mnemonic.write.continueButton')}
        />
      </Container>
    );
  }
}

export default Write;
