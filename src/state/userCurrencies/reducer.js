/* eslint-disable operator-linebreak */
import updateSource from 'immutability-helper';
import { createReducer } from 'redux-yo';

import { currencies } from 'core/services/coinmarketcap';
import { userCurrenciesActions } from './actions';

const genCurrency = (supported = false) => ({
  supported,
});

const genCurrencies = (ids, supported = false) => ids.reduce(
  (obj, id) => ({
    ...obj,
    [id]: genCurrency(supported),
  }),
  {}
);

const defaultCurrencies = genCurrencies(Object.keys(currencies), true);

const initialState = {
  ...defaultCurrencies,
};

export const userCurrenciesReducer = createReducer(
  {
    [userCurrenciesActions.setUserCurrencies]: (state, currenciesIds) => {
      const userCurrencies = genCurrencies(currenciesIds);
      return updateSource(state, {
        $set: {
          ...userCurrencies,
          ...defaultCurrencies,
        },
      });
    },
    [userCurrenciesActions.addUserCurrency]: (state, currencyId) => updateSource(state, {
      $merge: {
        [currencyId]: genCurrency(),
      },
    }),
    [userCurrenciesActions.removeUserCurrency]: (state, currencyId) => updateSource(state, {
      $unset: [currencyId],
      $merge: defaultCurrencies,
    }),
  },
  initialState
);
