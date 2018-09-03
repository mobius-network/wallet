import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { createStructuredSelector } from 'reselect';

import { getSuccessMessage } from 'state/app';

import Success from './Success';

const mapStateToProps = createStructuredSelector({
  message: getSuccessMessage,
});

export default compose(
  connect(mapStateToProps),
  translate('translation')
)(Success);
