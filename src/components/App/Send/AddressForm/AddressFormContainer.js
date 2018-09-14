import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { sendActions, getAmount, getAsset } from 'state/send';
import { getUsdPrice } from 'state/prices';

import { validate } from './validations';
import AddressForm from './AddressForm';

const mapStateToProps = (state) => {
  const asset = getAsset(state);
  const amount = getAmount(state);

  return {
    asset,
    amount,
    usdAmount: getUsdPrice(state, {
      sellAsset: asset,
      sellAmount: amount,
    }),
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
  translate('translation'),
  reduxForm({
    form: 'addressForm',
    validate,
    onChange: (values, dispatch) => dispatch(sendActions.setFormData(values)),
  })
)(AddressForm);
