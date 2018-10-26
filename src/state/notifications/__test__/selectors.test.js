import { getLastNotification } from '../selectors';

test('test state/notifications/selectors.getLastNotification', () => {
  expect(getLastNotification({ notifications: [1, 2, 3] })).toBe(3);
});
