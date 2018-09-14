import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  Amount,
  BackButton,
  BackIcon,
  Gradient,
  NavRow,
  SubmitButton,
  SubmitButtonContent,
  Title,
  UsdAmount,
} from './styles';

class Header extends PureComponent {
  static propTypes = {
    amount: PropTypes.string.isRequired,
    asset: PropTypes.string.isRequired,
    onBackButtonClick: PropTypes.func.isRequired,
    onPress: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    usdAmount: PropTypes.number.isRequired,
  };

  render() {
    const {
      amount,
      asset,
      onBackButtonClick,
      onPress,
      t,
      usdAmount,
    } = this.props;

    return (
      <Gradient>
        <NavRow>
          <BackButton onPress={onBackButtonClick}>
            <BackIcon />
          </BackButton>
          <Title>
            <Amount>
              {amount} {asset.toUpperCase()}
            </Amount>
            <UsdAmount>≈ ${usdAmount.toFixed(2)}</UsdAmount>
          </Title>
          <SubmitButton onPress={onPress}>
            <SubmitButtonContent>
              {t('send.addressForm.submitButton')}
            </SubmitButtonContent>
          </SubmitButton>
        </NavRow>
      </Gradient>
    );
  }
}

export default Header;
