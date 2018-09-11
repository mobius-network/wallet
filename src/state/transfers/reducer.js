import { merge, createActions, createReducer } from 'redux-boost';

export const transfersActions = createActions(
  ['findBestPath', 'setBestPath', 'saveAmount', 'setAsset'],
  'transfers'
);

const initialState = {
  amount: 0,
  asset: 'mobi',
  bestPath: undefined,
};

export const transfersReducer = createReducer(
  {
    [transfersActions.setBestPath]: (state, bestPath) => merge(state, {
      bestPath,
    }),
    [transfersActions.saveAmount]: (state, amount) => merge(state, {
      amount: Number(amount),
    }),
    [transfersActions.setAsset]: (state, asset) => merge(state, {
      asset,
    }),
  },
  initialState
);
