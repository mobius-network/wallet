import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { capitalize } from 'lodash';

import BalanceItem from 'components/shared/BalanceItem';

import { Container } from './styles';

class Balances extends Component {
  static propTypes = {
    balances: PropTypes.array,
  };

  render() {
    const { balances } = this.props;

    return (
      <Container>
        {balances.map(({
          asset, usdPrice, usdAmount, amount,
        }) => (
          <BalanceItem
            key={asset}
            description={`$${usdPrice.toFixed(6)}`}
            icon={`currency${capitalize(asset)}`}
            mainAmount={`$${usdAmount.toFixed(6)}`}
            secondaryAmount={`${amount} ${asset.toUpperCase()}`}
            title={asset.toUpperCase()}
          />
        ))}
      </Container>
    );
  }
}

export default Balances;
