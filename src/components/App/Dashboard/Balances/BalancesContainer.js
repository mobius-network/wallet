import { connect } from 'react-redux';

import { authActions } from 'state/auth';
import { getUserCurrenciesBalances } from 'state/userCurrencies';

import Balances from './Balances';

const mapStateToProps = state => ({
  balances: getUserCurrenciesBalances(state, {
    buyAsset: 'USD',
  }),
});

const actions = {
  ...authActions,
};

export default connect(
  mapStateToProps,
  actions
)(Balances);
