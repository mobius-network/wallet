import { isLoading, getPayments } from '../selectors';

test('test state/payments/selectors.isLoading', () => {
  expect(isLoading({ payments: { isLoading: true } })).toBe(true);
  expect(isLoading({ payments: { isLoading: false } })).toBe(false);
});

test('test state/payments/selectors.getPayments', () => {
  expect(
    getPayments.resultFunc(
      { publicKey: () => 1 },
      { mobi: { usd: 2 }, xlm: { usd: 3 } },
      [
        {
          id: 1,
          amount: 1,
          startingBalance: 1,
          assetType: 'MOBI',
          assetCode: 'MOBI',
          from: 1,
          to: 2,
          createdAt: '2018-01-01T00:00:00.000Z',
          type: 'foo',
        },
        {
          id: 2,
          amount: 2,
          startingBalance: 2,
          assetType: 'XLM',
          assetCode: 'XLM',
          from: 2,
          to: 1,
          createdAt: '2018-02-02T00:00:00.000Z',
          type: 'bar',
        },
        {
          id: 3,
          amount: 3,
          startingBalance: 3,
          assetType: 'XLM',
          assetCode: 'XLM',
          from: 3,
          to: 1,
          createdAt: '2018-03-03T00:00:00.000Z',
          type: 'create_account',
        },
      ]
    )
  ).toEqual([
    {
      type: 'sent',
      asset: 'mobi',
      amount: 1,
      usdAmount: 2,
      id: 1,
      createdAt: new Date('2018-01-01T00:00:00.000Z'),
    },
    {
      type: 'received',
      asset: 'xlm',
      amount: 2,
      usdAmount: 6,
      id: 2,
      createdAt: new Date('2018-02-02T00:00:00.000Z'),
    },
    {
      type: 'account',
      asset: 'xlm',
      amount: 3,
      usdAmount: 9,
      id: 3,
      createdAt: new Date('2018-03-03T00:00:00.000Z'),
    },
  ]);
});
