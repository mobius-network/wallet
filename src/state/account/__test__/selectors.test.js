import {
  getMasterAccount,
  getBalance,
  getAssetBalance,
  getMobiBalance,
  getNativeBalance,
  getAccountId,
  getAssetValueFixed,
  getMasterTrustlineCreated,
} from '../selectors';

test('test state/account/selectors.getMasterAccount', () => {
  expect(getMasterAccount({ masterAccount: { foo: 'bar' } })).toEqual({
    foo: 'bar',
  });
});

test('test state/account/selectors.getBalance', () => {
  expect(
    getBalance.resultFunc({
      balances: [
        { asset_code: 'XLM', balance: 42 },
        { asset_type: 'MOBI', balance: 1 },
      ],
    })
  ).toEqual({
    xlm: { asset_code: 'XLM', balance: 42 },
    mobi: { asset_type: 'MOBI', balance: 1 },
  });
});

test('test state/account/selectors.getAssetBalance', () => {
  expect(
    getAssetBalance.resultFunc(
      {
        xlm: { asset_code: 'XLM', balance: 42 },
        mobi: { asset_type: 'MOBI', balance: 1 },
      },
      'mobi'
    )
  ).toBe(1);

  expect(
    getAssetBalance.resultFunc(
      {
        xlm: { asset_code: 'XLM', balance: 42 },
      },
      'mobi'
    )
  ).toBe(0);
});

test('test state/account/selectors.getMobiBalance', () => {
  expect(
    getMobiBalance.resultFunc(
      {
        xlm: { asset_code: 'XLM', balance: 42 },
        mobi: { asset_type: 'MOBI', balance: 1 },
      },
      'mobi'
    )
  ).toBe(1);

  expect(
    getMobiBalance.resultFunc(
      {
        xlm: { asset_code: 'XLM', balance: 42 },
      },
      'mobi'
    )
  ).toBe(0);
});

test('test state/account/selectors.getNativeBalance', () => {
  expect(
    getNativeBalance.resultFunc(
      {
        native: { asset_code: 'native', balance: 42 },
        mobi: { asset_type: 'MOBI', balance: 1 },
      },
      'native'
    )
  ).toBe(42);

  expect(
    getNativeBalance.resultFunc(
      {
        xlm: { asset_code: 'XLM', balance: 42 },
      },
      'native'
    )
  ).toBe(0);
});

test('test state/account/selectors.getAccountId', () => {
  expect(getAccountId.resultFunc({ id: 42 })).toBe(42);
});

test('test state/account/selectors.getAssetValueFixed', () => {
  expect(getAssetValueFixed.resultFunc(42.1234, 2)).toBe('42.12');
  expect(getAssetValueFixed.resultFunc(undefined, 2)).toBe(0);
});

test('test state/account/selectors.getMasterTrustlineCreated', () => {
  expect(
    getMasterTrustlineCreated.resultFunc({
      mobi: 'foo',
    })
  ).toBe(true);

  expect(
    getMasterTrustlineCreated.resultFunc({
      xlm: 'foo',
    })
  ).toBe(false);
});
