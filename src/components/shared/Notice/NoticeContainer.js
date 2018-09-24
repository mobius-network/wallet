import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import Notice from './Notice';

export default compose(
  connect(),
  translate('translation')
)(Notice);
