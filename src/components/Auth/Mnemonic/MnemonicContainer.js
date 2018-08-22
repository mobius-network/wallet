import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { createStructuredSelector } from 'reselect';

import { authActions, getMnemonic, getMnemonicVariants } from 'state/auth';

import Mnemonic from './Mnemonic';

const mapStateToProps = createStructuredSelector({
  mnemonic: getMnemonic,
  mnemonicVariants: getMnemonicVariants,
});

const actions = {
  ...authActions,
};

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  translate('translation')
)(Mnemonic);
