import { connect } from 'react-redux';

import { authActions } from 'state/auth';
import { getAssetInfo } from 'state/prices';

import Balances from './Balances';

const mapStateToProps = state => ({
  balances: [
    // TODO: simplify seletors
    getAssetInfo(state, {
      asset: 'mobi',
      sellAsset: 'mobi',
      buyAsset: 'usd',
    }),
    getAssetInfo(state, {
      asset: 'native',
      sellAsset: 'xlm',
      buyAsset: 'usd',
    }),
  ],
});

const actions = {
  ...authActions,
};

export default connect(
  mapStateToProps,
  actions
)(Balances);
