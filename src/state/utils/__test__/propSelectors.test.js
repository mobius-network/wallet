import {
  getAsset,
  getSellAsset,
  getBuyAsset,
  getSellAmount,
  getMobiAsset,
  getNativeAsset,
  getFixed,
} from '../propSelectors';

test('test state/utils/propSelectors.getAsset', () => {
  expect(getAsset(undefined, { asset: '$' })).toBe('$');
  expect(getAsset(undefined, { foo: 42 })).toBe('mobi');
});

test('test state/utils/propSelectors.getSellAsset', () => {
  expect(getSellAsset(undefined, { sellAsset: '$' })).toBe('$');
  expect(getSellAsset(undefined, { foo: 42 })).toBe(undefined);
});

test('test state/utils/propSelectors.getBuyAsset', () => {
  expect(getBuyAsset(undefined, { buyAsset: '$' })).toBe('$');
  expect(getBuyAsset(undefined, { foo: 42 })).toBe('usd');
});

test('test state/utils/propSelectors.getSellAmount', () => {
  expect(getSellAmount(undefined, { sellAmount: 42 })).toBe(42);
  expect(getSellAmount(undefined, { foo: 42 })).toBe(0);
});

test('test state/utils/propSelectors.getMobiAsset', () => {
  expect(getMobiAsset(undefined, { foo: 42 })).toBe('mobi');
});

test('test state/utils/propSelectors.getNativeAsset', () => {
  expect(getNativeAsset(undefined, { foo: 42 })).toBe('native');
});

test('test state/utils/propSelectors.getFixed', () => {
  expect(getFixed(undefined, { fixed: 42 })).toBe(42);
  expect(getFixed(undefined, { foo: 42 })).toBe(2);
});
