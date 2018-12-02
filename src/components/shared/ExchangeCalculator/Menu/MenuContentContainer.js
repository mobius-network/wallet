import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { currenciesActions } from 'state/currencies';
import { getCurrencyIconUri } from 'utils/currency-icon-uri';
import {
  getCurrencySearchQuery,
  getSearchCurrenciesResults,
} from 'state/currencies/selectors';
import MenuContent from './MenuContent';

const actions = {
  ...currenciesActions,
};

const mapStateToProps = state => ({
  getCurrencyIconUri,
  getSearchQuery: getCurrencySearchQuery(state),
  searchResults: getSearchCurrenciesResults(state),
});

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  translate('translation')
)(MenuContent);
