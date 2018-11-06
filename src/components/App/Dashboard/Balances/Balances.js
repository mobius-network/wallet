import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BalanceItem } from 'components/shared/Financialtems';
import { getCurrencyIconUri } from 'utils/currency-icon-uri';
import { BalancesList } from './styles';

class Balances extends Component {
  static propTypes = {
    balances: PropTypes.array.isRequired,
    removeUserCurrency: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
  };

  render() {
    const { balances, t } = this.props;
    return (
      <BalancesList
        data={balances}
        keyExtractor={item => item.id}
        renderItem={({
          item: {
            change,
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
            change={change}
            icon={{ uri: getCurrencyIconUri(id) }}
            onRemove={() => this.props.removeUserCurrency(id)}
            price={price}
            removable={removable}
            symbol={symbol}
            t={t}
            title={name}
            usdBalance={usdBalance}
          />
        )}
      />
    );
  }
}

export default Balances;
