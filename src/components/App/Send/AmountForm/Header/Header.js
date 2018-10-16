import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import CustomHeader from 'components/shared/CustomHeader';

import {
  Amount,
  AmountContainer,
  Asset,
  AssetButton,
  AssetButtonContent,
  AssetIcon,
  Content,
  UsdAmount,
} from './styles';

class Header extends PureComponent {
  static propTypes = {
    amount: PropTypes.string.isRequired,
    asset: PropTypes.string.isRequired,
    onBackButtonPress: PropTypes.func.isRequired,
    onPress: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    usdPrice: PropTypes.number.isRequired,
  };

  render() {
    const {
      amount,
      asset,
      onBackButtonPress,
      onPress,
      t,
      usdPrice,
    } = this.props;

    const usdAmount = (amount * usdPrice).toFixed(2);

    return (
      <CustomHeader
        onBackButtonPress={onBackButtonPress}
        title={t('send.amountForm.headerTitle')}
      >
        <Content>
          <AmountContainer>
            <Amount>{amount || 0}</Amount>
            <AssetButton onPress={onPress}>
              <AssetButtonContent>
                <Asset>{asset.toUpperCase()}</Asset>
                <AssetIcon />
              </AssetButtonContent>
            </AssetButton>
          </AmountContainer>

          <UsdAmount>≈ ${usdAmount} USD</UsdAmount>
        </Content>
      </CustomHeader>
    );
  }
}

export default Header;
