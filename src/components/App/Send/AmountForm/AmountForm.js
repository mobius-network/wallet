import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ActionSheet from 'react-native-custom-actionsheet';

import Keyboard from 'components/shared/Keyboard';
import Button from 'components/shared/Button';
import Alert from 'components/shared/Alert';

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
    const isValidAmountEntered = amount > 0;
    const isAmountLessThanBalance = amount < this.props.balance;

    this.setState({ amount, isValidAmountEntered, isAmountLessThanBalance });
  };

  handleAlertOk = () => {
    this.setState({ isAlertVisible: false });
  };

  handleSubmit = () => {
    const { isValidAmountEntered, isAmountLessThanBalance } = this.state;

    const isValid = isValidAmountEntered && isAmountLessThanBalance;

    if (isValid) {
      this.submitAmount();
    } else {
      this.setState({ isAlertVisible: true });
    }
  };

  render() {
    const { amount, isAlertVisible, isValidAmountEntered } = this.state;
    const {
      t, asset, usdPrice, balance,
    } = this.props;

    return (
      <Fragment>
        <Container>
          <Alert
            buttons={[
              <Button
                key="confirm"
                onPress={this.handleAlertOk}
                padding={false}
                square={true}
                title={t('send.amountForm.ok').toUpperCase()}
                variant="text"
              />,
            ]}
            isVisible={isAlertVisible}
            text={t('send.amountForm.alertText', {
              balance,
              asset: asset.toUpperCase(),
            })}
            title={t('send.amountForm.alertTitle')}
          />

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
              disabled={!isValidAmountEntered}
              onPress={this.handleSubmit}
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
