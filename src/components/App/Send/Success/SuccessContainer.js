import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { createStructuredSelector } from 'reselect';

import {
  sendActions, getAmount, getAsset, getDestination,
} from 'state/send';

import Success from './Success';

const mapStateToProps = createStructuredSelector({
  asset: getAsset,
  amount: getAmount,
  destination: getDestination,
});

const mapDispatchToProps = {
  ...sendActions,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  translate('translation')
)(Success);
