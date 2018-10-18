import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import CurrencyItem from '../../../shared/CurrencyItem/CurrencyItem';

class CurrenciesList extends Component {
  static propTypes = {
    currencies: PropTypes.object.isRequired,
    filterSubstring: PropTypes.string,
    onCurrencySelected: PropTypes.func,
  };

  genIconUri = id => `https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`;

  getUSDPrice = ({ USD: { price } }) => price.toFixed(6);

  // eslint-disable-next-line camelcase
  getUSDChange = ({ USD: { percent_change_24h } }) => (percent_change_24h != null ? percent_change_24h.toFixed(3) : 0);

  render() {
    const { currencies, onCurrencySelected, filterSubstring } = this.props;
    const filteredCurrencies = currencies.filter(
      ({ name, symbol }) => name.toLowerCase().includes(filterSubstring.toLowerCase())
        || symbol.toLowerCase().includes(filterSubstring.toLowerCase())
    );

    return (
      <FlatList
        data={filteredCurrencies}
        renderItem={({
          item: {
            id, symbol, quote, name,
          },
        }) => (
          <CurrencyItem
            key={id}
            description={symbol}
            icon={{ uri: this.genIconUri(id) }}
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
