import { transfersReducer, transfersActions } from '../reducer';

test('test state/transfers/reducer transfersActions.resetForm', () => {
  const expected = transfersReducer(undefined, {
    type: transfersActions.setBestPath,
    payload: 'foo',
  });

  expect(expected).toEqual({
    amount: 0,
    asset: 'mobi',
    bestPath: 'foo',
  });
});

test('test state/transfers/reducer transfersActions.saveAmount', () => {
  const expected = transfersReducer(undefined, {
    type: transfersActions.saveAmount,
    payload: '42.12',
  });

  expect(expected).toEqual({
    amount: 42.12,
    asset: 'mobi',
    bestPath: undefined,
  });
});

test('test state/transfers/reducer transfersActions.setAsset', () => {
  const expected = transfersReducer(undefined, {
    type: transfersActions.setAsset,
    payload: 'xlm',
  });

  expect(expected).toEqual({
    amount: 0,
    asset: 'xlm',
    bestPath: undefined,
  });
});
