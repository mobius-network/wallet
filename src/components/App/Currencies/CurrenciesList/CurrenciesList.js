import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import { CurrencyItem } from 'components/shared/Financialtems';
import { getCurrencyIconUri } from 'utils/currency-icon-uri';

class CurrenciesList extends Component {
  static propTypes = {
    currencies: PropTypes.array.isRequired,
    onCurrencySelected: PropTypes.func,
  };

  getUSDPrice = ({ USD: { price } }) => price.toFixed(6);

  // eslint-disable-next-line camelcase
  getUSDChange = ({ USD: { percent_change_24h } }) => (percent_change_24h != null ? percent_change_24h.toFixed(3) : 0);

  render() {
    const { currencies, onCurrencySelected } = this.props;
    const keyedCurrencies = currencies.map(currency => ({
      ...currency,
      key: currency.id,
    }));

    return (
      <FlatList
        data={keyedCurrencies}
        renderItem={({
          item: {
            id, key, symbol, quote, name,
          },
        }) => (
          <CurrencyItem
            key={key}
            description={symbol}
            icon={{ uri: getCurrencyIconUri(id) }}
            onPress={() => onCurrencySelected(id)}
            percentChangeIn24Hours={this.getUSDChange(quote)}
            price={`$${this.getUSDPrice(quote)}`}
            title={name}
          />
        )}
      />
    );
  }
}

export default CurrenciesList;
