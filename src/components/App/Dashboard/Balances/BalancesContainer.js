import { connect } from 'react-redux';

import { getUserCurrenciesBalances } from 'state/userCurrencies';

import Balances from './Balances';

const mapStateToProps = state => ({
  balances: getUserCurrenciesBalances(state, {
    buyAsset: 'USD',
  }),
});

export default connect(mapStateToProps)(Balances);
