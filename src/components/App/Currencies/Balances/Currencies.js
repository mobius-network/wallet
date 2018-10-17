import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import CurrencyItem from '../../../shared/CurrencyItem/CurrencyItem';

class Currencies extends Component {
  static propTypes = {
    currencies: PropTypes.object,
  };

  genIconUri = id => `https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`;

  getUSDPrice = ({ USD: { price } }) => price.toFixed(6);

  render() {
    const { currencies } = this.props;

    return (
      <FlatList
        data={currencies}
        renderItem={({ item }) => (
          <CurrencyItem
            key={item.id}
            description={item.symbol}
            icon={{ uri: this.genIconUri(item.id) }}
            percentualChangeIn24Hours={parseFloat(
              item.quote.USD.percent_change_24h
            )}
            price={`$${this.getUSDPrice(item.quote)}`}
            title={item.name}
          />
        )}
      />
    );
  }
}

export default Currencies;
