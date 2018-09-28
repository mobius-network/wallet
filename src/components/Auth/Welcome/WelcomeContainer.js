import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { authActions } from 'state/auth';
import Welcome from './Welcome';

const mapDispatchToProps = {
  ...authActions,
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  translate('translation')
)(Welcome);
