import { sendReducer } from '../reducer';

import { sendActions } from '../actions';

test('test state/send/reducer sendActions.resetForm', () => {
  const expected = sendReducer(
    {
      amount: '123',
      asset: 'mobi',
      destination: '0x1',
      memo: '0x2',
    },
    {
      type: sendActions.resetForm,
    }
  );

  expect(expected).toEqual({
    amount: '0',
    asset: 'mobi',
    destination: null,
    memo: null,
  });
});

test('test state/send/reducer sendActions.setAmount', () => {
  const expected = sendReducer(undefined, {
    type: sendActions.setAmount,
    payload: 'foo',
  });

  expect(expected).toEqual({
    amount: 'foo',
    asset: 'mobi',
    destination: null,
    memo: null,
  });
});

test('test state/send/reducer sendActions.setAsset', () => {
  const expected = sendReducer(undefined, {
    type: sendActions.setAsset,
    payload: 'xlm',
  });

  expect(expected).toEqual({
    amount: '0',
    asset: 'xlm',
    destination: null,
    memo: null,
  });
});

test('test state/send/reducer sendActions.setFormData', () => {
  const expected = sendReducer(undefined, {
    type: sendActions.setFormData,
    payload: { destination: 'foo', memo: 'bar' },
  });

  expect(expected).toEqual({
    amount: '0',
    asset: 'mobi',
    destination: 'foo',
    memo: 'bar',
  });
});
