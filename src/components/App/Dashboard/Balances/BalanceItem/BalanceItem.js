import { capitalize } from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  CurrencyIcon,
  AssetInfo,
  Asset,
  Price,
  AmountInfo,
  UsdAmount,
  Amount,
} from './styles';

class BalanceItem extends Component {
  static propTypes = {
    amount: PropTypes.number,
    asset: PropTypes.string,
    usdAmount: PropTypes.number,
    usdPrice: PropTypes.number,
  };

  render() {
    const {
      asset, amount, usdAmount, usdPrice,
    } = this.props;

    return (
      <Container>
        <CurrencyIcon name={`currency${capitalize(asset)}`} size={40} />

        <AssetInfo>
          <Asset>{asset.toUpperCase()}</Asset>
          <Price>${usdPrice}</Price>
        </AssetInfo>

        <AmountInfo>
          <UsdAmount>${usdAmount}</UsdAmount>
          <Amount>
            {amount} {asset.toUpperCase()}
          </Amount>
        </AmountInfo>
      </Container>
    );
  }
}

export default BalanceItem;
