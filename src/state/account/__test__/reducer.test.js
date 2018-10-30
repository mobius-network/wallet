import { accountReducer, accountActions } from '../reducer';

test('test state/account/reducer initialState', () => {
  expect(accountReducer(undefined, {})).toEqual(null);
});

test('test state/account/reducer accountActions.setMasterAccount', () => {
  expect(
    accountReducer(undefined, {
      type: accountActions.setMasterAccount,
      payload: { foo: 'bar' },
    })
  ).toEqual({ foo: 'bar' });
});
