import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { createStructuredSelector } from 'reselect';

import { getPublicKeyFor } from 'state/auth';

import AddFunds from './AddFunds';

const mapStateToProps = createStructuredSelector({
  publicKey: getPublicKeyFor,
});

export default compose(
  connect(mapStateToProps),
  translate('translation')
)(AddFunds);
