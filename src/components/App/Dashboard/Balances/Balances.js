import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BalanceItem from './BalanceItem';

import { Container } from './styles';

class Balances extends Component {
  static propTypes = {
    balances: PropTypes.array,
  };

  render() {
    const { balances } = this.props;

    return (
      <Container>
        {balances.map(balance => (
          <BalanceItem key={balance.asset} {...balance} />
        ))}
      </Container>
    );
  }
}

export default Balances;
