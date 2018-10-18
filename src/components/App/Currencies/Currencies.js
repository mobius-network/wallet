import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CurrenciesList from './CurrenciesList';
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

  constructor(props) {
    super(props);
    this.state = { coinName: '' };
  }

  componentDidMount() {
    this.props.watchPrices();
  }

  componentWillUnmount() {
    this.props.stopWatchPrices();
  }

  handleBack = () => this.props.navigation.pop();

  render() {
    const { t } = this.props;
    return (
      <Container>
        <Header
          onBackButtonClick={this.handleBack}
          onSearchTextChange={coinName => this.setState({ coinName })}
          t={t}
          text={this.state.coinName}
        />
        <CurrenciesList filterSubstring={this.state.coinName} />
      </Container>
    );
  }
}

export default Currencies;
