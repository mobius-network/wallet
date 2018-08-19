import { capitalize } from 'lodash';
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

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
    // name: PropTypes.string.isRequired,
  };

  render() {
    const {
      asset, amount, usdAmount, usdPrice,
    } = this.props;

    return (
      <Container>
        <CurrencyIcon size={40} name={`currency${capitalize(asset)}`} />

        <AssetInfo>
          <Asset>{asset}</Asset>
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
