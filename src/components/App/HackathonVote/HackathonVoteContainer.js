import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { createStructuredSelector } from 'reselect';

import { sendActions } from 'state/send';

import HackathonVote from './HackathonVote';

const mapStateToProps = createStructuredSelector({});

const actions = {
  ...sendActions,
};

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  translate('translation')
)(HackathonVote);
