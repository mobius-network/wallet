import { connect } from 'react-redux';

import {
  getUserCurrenciesBalances,
  userCurrenciesActions,
} from 'state/userCurrencies';

import Balances from './Balances';

const mapStateToProps = state => ({
  balances: getUserCurrenciesBalances(state, {
    buyAsset: 'USD',
  }),
});

export default connect(
  mapStateToProps,
  userCurrenciesActions
)(Balances);
