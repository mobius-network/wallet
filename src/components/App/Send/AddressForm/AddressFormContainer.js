import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { translate } from 'react-i18next';

import {
  sendActions,
  getAmount,
  getAsset,
  getDestination,
  getMemo,
} from 'state/send';
import { getUsdPrice } from 'state/prices';

import AddressForm from './AddressForm';

const mapStateToProps = (state) => {
  const amount = getAmount(state);
  const asset = getAsset(state);
  const destination = getDestination(state);
  const memo = getMemo(state);

  return {
    amount,
    asset,
    destination,
    memo,
    usdAmount: getUsdPrice(state, {
      sellAsset: asset,
      sellAmount: amount,
    }),
  };
};

export default compose(
  connect(mapStateToProps),
  translate('translation'),
  reduxForm({
    form: 'addressForm',
    onChange: (values, dispatch) => dispatch(sendActions.setFormData(values)),
    onSubmit: (values, dispatch) => dispatch(sendActions.sendStart(values)),
  })
)(AddressForm);
