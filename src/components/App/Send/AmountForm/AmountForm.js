import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ActionSheet from 'react-native-custom-actionsheet';

import Keyboard from 'components/shared/Keyboard';
import Button from 'components/shared/Button';

import Header from './Header';

import { Container, KeyboardContainer, ButtonContainer } from './styles';

class AmountForm extends Component {
  static propTypes = {
    asset: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    resetForm: PropTypes.func.isRequired,
    setAmount: PropTypes.func,
    setAsset: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    usdPrice: PropTypes.number.isRequired,
  };

  state = {
    amount: '',
    isValid: false,
  };

  submitAmount = () => {
    const { amount } = this.state;
    const { setAmount, navigation } = this.props;

    setAmount(amount);

    navigation.navigate('AddressForm');
  };

  options = [this.props.t('shared.cancel'), 'MOBI', 'XLM'];

  showActionSheet = () => this.actionSheet.show();

  setActionSheetRef = ref => (this.actionSheet = ref);

  handleBack = async () => {
    const { navigation, resetForm } = this.props;

    await navigation.navigate('Dashboard');

    resetForm();
  };

  handleAssetChange = index => this.props.setAsset(this.options[index].toLowerCase());

  handleKeyboardChange = (amount) => {
    const isValid = amount > 0 && amount < this.props.balance;

    this.setState({ amount, isValid });
  };

  render() {
    const { amount, isValid } = this.state;
    const { t, asset, usdPrice } = this.props;

    return (
      <Fragment>
        <Container>
          <Header
            amount={amount}
            asset={asset}
            onBackButtonClick={this.handleBack}
            onPress={this.showActionSheet}
            t={t}
            usdPrice={usdPrice}
          />

          <KeyboardContainer>
            <Keyboard
              maxLength={6}
              onChange={this.handleKeyboardChange}
              value={amount}
              withDecimals
            />
          </KeyboardContainer>

          <ButtonContainer>
            <Button
              disabled={!isValid}
              onPress={this.submitAmount}
              title={t('shared.continue')}
            />
          </ButtonContainer>
        </Container>

        <ActionSheet
          ref={this.setActionSheetRef}
          cancelButtonIndex={0}
          destructiveButtonIndex={3}
          onPress={this.handleAssetChange}
          options={this.options}
          title={t('send.amountForm.selectAssetTitle')}
        />
      </Fragment>
    );
  }
}

export default AmountForm;
