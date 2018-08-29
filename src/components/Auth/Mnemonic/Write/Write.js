import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MnemonicView from 'components/shared/MnemonicView';
import Button from 'components/shared/Button';
import Alert from 'components/shared/Alert';
import CheckBox from 'react-native-check-box';

import { colors } from 'components/shared/Styleguide';

import {
  Container,
  Header,
  Title,
  Description,
  ContentContainer,
  AlertContainer,
  AlertCheckboxLabel,
} from './styles';

class Write extends Component {
  static propTypes = {
    mnemonic: PropTypes.string.isRequired,
    onComplete: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
  };

  state = {
    isModalVisible: false,
    isAlertChecked: false,
  };

  showModal() {
    this.setState({ isModalVisible: true });
  }

  toggleCheckbox() {
    this.setState({ isAlertChecked: !this.state.isAlertChecked });
  }

  onCancel() {
    this.setState({ isModalVisible: false });
  }

  render() {
    const { isModalVisible, isAlertChecked } = this.state;
    const { t, mnemonic, onComplete } = this.props;

    return (
      <Container>
        <Alert
          isVisible={isModalVisible}
          title={t('mnemonic.write.alertTitle')}
          text={t('mnemonic.write.alertDescription')}
          buttons={[
            <Button
              key="cancel"
              square={true}
              variant="text"
              padding={false}
              title={t('mnemonic.write.alertButtonCancel').toUpperCase()}
              onPress={() => this.onCancel()}
            />,

            <Button
              key="confirm"
              square={true}
              variant="text"
              padding={false}
              title={t('mnemonic.write.alertButtonConfirm').toUpperCase()}
              disabled={!isAlertChecked}
              onPress={() => onComplete()}
            />,
          ]}
        >
          <AlertContainer>
            <CheckBox
              isChecked={isAlertChecked}
              onClick={() => this.toggleCheckbox()}
              checkBoxColor={colors.textPrimary}
            />
            <AlertCheckboxLabel>
              {t('mnemonic.write.alertUnderstand')}
            </AlertCheckboxLabel>
          </AlertContainer>
        </Alert>

        <Header>
          <Title>{t('mnemonic.write.title')}</Title>
          <Description>{t('mnemonic.write.description')}</Description>
        </Header>

        <ContentContainer>
          <MnemonicView mnemonic={mnemonic} withCopyButton />
        </ContentContainer>

        <Button
          onPress={() => this.showModal()}
          title={t('mnemonic.write.continueButton')}
        />
      </Container>
    );
  }
}

export default Write;
