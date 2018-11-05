import { connect } from 'react-redux';

import { getSearchCurrenciesResults } from 'state/currencies/selectors';
import CurrenciesList from './CurrenciesList';

const mapStateToProps = state => ({
  currencies: getSearchCurrenciesResults(state),
});

export default connect(mapStateToProps)(CurrenciesList);
