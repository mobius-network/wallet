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
    navigation: PropTypes.shape({
      openDrawer: PropTypes.func.isRequired,
    }).isRequired,

    t: PropTypes.func.isRequired,

    usdBalance: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
  };

  handleMenuButtonClick = () => this.props.navigation.openDrawer();

  render() {
    const { t, usdBalance } = this.props;

    return (
      <Gradient>
        <Menu onPress={this.handleMenuButtonClick}>
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
