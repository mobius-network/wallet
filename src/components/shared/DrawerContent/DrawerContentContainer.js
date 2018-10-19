import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { createStructuredSelector } from 'reselect';

import { getSecretKeyFor } from 'state/auth';
import { getCodePushLabel } from 'state/app';

import DrawerContent from './DrawerContent';

const mapStateToProps = createStructuredSelector({
  secretKey: getSecretKeyFor,

  codePushLabel: getCodePushLabel,
});

const actions = {};

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  translate('translation')
)(DrawerContent);
