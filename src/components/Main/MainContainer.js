import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { translate } from 'react-i18next';

import {
  appActions,
  getIsNeedToShowCredetialAlert,
  getIsSettingsLoaded,
} from 'state/app';

import Main from './Main';

const mapStateToProps = createStructuredSelector({
  isSettingsLoaded: getIsSettingsLoaded,
  isNeedToShowCredetialAlert: getIsNeedToShowCredetialAlert,
});

const actions = {
  ...appActions,
};

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  translate('translation')
)(Main);
