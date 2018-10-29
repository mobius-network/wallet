import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FlatList } from 'react-native';
import { BalanceItem } from 'components/shared/Financialtems';
import { getCurrencyIconUri } from 'utils/currency-icon-uri';

class Balances extends Component {
  static propTypes = {
    balances: PropTypes.array.isRequired,
    removeUserCurrency: PropTypes.func.isRequired,
  };

  render() {
    const { balances } = this.props;

    const keyedBalances = balances
      .map(balance => ({
        ...balance,
        key: balance.id,
      }))
      // Put supported currencies on the top
      .sort((a, b) => {
        if (a.usdBalance === undefined) return 1;
        if (b.usdBalance === undefined) return -1;
        if (a.usdBalance > b.usdBalance) return 1;
        if (a.usdBalance === b.usdBalance) return 0;
        return -1;
      });

    return (
      <FlatList
        data={keyedBalances}
        renderItem={({
          item: {
            id,
            key,
            symbol,
            name,
            usdBalance,
            balance,
            price,
            removable,
          },
        }) => (
          <BalanceItem
            key={key}
            balance={balance}
            icon={{ uri: getCurrencyIconUri(id) }}
            onRemove={() => this.props.removeUserCurrency(id)}
            price={price}
            removable={removable}
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
