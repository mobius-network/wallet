import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { authActions, getIsAuthorized } from 'state/auth';

import Welcome from './Welcome';

const mapStateToProps = createStructuredSelector({
  isAuthorized: getIsAuthorized,
});

const actions = {
  ...authActions,
};

export default connect(
  mapStateToProps,
  actions
)(Welcome);
