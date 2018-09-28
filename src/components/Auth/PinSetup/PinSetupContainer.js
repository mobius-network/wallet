import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import PinSetup from './PinSetup';

export default compose(
  connect(),
  translate('translation')
)(PinSetup);
