import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { capitalize } from 'lodash';
import { ScrollView } from 'react-native';
import AmountItem from 'components/shared/AmountItem';
import { toFixed } from 'utils';

import { Container } from './styles';

class Balances extends Component {
  static propTypes = {
    balances: PropTypes.array,
    history: PropTypes.shape({
      mobi: PropTypes.array,
      xlm: PropTypes.array,
    }),
  };

  render() {
    const { balances, history } = this.props;
    return (
      <ScrollView contentContainerStyle={Container}>
        {balances.map(({
          asset, usdPrice, usdAmount, amount,
        }) => {
          const historicalData = history ? history[asset] : null;
          return (
            <AmountItem
              key={asset}
              description={`$${usdPrice.toFixed(6)}`}
              history={historicalData}
              icon={`currency${capitalize(asset)}`}
              mainAmount={`$${usdAmount.toFixed(6)}`}
              secondaryAmount={`${toFixed(amount)} ${asset.toUpperCase()}`}
              title={asset.toUpperCase()}
            />
          );
        })}
      </ScrollView>
    );
  }
}

export default Balances;
