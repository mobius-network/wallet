import updateSource from 'immutability-helper';
import { createReducer, createActions } from 'redux-yo';

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
    [transfersActions.setBestPath]: (state, bestPath) => updateSource(state, {
      $merge: { bestPath },
    }),
    [transfersActions.saveAmount]: (state, amount) => updateSource(state, {
      $merge: { amount: Number(amount) },
    }),
    [transfersActions.setAsset]: (state, asset) => updateSource(state, {
      $merge: { asset },
    }),
  },
  initialState
);
