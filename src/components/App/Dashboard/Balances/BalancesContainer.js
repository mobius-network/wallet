import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  getUserCurrenciesBalances,
  userCurrenciesActions,
} from 'state/userCurrencies';
import { getAssetChange } from 'state/prices';
import { translate } from 'react-i18next';
import Balances from './Balances';

const mapStateToProps = state => ({
  balances: getUserCurrenciesBalances(state, {
    buyAsset: 'USD',
  }),
  change: getAssetChange(state),
});

export default compose(
  connect(
    mapStateToProps,
    userCurrenciesActions
  ),
  translate('translation')
)(Balances);
