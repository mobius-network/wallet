import { toFixed } from '../numbers';

test('test utils/numbers.toFixed', () => {
  expect(toFixed(1000)).toBe('1000.00');
  expect(toFixed(999.4)).toBe('999.40');
  expect(toFixed(111.22)).toBe('111.22');
  expect(toFixed(0.2200001)).toBe('0.2200001');
  expect(toFixed(123.12345)).toBe('123.12345');
});
