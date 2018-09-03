import { createReducer, merge } from 'redux-boost';

import { appActions } from './actions';

export * from './actions';

const initialState = {
  successMessage: 'You sent 146 MOBI to the address GCPI...CPJF',
};

export const appReducer = createReducer(
  {
    [appActions.setSuccessMessage]: (state, payload) =>
      merge(state, {
        successMessage: payload,
      }),
  },
  initialState
);
