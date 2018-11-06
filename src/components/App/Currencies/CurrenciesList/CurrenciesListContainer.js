import { connect } from 'react-redux';
import { compose } from 'redux';

import { getSearchCurrenciesResults } from 'state/currencies/selectors';
import { translate } from 'react-i18next';
import CurrenciesList from './CurrenciesList';

const mapStateToProps = state => ({
  currencies: getSearchCurrenciesResults(state),
});

export default compose(
  connect(mapStateToProps),
  translate('translation')
)(CurrenciesList);
