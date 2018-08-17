import React, { Component } from 'react';

import {
  Gradient,
  Title,
  BalanceContainer,
  CurrencySymbol,
  BalanceAmount,
} from './styles';

class Dashboard extends Component {
  static defaultProps = {
    balanceAmount: 0,
  };

  render() {
    const { balanceAmount } = this.props;

    return (
      <Gradient>
        <Title>Current Balance</Title>

        <BalanceContainer>
          <CurrencySymbol>$</CurrencySymbol>
          <BalanceAmount>{balanceAmount}</BalanceAmount>
        </BalanceContainer>
      </Gradient>
    );
  }
}

export default Dashboard;
