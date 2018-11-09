import { getCodePushLabel } from '../selectors';

test('test state/app/selectors.getCodePushLabel', () => {
  expect(getCodePushLabel({ app: {} })).toBe('~');
  expect(getCodePushLabel({ app: { codePushLabel: 'v1' } })).toBe('v1');
});
