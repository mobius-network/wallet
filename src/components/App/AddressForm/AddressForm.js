import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Field, SubmissionError } from 'redux-form';
import { Alert, Keyboard } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Permissions from 'react-native-permissions';
import querystring from 'querystring';

import { Operation } from 'stellar-sdk';
import { assets } from 'core';

import NavHeader from 'components/shared/NavHeader';

import {
  Container,
  FormFields,
  Input,
  BackButton,
  BackIcon,
  TitleContainer,
  TitleAmount,
  TitleUsd,
  SubmitButton,
  ScanButton,
  ScanIcon,
} from './styles';

class AddressForm extends Component {
  static propTypes = {
    amount: PropTypes.number.isRequired,
    asset: PropTypes.string.isRequired,
    change: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      pop: PropTypes.func.isRequired,
    }).isRequired,
    t: PropTypes.func.isRequired,
    usdAmount: PropTypes.number.isRequired,
  };

  state = {
    scannerOpened: false,
    cameraPermission: null,
  };

  submitPayment = async ({ destination, memo }) => {
    const {
      navigation, amount, asset, withdrawAsset,
    } = this.props;

    const paymentOp = Operation.payment({
      destination,
      amount,
      memo,
      asset: assets[asset],
    });

    const { error } = await withdrawAsset.mutate({
      operation: paymentOp,
    });

    if (error) {
      throw new SubmissionError({ amount: error.message });
    } else {
      navigation.navigate('sendFundsSuccess');
    }
  };

  goBack = () => this.props.navigation.pop();

  enableScanner = () => {
    Permissions.check('camera').then((response) => {
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
      this.setState({ cameraPermission: response });
      Keyboard.dismiss();

      if (response === 'authorized') {
        this.setState({ scannerOpened: true });
      }

      if (response === 'undetermined') {
        this.alertForPhotosPermission();
      }
    });
  };

  alertForPhotosPermission() {
    Alert.alert('Can we access your camera?', 'text', [
      {
        text: 'No ',
        onPress: () => console.log('Permission denied'),
        style: 'cancel',
      },
      this.state.cameraPermission === 'undetermined'
        ? { text: 'OK', onPress: this.requestPermission }
        : { text: 'Open Settings', onPress: Permissions.openSettings },
    ]);
  }

  requestPermission = () => {
    Permissions.request('camera', { type: 'always' }).then((response) => {
      const scannerOpened = response === 'authorized';

      // Returns once the user has chosen to 'allow' or to 'not allow' access
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
      this.setState({
        cameraPermission: response,
        scannerOpened,
      });
    });
  };

  onScanComplete = ({ data }) => {
    const query = data.slice(data.indexOf('?') + 1);
    const parsed = querystring.parse(query);
    this.props.change('destination', parsed.destination);

    this.setState({ scannerOpened: false });
  };

  render() {
    const { scannerOpened } = this.state;

    const {
      handleSubmit, t, amount, asset, usdAmount,
    } = this.props;

    return (
      <Fragment>
        <NavHeader>
          <BackButton onPress={this.goBack} underlayColor="transparent">
            <BackIcon />
          </BackButton>

          <TitleContainer>
            <TitleAmount>
              {amount} {asset}
            </TitleAmount>
            <TitleUsd>≈ ${usdAmount.toFixed(2)}</TitleUsd>
          </TitleContainer>

          <SubmitButton onPress={handleSubmit(this.submitPayment)}>
            {t('addressForm.submitLabel')}
          </SubmitButton>
        </NavHeader>

        <Container>
          <FormFields>
            <Field
              autoFocus
              component={Input}
              label={t('addressForm.addressFieldLabel')}
              name="destination"
              placeholder={t('addressForm.addressFieldPlaceholder')}
            />
            <Field
              autoFocus
              component={Input}
              label={t('addressForm.memoFieldLabel')}
              name="memo"
              placeholder={t('addressForm.memoFieldPlaceholder')}
            />
            <ScanButton
              onPress={this.enableScanner}
              underlayColor="transparent"
            >
              <ScanIcon />
            </ScanButton>
          </FormFields>

          {scannerOpened && (
            <QRCodeScanner
              onRead={this.onScanComplete}
              reactivate={true}
              reactivateTimeout={20}
            />
          )}
        </Container>
      </Fragment>
    );
  }
}

export default AddressForm;
