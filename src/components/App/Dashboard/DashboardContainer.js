import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { createStructuredSelector } from 'reselect';

import { getUsdBalance, pricesActions } from 'state/prices';

import Dashboard from './Dashboard';

const mapStateToProps = createStructuredSelector({
  usdBalance: getUsdBalance,
});

const actions = {
  ...pricesActions,
};

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  translate('translation')
)(Dashboard);
