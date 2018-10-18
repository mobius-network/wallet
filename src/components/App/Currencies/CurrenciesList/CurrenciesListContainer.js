import { connect } from 'react-redux';

import CurrenciesList from './CurrenciesList';

const mapStateToProps = state => ({
  currencies: Object.keys(state.currencies).map(key => state.currencies[key]),
});

export default connect(mapStateToProps)(CurrenciesList);
