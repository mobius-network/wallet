import {
  getPrices,
  getAssetPrice,
  getUsdPrice,
  getUsdBalance,
} from '../selectors';

test('test state/prices/selectors.getPrices', () => {
  expect(getPrices({ prices: { foo: 'bar' } })).toEqual({ foo: 'bar' });
});

test('test state/prices/selectors.getAssetPrice', () => {
  expect(
    getAssetPrice.resultFunc('mobi', 'usd', {
      mobi: { usd: 4 },
      xlm: { usd: 2 },
    })
  ).toEqual(4);
});

test('test state/prices/selectors.getUsdPrice', () => {
  expect(getUsdPrice.resultFunc(2, 3)).toEqual(6);
});

test('test state/prices/selectors.getUsdBalance', () => {
  expect(
    getUsdBalance.resultFunc({ mobi: { usd: 4 }, xlm: { usd: 2 } })
  ).toEqual(0);

  expect(
    getUsdBalance.resultFunc(
      { mobi: { usd: 42.12345 }, xlm: { usd: 2.007 } },
      {
        native: { asset_code: 'XLM', balance: 42 },
        mobi: { asset_type: 'MOBI', balance: 3 },
      }
    )
  ).toEqual('210.66');
});
