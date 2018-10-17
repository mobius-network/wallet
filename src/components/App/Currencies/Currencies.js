import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Balances from './Balances';
import Header from './Header';

import { Container } from './styles';

class Currencies extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      openDrawer: PropTypes.func.isRequired,
      pop: PropTypes.func.isRequired,
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

  handleMenuButtonClick = () => this.props.navigation.openDrawer();

  handleBack = () => this.props.navigation.pop();

  render() {
    const { t } = this.props;

    return (
      <Container>
        <Header onBackButtonClick={this.handleBack} t={t} />
        <Balances />
      </Container>
    );
  }
}

export default Currencies;
