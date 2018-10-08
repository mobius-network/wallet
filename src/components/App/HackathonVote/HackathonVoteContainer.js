import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { createStructuredSelector } from 'reselect';

import { getMobiBalance } from 'state/account';
import { hackathonVoteActions } from 'state/hackathonVote';

import HackathonVote from './HackathonVote';

const mapStateToProps = createStructuredSelector({
  mobiBalance: getMobiBalance,
});

const actions = {
  ...hackathonVoteActions,
};

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  translate('translation')
)(HackathonVote);
