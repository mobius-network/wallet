import { createActions } from 'redux-yo';

export const appActions = createActions(
  ['setCodePushLabel', 'setHackathonVote', 'sendHackathonVote'],
  'app'
);
