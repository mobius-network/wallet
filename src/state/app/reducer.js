import updateSource from 'immutability-helper';
import { createReducer } from 'redux-yo';

import { appActions } from './actions';

const initialState = {
  codePushLabel: undefined,

  isVotedForHackathon: false,
};

export const appReducer = createReducer(
  {
    [appActions.setCodePushLabel]: (state, payload) => updateSource(state, { $merge: { codePushLabel: payload } }),
    [appActions.setHackathonVote]: state => updateSource(state, { $merge: { isVotedForHackathon: true } }),
  },
  initialState
);
