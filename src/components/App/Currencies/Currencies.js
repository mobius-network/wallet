import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TabSearch from 'components/shared/TabSearch';
import CurrenciesList from './CurrenciesList';
import Header from './Header';

import { Container } from './styles';

class Currencies extends Component {
  static propTypes = {
    addUserCurrency: PropTypes.func,
    clearSearchQuery: PropTypes.func,
    navigation: PropTypes.shape({
      pop: PropTypes.func.isRequired,
    }).isRequired,
    searchQuery: PropTypes.string,
    setSearchQuery: PropTypes.func,
    t: PropTypes.func.isRequired,
  };

  static defaultProps = {
    balanceAmount: 0,
  };

  componentWillUnmount() {
    this.props.clearSearchQuery();
  }

  selectCurrency = (currencyId) => {
    this.props.addUserCurrency(currencyId);
    this.handleBack();
  };

  handleBack = () => this.props.navigation.pop();

  render() {
    const {
      t, setSearchQuery, searchQuery, navigation,
    } = this.props;
    return (
      <Container>
        <TabSearch navigation={navigation} />
        <Header
          onBackButtonClick={this.handleBack}
          onSearchTextChange={typedCoinName => setSearchQuery(typedCoinName)}
          t={t}
          text={searchQuery}
        />
        <CurrenciesList onCurrencySelected={this.selectCurrency} />
      </Container>
    );
  }
}

export default Currencies;
