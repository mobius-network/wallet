import { ErrorTyper } from '../errortyper';

test('test utils/errorTyper.isNetworkError', () => {
  const networkError = new Error('Error: Network Error');
  const otherError = new Error('Error: Foo Bar Baz');

  const errorTyper1 = new ErrorTyper(networkError);
  const errorTyper2 = new ErrorTyper(otherError);

  expect(errorTyper1.isNetworkError).toBe(true);
  expect(errorTyper2.isNetworkError).toBe(false);
});

test('test utils/errorTyper.isInsufficientBalance', () => {
  const error1 = {
    response: {
      data: {
        extras: {
          result_codes: {
            transaction: 'tx_insufficient_balance',
          },
        },
      },
    },
  };

  const error2 = {
    response: {
      data: {
        extras: {
          result_codes: {
            transaction: 'other',
          },
        },
      },
    },
  };

  const error3 = {
    response: {},
  };

  const errorTyper1 = new ErrorTyper(error1);
  const errorTyper2 = new ErrorTyper(error2);
  const errorTyper3 = new ErrorTyper(error3);

  expect(errorTyper1.isInsufficientBalance).toBe(true);
  expect(errorTyper2.isInsufficientBalance).toBe(false);
  expect(errorTyper3.isInsufficientBalance).toBe(undefined);
});
