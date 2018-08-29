import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Balances from './Balances';

import {
  Container,
  Gradient,
  Title,
  BalanceContainer,
  CurrencySymbol,
  BalanceAmount,
  ActionButton,
} from './styles';

class Dashboard extends Component {
  static propTypes = {
    usdBalance: PropTypes.number.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    t: PropTypes.func.isRequired,
  };

  static defaultProps = {
    balanceAmount: 0,
  };

  handleNavigationClick = () => this.props.navigation.navigate('AddFunds');

  render() {
    const { t, usdBalance } = this.props;

    return (
      <Container>
        <Gradient>
          <Title>{t('dashboard.title')}</Title>

          <BalanceContainer>
            <CurrencySymbol>$</CurrencySymbol>
            <BalanceAmount>{usdBalance}</BalanceAmount>
          </BalanceContainer>
        </Gradient>

        <Balances />

        <ActionButton
          square
          onPress={this.handleNavigationClick}
          title={t('dashboard.receiveButton').toUpperCase()}
        />
      </Container>
    );
  }
}

export default Dashboard;
