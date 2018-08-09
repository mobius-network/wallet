import { createActions } from 'redux-yo';

export const authActions = createActions(
  [
    'loginStart',
    'loginSuccess',
    'signupStart',
    'signupSuccess',
    'logout',
    'watchAccount',
    'set',
    'setMnemonic',
    'setKeystore',
    'setSignupStep',
  ],
  'auth'
);
