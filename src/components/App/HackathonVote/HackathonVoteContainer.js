import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { createStructuredSelector } from 'reselect';

import { getMobiBalance } from 'state/account';
import { appActions, getIsVotedForHackathon } from 'state/app';

import HackathonVote from './HackathonVote';

const mapStateToProps = createStructuredSelector({
  mobiBalance: getMobiBalance,

  isVotedForHackathon: getIsVotedForHackathon,
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
)(HackathonVote);
