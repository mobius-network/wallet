import { appReducer } from '../reducer';

import { appActions } from '../actions';

test('test state/app/reducer initialState', () => {
  expect(appReducer(undefined, {})).toEqual({
    codePushLabel: undefined,
    isVotedForHackathon: false,
  });
});

test('test state/app/reducer appActions.setCodePushLabel', () => {
  expect(
    appReducer(undefined, {
      type: appActions.setCodePushLabel,
      payload: 'v1',
    })
  ).toEqual({
    codePushLabel: 'v1',
    isVotedForHackathon: false,
  });
});

test('test state/app/reducer appActions.setHackathonVote', () => {
  expect(
    appReducer(undefined, {
      type: appActions.setHackathonVote,
    })
  ).toEqual({
    codePushLabel: undefined,
    isVotedForHackathon: true,
  });
});
