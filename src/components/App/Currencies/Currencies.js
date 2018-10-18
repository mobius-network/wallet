import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CurrenciesList from './CurrenciesList';
import Header from './Header';

import { Container } from './styles';

class Currencies extends Component {
  static propTypes = {
    addUserCurrency: PropTypes.func,
    navigation: PropTypes.shape({
      openDrawer: PropTypes.func.isRequired,
      pop: PropTypes.func.isRequired,
    }).isRequired,
    t: PropTypes.func.isRequired,
  };

  static defaultProps = {
    balanceAmount: 0,
  };

  constructor(props) {
    super(props);
    this.state = { coinName: '' };
  }

  selectCurrency = (currencyId) => {
    this.props.addUserCurrency(currencyId);
    this.handleBack();
  };

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
        <CurrenciesList
          filterSubstring={this.state.coinName}
          onCurrencySelected={this.selectCurrency}
        />
      </Container>
    );
  }
}

export default Currencies;
