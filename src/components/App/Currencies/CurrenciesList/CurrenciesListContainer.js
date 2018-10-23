import { connect } from 'react-redux';

import CurrenciesList from './CurrenciesList';

const mapStateToProps = state => ({
  currencies: Object.keys(state.currencies)
    .map(key => state.currencies[key])
    .sort(
      (currencyA, currencyB) => (currencyA.quote.USD.market_cap > currencyB.quote.USD.market_cap ? -1 : 1)
    ),
});

export default connect(mapStateToProps)(CurrenciesList);
