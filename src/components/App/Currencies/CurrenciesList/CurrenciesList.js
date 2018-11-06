import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import { CurrencyItem } from 'components/shared/Financialtems';
import { getCurrencyIconUri } from 'utils/currency-icon-uri';
import { toFixed } from 'utils';

class CurrenciesList extends Component {
  static propTypes = {
    currencies: PropTypes.array.isRequired,
    onCurrencySelected: PropTypes.func,
    t: PropTypes.func.isRequired,
  };

  getUSDPrice = ({ USD: { price } }) => toFixed(price);

  // eslint-disable-next-line camelcase
  getUSDChange = ({ USD: { percent_change_24h } }) => (percent_change_24h != null ? toFixed(percent_change_24h, 3) : 0);

  render() {
    const { currencies, onCurrencySelected, t } = this.props;

    return (
      <FlatList
        data={currencies}
        keyExtractor={item => item.id}
        renderItem={({
          item: {
            id, symbol, quote, name,
          },
        }) => (
          <CurrencyItem
            key={id}
            description={symbol}
            icon={{ uri: getCurrencyIconUri(id) }}
            onPress={() => onCurrencySelected(id)}
            percentChangeIn24Hours={this.getUSDChange(quote)}
            price={`$${this.getUSDPrice(quote)}`}
            t={t}
            title={name}
          />
        )}
      />
    );
  }
}

export default CurrenciesList;
