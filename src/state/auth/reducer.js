import updateSource from 'immutability-helper';
import { createReducer } from 'redux-yo';

import { authActions } from './actions';

export * from './actions';

const initialState = {
  loggedIn: false,
  wallet: null,
  mnemonic: undefined,
  accountFunded: false,
};

export const authReducer = createReducer(
  {
    [authActions.set]: (state, payload) => updateSource(state, { $merge: payload }),

    [authActions.loginSuccess]: state => updateSource(state, {
      $merge: { loggedIn: true },
    }),

    [authActions.logout]: () => initialState,
  },
  initialState
);
