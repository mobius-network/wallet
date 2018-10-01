import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { createStructuredSelector } from 'reselect';

import Payments from './Payments';

const mapStateToProps = createStructuredSelector({});

const actions = {};

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  translate('translation')
)(Payments);
