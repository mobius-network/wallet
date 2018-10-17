import { connect } from 'react-redux';

import { authActions } from 'state/auth';

import Currencies from './Currencies';

const mapStateToProps = state => ({
  currencies: Object.keys(state.currencies).map(key => state.currencies[key]),
});

const actions = {
  ...authActions,
};

export default connect(
  mapStateToProps,
  actions
)(Currencies);
