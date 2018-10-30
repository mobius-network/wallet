import { connect } from 'react-redux';

import {
  getUserCurrenciesBalances,
  userCurrenciesActions,
} from 'state/userCurrencies';

import { getAssetChange } from 'state/prices';

import Balances from './Balances';

const mapStateToProps = state => ({
  balances: getUserCurrenciesBalances(state, {
    buyAsset: 'USD',
  }),
  change: getAssetChange(state),
});

export default connect(
  mapStateToProps,
  userCurrenciesActions
)(Balances);
