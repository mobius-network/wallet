import { createActions } from 'redux-yo';

export const appActions = createActions(
  ['launchApp', 'resetKeychain', 'set'],
  'app'
);
