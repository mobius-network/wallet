import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { createStructuredSelector } from 'reselect';

import { authActions, getIsAuthorized } from 'state/auth';

import PinSetup from './PinSetup';

const mapStateToProps = createStructuredSelector({
  isAuthorized: getIsAuthorized,
});

const actions = {
  ...authActions,
};

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  translate('translation')
)(PinSetup);
