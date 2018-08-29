import { createReducer, merge } from 'redux-boost';

import { appActions } from './actions';

export * from './actions';

const initialState = {
  hasLaunched: false,
  isPinSetup: false,
  isSettingsLoaded: false,
};

export const appReducer = createReducer(
  {
    [appActions.set]: (state, payload) => merge(state, payload),
  },
  initialState
);
