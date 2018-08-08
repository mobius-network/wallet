import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { authActions, getIsAuthorized } from 'state/auth';

import Splash from './Splash';

const mapStateToProps = createStructuredSelector({
  isAuthorized: getIsAuthorized,
});

const actions = {
  ...authActions,
};

export default connect(
  mapStateToProps,
  actions
)(Splash);
