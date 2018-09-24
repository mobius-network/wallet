import updateSource from 'immutability-helper';
import { createReducer } from 'redux-yo';

import { sendActions } from './actions';

const initialState = {
  amount: '0',
  asset: 'mobi',
  destination: null,
  memo: null,
};

export const sendReducer = createReducer(
  {
    [sendActions.resetForm]: () => initialState,
    [sendActions.setAmount]: (state, amount) => updateSource(state, {
      $merge: { amount },
    }),
    [sendActions.setAsset]: (state, asset) => updateSource(state, {
      $merge: { asset },
    }),
    [sendActions.setFormData]: (state, formData) => updateSource(state, {
      $merge: formData,
    }),
  },
  initialState
);
