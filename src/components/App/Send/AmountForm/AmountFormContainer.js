import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { getAssetPrice } from 'state/prices';
import { getAssetBalance } from 'state/account';
import { sendActions, getAsset } from 'state/send';

import AmountForm from './AmountForm';

const mapStateToProps = (state) => {
  const asset = getAsset(state);

  return {
    asset,
    balance: getAssetBalance(state, { asset }),
    usdPrice: getAssetPrice(state, { sellAsset: asset }),
  };
};

const mapDispatchToProps = {
  ...sendActions,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  translate('translation')
)(AmountForm);
