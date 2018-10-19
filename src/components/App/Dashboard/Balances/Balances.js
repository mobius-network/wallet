import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FlatList } from 'react-native';
import { BalanceItem } from 'components/shared/Financialtems';

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
        renderItem={({
          item: {
            id, symbol, name, usdBalance, balance, price,
          },
        }) => (
          <BalanceItem
            key={id}
            balance={balance}
            icon={{ uri: this.genIconUri(id) }}
            price={price}
            symbol={symbol}
            title={name}
            usdBalance={usdBalance}
          />
        )}
      />
    );
  }
}

export default Balances;
