import { paymentsReducer } from '../reducer';

import { paymentsActions } from '../actions';

test('test state/payments/reducer paymentsActions.reset', () => {
  const expected = paymentsReducer(
    { isLoading: false, list: [1, 2, 3] },
    {
      type: paymentsActions.reset,
    }
  );

  expect(expected).toEqual({ isLoading: true, list: [1, 2, 3] }); // ?
});

test('test state/payments/reducer paymentsActions.setPayments', () => {
  const expected = paymentsReducer(undefined, {
    type: paymentsActions.setPayments,
    payload: {
      records: [
        {
          id: 1,
          amount: 2,
          starting_balance: 3,
          asset_type: 'foo',
          asset_code: 'bar',
          from: 1,
          to: 2,
          created_at: '2018-01-01',
          type: 'baz',
        },
        {
          id: 1,
          amount: 2,
          starting_balance: 3,
          asset_type: 'foo',
          asset_code: 'bar',
          from: 1,
          to: 2,
          created_at: '2018-01-01',
          type: 'baz',
        },
        {
          id: 1,
          amount: 2,
          starting_balance: 3,
          asset_type: 'foo',
          asset_code: 'bar',
          from: 1,
          to: 2,
          created_at: '2018-01-01',
          type: 'baz',
        },
      ],
    },
  });

  expect(expected.list[0]).toEqual({
    id: 1,
    amount: 2,
    startingBalance: 3,
    assetType: 'foo',
    assetCode: 'bar',
    from: 1,
    to: 2,
    createdAt: '2018-01-01',
    type: 'baz',
  });

  expect(expected.list.length).toEqual(3);
});
