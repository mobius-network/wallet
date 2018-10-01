import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { translate } from 'react-i18next';
import { createStructuredSelector } from 'reselect';

import { authActions, getMnemonic } from 'state/auth';
import Recovery from './Recovery';

const mapStateToProps = createStructuredSelector({
  mnemonic: getMnemonic,
});

export default compose(
  connect(mapStateToProps),
  translate('translation'),
  reduxForm({
    form: 'recoveryForm',
    onChange: (values, dispatch) => dispatch(authActions.set(values)),
    onSubmit: (values, _, { navigation }) => navigation.navigate('PinSetup', {
      action: ({ dispatch }) => dispatch(authActions.recoveryFinish()),
    }),
  })
)(Recovery);
