import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import BalanceItem from './BalanceItem';

import { Container } from './styles';

class Balances extends Component {
  static propTypes = {
    balances: PropTypes.array,
  };

  render() {
    const { balances, history } = this.props;

    return (
      <ScrollView contentContainerStyle={Container}>
        {balances.map((balance) => {
          const historicalData = history ? history[balance.asset] : null;
          return (
            <BalanceItem
              key={balance.asset}
              {...balance}
              history={historicalData}
            />
          );
        })}
      </ScrollView>
    );
  }
}

export default Balances;
