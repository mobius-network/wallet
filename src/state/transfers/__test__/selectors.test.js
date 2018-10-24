import {
  transfers, getBestPath, getAmount, getAsset,
} from '../selectors';

test('test state/transfers/selectors.transfers', () => {
  expect(transfers({ transfers: { bar: 'foo' } })).toEqual({ bar: 'foo' });
});

test('test state/transfers/selectors.getBestPath', () => {
  expect(getBestPath({ transfers: { bestPath: 'foo' } })).toEqual('foo');
});

test('test state/transfers/selectors.getAmount', () => {
  expect(getAmount({ transfers: { amount: 'foo' } })).toEqual('foo');
});

test('test state/transfers/selectors.getAsset', () => {
  expect(getAsset({ transfers: { asset: 'foo' } })).toEqual('foo');
});
