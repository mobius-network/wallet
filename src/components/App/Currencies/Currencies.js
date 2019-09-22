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
      navigate: PropTypes.func.isRequired,
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

  handleBack = () => this.props.navigation.navigate('Dashboard');

  render() {
    const {
      t, setSearchQuery, searchQuery, navigation,
    } = this.props;
    return (
      <Container>
        <Header
          onBackButtonClick={this.handleBack}
          onSearchTextChange={typedCoinName => setSearchQuery(typedCoinName)}
          t={t}
          text={searchQuery}
        />
        <CurrenciesList onCurrencySelected={this.selectCurrency} />
        <TabSearch navigation={navigation} />
      </Container>
    );
  }
}

export default Currencies;
