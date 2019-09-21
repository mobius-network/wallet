import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ActionButton, ButtonRow } from './styles';

class TabSearch extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    t: PropTypes.func.isRequired,
  };

  openAllCurrenciesScreen = () => this.props.navigation.navigate('AllCurrencies');

  openPopularCurrenciesScreen = () => this.props.navigation.navigate('PopularCurrencies');

  render() {
    const { t } = this.props;

    return (
      <ButtonRow>
        <ActionButton
          onPress={this.openAllCurrenciesScreen}
          shape="square"
          testID="DASHBOARD_ALL_CURRENCIES_BUTTON"
          title={t('dashboard.allCurrencies').toUpperCase()}
        />
        <ActionButton
          onPress={this.openSendScreen}
          shape="square"
          testID="DASHBOARD_POPULAR_CURRENCIES_BUTTON"
          title={t('dashboard.popularCurrencies').toUpperCase()}
        />
      </ButtonRow>
    );
  }
}

export default TabSearch;
