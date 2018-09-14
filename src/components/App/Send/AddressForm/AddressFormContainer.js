import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { restMutation } from 'redux-boost';

import { accountActions } from 'state/account';
import { getAmount, getAsset } from 'state/transfers';
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

export default compose(
  connect(mapStateToProps),
  translate('translation'),
  restMutation({
    name: 'withdrawAsset',
    action: accountActions.transact,
  }),
  reduxForm({
    form: 'addressForm',
    validate,
  })
)(AddressForm);
