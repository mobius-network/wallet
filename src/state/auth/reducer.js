import { createReducer, merge } from 'redux-boost';

import { accountActions } from '../account/reducer';
import { authActions } from './actions';

export * from './actions';

const initialState = {
  loggedIn: false,
  wallet: null,
  mnemonic: undefined,
  keystore: undefined,
  accountFunded: false,
  isNeedToShowCredetialAlert: false,
};

export const authReducer = createReducer(
  {
    [authActions.set]: (state, payload) => merge(state, payload),

    [authActions.loginSuccess]: state =>
      merge(state, {
        loggedIn: true,
      }),
    [authActions.logout]: () => initialState,

    [accountActions.setMasterAccount]: (state, masterAccount) => {
      if (masterAccount) {
        return merge(state, { accountFunded: true });
      }

      return state;
    },
  },
  initialState
);
