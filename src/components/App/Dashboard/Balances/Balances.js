import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FlatList } from 'react-native';
import { BalanceItem } from 'components/shared/Financialtems';
import { getCurrencyIconUri } from 'utils/currency-icon-uri';

class Balances extends Component {
  static propTypes = {
    balances: PropTypes.array,
  };

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
            icon={{ uri: getCurrencyIconUri(id) }}
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
