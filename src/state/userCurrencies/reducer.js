import updateSource from 'immutability-helper';
import { createReducer } from 'redux-yo';

import { userCurrenciesActions } from './actions';

const initialState = new Set([]);

updateSource.extend('$toggleId', (value, set) => {
  if (set.has(value)) {
    set.delete(value);
  } else {
    set.add(value);
  }
  return new Set([...set]);
});

export const userCurrenciesReducer = createReducer(
  {
    [userCurrenciesActions.setUserCurrencies]: (state, currenciesIds) => updateSource(state, {
      $set: new Set(currenciesIds),
    }),
    [userCurrenciesActions.addUserCurrency]: (state, currencyId) => updateSource(state, {
      $toggleId: currencyId,
    }),
  },
  initialState
);
