import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getUsdBalance } from 'state/prices';

import Dashboard from './Dashboard';

const mapStateToProps = createStructuredSelector({
  usdBalance: getUsdBalance,
});

export default connect(
  mapStateToProps,
  null
)(Dashboard);
