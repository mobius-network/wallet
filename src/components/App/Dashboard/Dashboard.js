import React, { Component } from 'react';

import Balances from './Balances';

import {
  Container,
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
      <Container>
        <Gradient>
          <Title>Current Balance</Title>

          <BalanceContainer>
            <CurrencySymbol>$</CurrencySymbol>
            <BalanceAmount>{balanceAmount}</BalanceAmount>
          </BalanceContainer>
        </Gradient>

        <Balances />
      </Container>
    );
  }
}

export default Dashboard;
