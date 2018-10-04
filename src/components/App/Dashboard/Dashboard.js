import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CurrentBalance from 'components/shared/CurrentBalance';
import BottomButtons from 'components/shared/BottomButtons';

import Balances from './Balances';

import {
  Container, Gradient, Menu, MenuIcon,
} from './styles';

class Dashboard extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      openDrawer: PropTypes.func.isRequired,
    }).isRequired,
    stopWatchPrices: PropTypes.func.isRequired,
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

  handleMenuButtonClick = () => this.props.navigation.openDrawer();

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <Gradient>
          <Menu onPress={this.handleMenuButtonClick}>
            <MenuIcon />
          </Menu>

          <CurrentBalance />
        </Gradient>

        <Balances />

        <BottomButtons navigation={navigation} />
      </Container>
    );
  }
}

export default Dashboard;
