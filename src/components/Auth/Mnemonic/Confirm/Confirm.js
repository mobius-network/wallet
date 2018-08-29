import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { shuffle } from 'lodash';

import Button from 'components/shared/Button';
import MnemonicView from 'components/shared/MnemonicView';
import Alert from 'components/shared/Alert';
import AlertCheckbox from 'components/shared/AlertCheckbox';

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

  state = {
    isConfirmAlertVisible: false,
    isConfirmAlertChecked: false,

    isErrorAlertVisible: false,
  };

  toggleCheckbox = () => {
    this.setState({ isConfirmAlertChecked: !this.state.isConfirmAlertChecked });
  };

  onError = () => {
    this.setState({
      isConfirmAlertVisible: false,
      isErrorAlertVisible: false,
    });

    this.props.onError();
  };

  onComplete = () => {
    this.setState({
      isConfirmAlertVisible: false,
      isErrorAlertVisible: false,
    });

    this.props.onComplete();
  };

  handleMnemonicVariantClick = mnemonicVariant => {
    const { mnemonic } = this.props;

    if (mnemonicVariant !== mnemonic) {
      this.setState({ isErrorAlertVisible: true });
    } else {
      this.setState({ isConfirmAlertVisible: true });
    }
  };

  render() {
    const {
      isErrorAlertVisible,
      isConfirmAlertVisible,
      isConfirmAlertChecked,
    } = this.state;
    const { t, mnemonic, mnemonicVariants } = this.props;
    const mnemonics = shuffle([...mnemonicVariants, mnemonic]);

    return (
      <Container>
        <Alert
          isVisible={isErrorAlertVisible}
          title={t('mnemonic.confirm.alertErrorTitle')}
          text={t('mnemonic.confirm.alertErrorMessage')}
          buttons={[
            <Button
              key="confirm"
              square={true}
              variant="text"
              padding={false}
              title={t('mnemonic.confirm.alertErrorButton').toUpperCase()}
              onPress={this.onError}
            />,
          ]}
        />

        <Alert
          isVisible={isConfirmAlertVisible}
          title={t('mnemonic.confirm.alertConfirmTitle')}
          text={t('mnemonic.confirm.alertConfirmMessage')}
          buttons={[
            <Button
              key="confirm"
              square={true}
              variant="text"
              padding={false}
              title={t('mnemonic.confirm.alertConfirmButton').toUpperCase()}
              disabled={!isConfirmAlertChecked}
              onPress={this.onComplete}
            />,
          ]}
        >
          <AlertCheckbox
            isChecked={isConfirmAlertChecked}
            label={t('mnemonic.confirm.alertConfirmUnderstand')}
            onPress={this.toggleCheckbox}
          />
        </Alert>

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
