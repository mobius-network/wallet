import {
  getAmount, getAsset, getDestination, getMemo,
} from '../selectors';

test('test state/send/selectors.getAmount', () => {
  expect(getAmount({ send: { amount: 'foo' } })).toEqual('foo');
});

test('test state/send/selectors.getAsset', () => {
  expect(getAsset({ send: { asset: 'foo' } })).toEqual('foo');
});

test('test state/send/selectors.getDestination', () => {
  expect(getDestination({ send: { destination: 'foo' } })).toEqual('foo');
});

test('test state/send/selectors.getMemo', () => {
  expect(getMemo({ send: { memo: 'foo' } })).toEqual('foo');
});
