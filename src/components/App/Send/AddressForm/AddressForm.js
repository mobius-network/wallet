import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Alert, Keyboard, View, Text,
} from 'react-native';
import { Field } from 'redux-form';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Permissions from 'react-native-permissions';
import querystring from 'querystring';
import { hasError } from 'revalidate/assertions';

import TextInput from 'components/shared/TextInput';
import AlertShared from 'components/shared/Alert';
import Button from 'components/shared/Button';

import { validate } from './validate';
import Header from './Header';

import {
  Container, ScanButton, ScanIcon, QRCameraStyles,
} from './styles';

class AddressForm extends Component {
  static propTypes = {
    amount: PropTypes.string.isRequired,
    asset: PropTypes.string.isRequired,
    change: PropTypes.func.isRequired,
    destination: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    memo: PropTypes.string,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      pop: PropTypes.func.isRequired,
    }).isRequired,
    t: PropTypes.func.isRequired,
    usdAmount: PropTypes.number.isRequired,
  };

  state = {
    cameraPermission: null,
    isAlertVisible: false,
    isScannerOpened: false,
    validation: {},
  };

  toggleScanner = () => {
    if (this.state.isScannerOpened) {
      this.setState({ isScannerOpened: false });
      return;
    }

    Keyboard.dismiss();

    Permissions.check('camera').then((response) => {
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
      this.setState(
        {
          cameraPermission: response,
          isScannerOpened: response === 'authorized',
        },
        () => {
          if (response === 'undetermined') {
            this.alertForPhotosPermission();
          }
        }
      );
    });
  };

  alertForPhotosPermission() {
    const { t } = this.props;

    Alert.alert(t('send.addressForm.permissionsConfirmTitle'), null, [
      {
        text: t('shared.no'),
        onPress: () => console.log('Permission denied'),
        style: 'cancel',
      },
      this.state.cameraPermission === 'undetermined'
        ? { text: t('shared.ok'), onPress: this.requestPermission }
        : {
          text: t('send.AddressForm.permissionsConfirmSettings'),
          onPress: Permissions.openSettings,
        },
    ]);
  }

  requestPermission = () => {
    Permissions.request('camera', { type: 'always' }).then((response) => {
      const isScannerOpened = response === 'authorized';

      // Returns once the user has chosen to 'allow' or to 'not allow' access
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
      this.setState({
        cameraPermission: response,
        isScannerOpened,
      });
    });
  };

  hideAlert = () => {
    this.setState({ isAlertVisible: false });
  };

  handleScanComplete = ({ data }) => {
    const query = data.slice(data.indexOf('?') + 1);
    const parsed = querystring.parse(query);

    this.setState({ isScannerOpened: false }, () => {
      this.props.change('destination', parsed.destination);
    });
  };

  handleSubmitButtonPress = () => {
    const { destination, memo, handleSubmit } = this.props;

    const validation = validate({ destination, memo });

    this.setState({ validation, isAlertVisible: hasError(validation) }, () => {
      if (hasError(validation)) {
        return;
      }

      handleSubmit();
    });
  };

  handleBack = () => this.props.navigation.pop();

  render() {
    const { isScannerOpened, isAlertVisible, validation } = this.state;
    const {
      amount, asset, t, usdAmount,
    } = this.props;

    return (
      <Fragment>
        <AlertShared
          buttons={[
            <Button
              key="confirm"
              onPress={this.hideAlert}
              padding={false}
              square={true}
              title={t('shared.ok').toUpperCase()}
              variant="text"
            />,
          ]}
          isVisible={isAlertVisible}
          title={t('send.addressForm.alertTitle')}
        >
          {Object.keys(validation).map(key => (
            <Text key={key}>{validation[key]}</Text>
          ))}
        </AlertShared>

        <Container>
          <Header
            amount={amount}
            asset={asset}
            onBackButtonClick={this.handleBack}
            onPress={this.handleSubmitButtonPress}
            t={t}
            usdAmount={usdAmount}
          />

          <View>
            <Field
              autoFocus
              component={TextInput}
              label={t('send.addressForm.addressFieldLabel')}
              name="destination"
            />
            <Field
              component={TextInput}
              label={t('send.addressForm.memoFieldLabel')}
              name="memo"
              placeholder={t('send.addressForm.memoFieldPlaceholder')}
            />

            <ScanButton
              onPress={this.toggleScanner}
              underlayColor="transparent"
            >
              <ScanIcon />
            </ScanButton>
          </View>

          {isScannerOpened && (
            <QRCodeScanner
              cameraStyle={QRCameraStyles}
              onRead={this.handleScanComplete}
              reactivate
              reactivateTimeout={20}
              showMarker
            />
          )}
        </Container>
      </Fragment>
    );
  }
}

export default AddressForm;
