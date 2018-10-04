import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CurrentBalance from 'components/shared/CurrentBalance';
import Balances from './Balances';

import {
  ActionButton,
  ButtonRow,
  Container,
  Gradient,
  Menu,
  MenuIcon,
} from './styles';

class Dashboard extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      openDrawer: PropTypes.func.isRequired,
    }).isRequired,
    stopWatchPrices: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    watchPrices: PropTypes.func.isRequired,
  };

  static defaultProps = {
    balanceAmount: 0,
  };

  componentDidMount() {
    this.props.watchPrices();
  }

  componentWillUnmount() {
    this.props.stopWatchPrices();
  }

  openReceiveScreen = () => this.props.navigation.navigate('AddFunds');

  openSendScreen = () => this.props.navigation.navigate('AmountForm');

  handleMenuButtonClick = () => this.props.navigation.openDrawer();

  render() {
    const { t } = this.props;

    return (
      <Container>
        <Gradient>
          <Menu onPress={this.handleMenuButtonClick}>
            <MenuIcon />
          </Menu>

          <CurrentBalance />
        </Gradient>

        <Balances />

        <ButtonRow>
          <ActionButton
            onPress={this.openReceiveScreen}
            square
            title={t('dashboard.receiveButton').toUpperCase()}
          />
          <ActionButton
            onPress={this.openSendScreen}
            square
            title={t('dashboard.sendButton').toUpperCase()}
          />
        </ButtonRow>
      </Container>
    );
  }
}

export default Dashboard;
