import { createReducer, merge } from 'redux-boost';

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
    [authActions.set]: (state, payload) => merge(state, payload),

    [authActions.loginSuccess]: state =>
      merge(state, {
        loggedIn: true,
      }),

    [authActions.logout]: () => initialState,
  },
  initialState
);
