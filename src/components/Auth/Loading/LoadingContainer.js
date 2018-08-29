import { connect } from 'react-redux';

import { authActions } from 'state/auth';

import Loading from './Loading';

const actions = {
  ...authActions,
};

export default connect(
  null,
  actions
)(Loading);
