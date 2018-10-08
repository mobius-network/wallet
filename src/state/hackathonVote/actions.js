import { createActions } from 'redux-yo';

export const hackathonVoteActions = createActions(
  ['setHackathonVote', 'sendHackathonVote'],
  'hackathonVote'
);
