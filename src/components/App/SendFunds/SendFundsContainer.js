import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { getAssetPrice } from 'state/prices';
import { getAssetBalance } from 'state/account';
import { transfersActions, getAsset } from 'state/transfers';

import SendFunds from './SendFunds';

const mapStateToProps = (state) => {
  const asset = getAsset(state);

  return {
    asset,
    balance: getAssetBalance(state, { asset }) || 99,
    usdPrice: getAssetPrice(state, { sellAsset: asset }),
  };
};

const mapDispatchToProps = {
  ...transfersActions,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  translate('translation')
)(SendFunds);
