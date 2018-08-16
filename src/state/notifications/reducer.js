// import nanoid from 'nanoid';
import { createActions, createReducer } from 'redux-yo';

export const notificationsActions = createActions(
  ['addNotification', 'deleteNotification'],
  'notifications'
);

const initialState = [];

export const notificationsReducer = createReducer(
  {
    [notificationsActions.addNotification]: (state, { type, message }) => {
      const notification = {
        // TODO: use environment-agnostic ID generator
        id: Math.random(),
        type,
        message,
      };

      return [...state, notification];
    },
    [notificationsActions.deleteNotification]: (state, { id }) =>
      state.filter(notification => notification.id !== id),
  },
  initialState
);
