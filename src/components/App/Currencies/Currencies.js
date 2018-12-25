/* eslint-disable */
/* Disabling eslint for handleBack, componentWillMount, and others */

import React, { Component } from 'react';
import { SegmentedControlIOS } from 'react-native';
import PropTypes from 'prop-types';

import * as PopularCoinAPI from 'core/services/popular';

import CurrenciesList from './CurrenciesList';
import Header from './Header';

import { Container, SegmentedControl } from './styles';

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
    popularCoinClient: new PopularCoinAPI.default(),
    segmentedControlStyleAndroid: { height: 36 },
    segmentedControlStyleIOS: { height: 36 },
  };

  state = {
    debounce: false,
    debounceTimeout: 800,
    page: 1,
    pageLimit: 10,
    popularCoins: [],
    segmentTitles: [],
    selectedIndex: 0,
  };

  componentWillMount() {
    const { t } = this.props;

    this.setState({
      segmentTitles: [
        t('currencies.search.all'),
        t('currencies.search.popular'),
      ],
    });
  }

  componentWillUnmount() {
    this.props.clearSearchQuery();
  }

  selectCurrency = currencyId => {
    this.props.addUserCurrency(currencyId);
    this.handleBack();
  };

  handleBack = () => this.props.navigation.pop();

  handlePopularCoinApiResponse = res => {
    let coinList = [];
    if (res.request.status == 200) {
      coinList = JSON.parse(res.request.responseText).Data.map((c, i) => {
        const { CoinInfo, RAW } = c;
        const { FullName, Id, ImageUrl, Name } = CoinInfo;
        const {
          CHANGEPCT24HOUR,
          LASTUPDATE,
          MKTCAP,
          PRICE,
          VOLUME24HOUR,
        } = RAW.USD;

        return {
          id: Id,
          imageUrl: `${res.config.mediaURL}${ImageUrl}`,
          quote: {
            USD: {
              price: PRICE,
              volume_24h: VOLUME24HOUR,
              percent_change_1h: CHANGEPCT24HOUR / 24,
              percent_change_24h: CHANGEPCT24HOUR,
              percent_change_7d: CHANGEPCT24HOUR * 7,
              market_cap: MKTCAP,
              last_updated: LASTUPDATE,
            },
          },
          symbol: Name,
          name: FullName,
        };
      });

      this.setState({
        popularCoins: coinList,
      });
    }
  };

  handleScroll = event => {
    const { page, pageLimit, debounce, debounceTimeout } = this.state;
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const offset = 20;

    if (
      !debounce &&
      layoutMeasurement.height + contentOffset.y >= contentSize.height - offset
    ) {
      this.getPopularCoins(10 * page);
      this.setState({
        debounce: true,
        page: Math.min(pageLimit, page + 1),
      });
      return setTimeout(() => {
        this.setState({
          debounce: false,
        });
      }, debounceTimeout);
    }
    return false;
  };

  getPopularCoins = page => {
    const { popularCoinClient } = this.props;

    return popularCoinClient
      .getPopularData(page)
      .then(this.handlePopularCoinApiResponse);
  };

  _renderSegmentAll() {
    return <CurrenciesList onCurrencySelected={this.selectCurrency} />;
  }

  _renderSegmentPopular() {
    const { handleScroll, selectCurrency, state } = this;
    const { popularCoins } = state;

    return (
      <CurrenciesList
        onCurrencySelected={selectCurrency}
        onScroll={handleScroll}
        sortedCurrencies={popularCoins}
      />
    );
  }

  render() {
    const { _renderSegmentAll, _renderSegmentPopular, props, state } = this;
    const {
      searchQuery,
      segmentedControlStyleAndroid,
      segmentedControlStyleIOS,
      setSearchQuery,
      t,
    } = props;
    const { segmentTitles, selectedIndex } = state;

    return (
      <Container>
        <SegmentedControl>
          <SegmentedControlIOS
            onChange={event => {
              this.setState({
                selectedIndex: event.nativeEvent.selectedSegmentIndex,
              });
              this.getPopularCoins(10);
            }}
            selectedIndex={selectedIndex}
            style={segmentedControlStyleIOS}
            tintColor="white"
            values={segmentTitles}
          />
        </SegmentedControl>
        <Header
          onBackButtonClick={this.handleBack}
          onSearchTextChange={typedCoinName => setSearchQuery(typedCoinName)}
          selectedIndex={selectedIndex}
          t={t}
          text={searchQuery}
        />
        {selectedIndex < 1
          ? _renderSegmentAll.call(this)
          : _renderSegmentPopular.call(this)}
      </Container>
    );
  }
}

export default Currencies;
