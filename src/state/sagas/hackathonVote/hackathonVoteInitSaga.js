import { AsyncStorage } from 'react-native';
import { call, put } from 'redux-saga/effects';
import { hackathonVoteActions } from 'state/hackathonVote';
import { isNil } from 'lodash';

function* loadHackatonVote() {
  const hackathonVote = yield call(AsyncStorage.getItem, 'isVotedForHackathon');

  if (isNil(hackathonVote)) return false;
  return true;
}

export default function* hackathonVoteInitSaga() {
  const isVotedForHackathon = yield call(loadHackatonVote);

  if (isVotedForHackathon) {
    yield put(hackathonVoteActions.setHackathonVote());
  }
}
