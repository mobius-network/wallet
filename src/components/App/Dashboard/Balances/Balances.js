import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FlatList } from 'react-native';
import CurrencyItem from '../../../shared/CurrencyItem/CurrencyItem';

class Balances extends Component {
  static propTypes = {
    balances: PropTypes.array,
  };

  genIconUri = id => `https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`;

  render() {
    const { balances } = this.props;
    return (
      <FlatList
        data={balances}
        renderItem={({ item: { id, symbol, name } }) => (
          <CurrencyItem
            key={id}
            description={symbol}
            icon={{ uri: this.genIconUri(id) }}
            percentChangeIn24Hours={0}
            price={'$0'}
            title={name}
          />
        )}
      />
    );
  }
}
/*
      <Container>
        {balances.map(({
          asset, usdPrice, usdAmount, amount,
        }) => (
          <AmountItem
            key={asset}
            description={`$${usdPrice.toFixed(6)}`}
            icon={`currency${capitalize(asset)}`}
            mainAmount={`$${usdAmount.toFixed(6)}`}
            secondaryAmount={`${toFixed(amount)} ${asset.toUpperCase()}`}
            title={asset.toUpperCase()}
          />
        ))}
      </Container>
 */

export default Balances;
