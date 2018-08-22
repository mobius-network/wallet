import StellarHDWallet from 'stellar-hd-wallet';
import { REHYDRATE } from 'redux-persist';

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
};

export const authReducer = createReducer(
  {
    [REHYDRATE]: (state, { auth = {} } = {}) => {
      if (auth.wallet) {
        return merge(state, {
          ...auth,
          wallet: StellarHDWallet.fromSeed(auth.wallet.seedHex),
        });
      }

      return merge(state, auth);
    },
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
