import { appReducer } from '../reducer';

import { appActions } from '../actions';

test('test state/app/reducer initialState', () => {
  expect(appReducer(undefined, {})).toEqual({
    codePushLabel: undefined,
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
  });
});
