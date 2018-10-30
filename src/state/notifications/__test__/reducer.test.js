import { notificationsReducer, notificationsActions } from '../reducer';

test('test state/notifications/reducer notificationsActions.addNotification', () => {
  let expected = notificationsReducer(undefined, {
    type: notificationsActions.addNotification,
    payload: { type: '1', message: '1' },
  });

  expect(expected.length).toEqual(1);

  for (let i = 0; i <= 10; i += 1) {
    expected = notificationsReducer(expected, {
      type: notificationsActions.addNotification,
      payload: { type: i, message: i },
    });
  }

  expect(expected.length).toEqual(5);
});

test('test state/notifications/reducer notificationsActions.deleteNotification', () => {
  const expected = notificationsReducer(
    [{ id: 1, foo: 'bar' }, { id: 42, foo: 'baz' }, { id: 3, foo: 'spam' }],
    {
      type: notificationsActions.deleteNotification,
      payload: { id: 42 },
    }
  );

  expect(expected.length).toEqual(2);
});
