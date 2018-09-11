import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Balances from './Balances';

import {
  ActionButton,
  BalanceAmount,
  BalanceContainer,
  ButtonRow,
  Container,
  CurrencySymbol,
  Gradient,
  Menu,
  MenuIcon,
  Title,
} from './styles';

class Dashboard extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      openDrawer: PropTypes.func.isRequired,
    }).isRequired,
    t: PropTypes.func.isRequired,
    usdBalance: PropTypes.number.isRequired,
  };

  static defaultProps = {
    balanceAmount: 0,
  };

  handleMenuButtonClick = () => this.props.navigation.openDrawer();

  handleNavigationClick = () => this.props.navigation.navigate('AddFunds');

  render() {
    const { t, usdBalance } = this.props;

    return (
      <Container>
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

        <Balances />

        <ButtonRow>
          <ActionButton
            onPress={this.handleNavigationClick}
            square
            title={t('dashboard.receiveButton').toUpperCase()}
          />
        </ButtonRow>
      </Container>
    );
  }
}

export default Dashboard;
