import { merge } from 'state/utils';
import { createActions, createReducer } from 'redux-yo';

export const authActions = createActions(['dummy'], 'auth');

const initialState = {
  dummy: undefined,
};

export const authReducer = createReducer(
  {
    [authActions.dummy]: (state, value) => merge(state, {
      value,
    }),
  },
  initialState
);
