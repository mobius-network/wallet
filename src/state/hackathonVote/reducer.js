import updateSource from 'immutability-helper';
import { createReducer } from 'redux-yo';

import { hackathonVoteActions } from './actions';

const initialState = {
  isVotedForHackathon: false,
};

export const hackathonVoteReducer = createReducer(
  {
    [hackathonVoteActions.setHackathonVote]: state => updateSource(state, { $merge: { isVotedForHackathon: true } }),
  },
  initialState
);
