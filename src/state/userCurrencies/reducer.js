import updateSource from 'immutability-helper';
import { createReducer } from 'redux-yo';

import { userCurrenciesActions } from './actions';

const initialState = [];

export const userCurrenciesReducer = createReducer(
  {
    [userCurrenciesActions.setUserCurrencies]: (state, currenciesIds) => updateSource(state, {
      $set: currenciesIds,
    }),
    [userCurrenciesActions.addUserCurrency]: (state, currencyId) => updateSource(state, {
      $push: [currencyId],
    }),
  },
  initialState
);
