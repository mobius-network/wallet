import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  BalanceAmount,
  BalanceContainer,
  CurrencySymbol,
  Gradient,
  Menu,
  MenuIcon,
  Title,
} from './styles';

class CurrentBalance extends Component {
  static propTypes = {
    onMenuPress: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,

    usdBalance: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
  };

  render() {
    const { t, usdBalance, onMenuPress } = this.props;

    return (
      <Gradient>
        <Menu onPress={onMenuPress}>
          <MenuIcon />
        </Menu>

        <Title>{t('dashboard.title')}</Title>

        <BalanceContainer>
          <CurrencySymbol>$</CurrencySymbol>
          <BalanceAmount>{usdBalance}</BalanceAmount>
        </BalanceContainer>
      </Gradient>
    );
  }
}

export default CurrentBalance;
