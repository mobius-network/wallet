import StellarHDWallet from 'stellar-hd-wallet';
import { REHYDRATE } from 'redux-persist';

import { createReducer, merge } from 'redux-boost';
import { accountActions } from '../account/reducer';
import { authActions } from './actions';

export * from './actions';

export const signupSteps = {
  password: 'password',
  download: 'download',
  mnemonic: 'mnemonic',
};

const initialState = {
  loggedIn: false,
  signupStep: 'password',
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
    [authActions.signupSuccess]: state =>
      merge(state, {
        loggedIn: true,
        mnemonic: undefined,
        keystore: undefined,
      }),
    [authActions.loginSuccess]: state =>
      merge(state, {
        loggedIn: true,
      }),
    [authActions.setSignupStep]: (state, signupStep) =>
      merge(state, { signupStep }),
    [authActions.setKeystore]: (state, keystore) => merge(state, { keystore }),
    [authActions.setMnemonic]: (state, mnemonic) => merge(state, { mnemonic }),
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
