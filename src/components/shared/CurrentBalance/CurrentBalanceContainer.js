import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { createStructuredSelector } from 'reselect';

import { getUsdBalance } from 'state/prices';

import CurrentBalance from './CurrentBalance';

const mapStateToProps = createStructuredSelector({
  usdBalance: getUsdBalance,
});

export default compose(
  connect(
    mapStateToProps,
    {}
  ),
  translate('translation')
)(CurrentBalance);
