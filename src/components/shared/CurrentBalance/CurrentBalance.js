import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  BalanceAmount,
  BalanceContainer,
  CurrencySymbol,
  Title,
} from './styles';

class CurrentBalance extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,

    usdBalance: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
  };

  render() {
    const { t, usdBalance } = this.props;

    return (
      <Container>
        <Title>{t('dashboard.title')}</Title>

        <BalanceContainer>
          <CurrencySymbol>$</CurrencySymbol>
          <BalanceAmount>{usdBalance}</BalanceAmount>
        </BalanceContainer>
      </Container>
    );
  }
}

export default CurrentBalance;
