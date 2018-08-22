import { createActions } from 'redux-yo';

export const authActions = createActions(
  [
    'loginStart',
    'loginSuccess',
    'signupStart',
    'signupFinish',
    'logout',
    'watchAccount',
    'set',
  ],
  'auth'
);
