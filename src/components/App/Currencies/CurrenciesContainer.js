import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { userCurrenciesActions } from 'state/userCurrencies';
import { currenciesActions } from 'state/currencies';
import { getCurrencySearchQuery } from 'state/currencies/selectors';
import Currencies from './Currencies';

const actions = {
  ...userCurrenciesActions,
  ...currenciesActions,
};

const mapStateToProps = state => ({
  searchQuery: getCurrencySearchQuery(state),
});

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  translate('translation')
)(Currencies);
