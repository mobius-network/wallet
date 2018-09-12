import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActionSheet from 'react-native-custom-actionsheet';

import Keyboard from 'components/shared/Keyboard';

import {
  Container,
  Asset,
  UsdAmount,
  Amount,
  FormFields,
  SubmitButton,
} from './styles';

class SendFunds extends Component {
  static propTypes = {
    asset: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    saveAmount: PropTypes.func.isRequired,
    setAsset: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    usdPrice: PropTypes.number.isRequired,
  };

  static defaultProps = {
    asset: 'native',
  };

  state = {
    amount: '',
    valid: false,
  };

  submitAmount = () => {
    const { amount } = this.state;
    const { saveAmount, navigation } = this.props;

    saveAmount(amount);
    navigation.navigate('AddressForm');
  };

  options = [this.props.t('addFunds.selectWallet.cancel'), 'MOBI', 'XLM'];

  showActionSheet = () => this.actionSheet.show();

  setActionSheetRef = ref => (this.actionSheet = ref);

  handleAssetChange = index => this.props.setAsset(this.options[index].toLowerCase());

  handleKeyboardChange = (amount) => {
    const valid = amount > 0 && amount < this.props.balance;

    this.setState({ amount, valid });
  };

  render() {
    const { amount, valid } = this.state;
    const { t, asset, usdPrice } = this.props;

    const usdAmount = (amount * usdPrice).toFixed(2);

    return (
      <Container>
        <FormFields>
          <Amount>{amount.length ? amount : '0'}</Amount>
          <Asset>{asset.toUpperCase()}</Asset>
          <UsdAmount>≈ ${usdAmount} USD</UsdAmount>

          <Amount onPress={this.showActionSheet}>Change asset</Amount>
        </FormFields>

        <Keyboard
          onChange={this.handleKeyboardChange}
          value={amount}
          withDecimals
        />

        <SubmitButton
          disabled={!valid}
          onPress={this.submitAmount}
          title={t('sendFunds.submitButton')}
        />

        <ActionSheet
          ref={this.setActionSheetRef}
          cancelButtonIndex={0}
          destructiveButtonIndex={3}
          onPress={this.handleAssetChange}
          options={this.options}
          title={t('addFunds.selectWallet.title')}
        />
      </Container>
    );
  }
}

export default SendFunds;
