import { merge, createActions, createReducer } from 'redux-boost';

export const transfersActions = createActions(
  ['findBestPath', 'setBestPath'],
  'transfers'
);

const initialState = {
  bestPath: undefined,
};

export const transfersReducer = createReducer(
  {
    [transfersActions.setBestPath]: (state, bestPath) =>
      merge(state, {
        bestPath,
      }),
  },
  initialState
);
