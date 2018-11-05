import updateSource from 'immutability-helper';
import { createReducer } from 'redux-yo';

import { currenciesActions } from './actions';

const initialState = {
  searchQuery: '',
  currenciesAvailable: {},
};

export const currenciesReducer = createReducer(
  {
    [currenciesActions.setCurrencies]: (state, currencies) => {
      const updates = currencies.reduce(
        (acc, currency) => {
          const id = currency.id.toString();
          acc.currenciesAvailable[id] = {
            $set: {
              id,
              quote: currency.quote,
              symbol: currency.symbol,
              name: currency.name,
            },
          };
          return acc;
        },
        { currenciesAvailable: {} }
      );
      return updateSource(state, updates);
    },
    [currenciesActions.setSearchQuery]: (state, searchQuery) => updateSource(state, {
      searchQuery: { $set: searchQuery },
    }),
    [currenciesActions.clearSearchQuery]: state => updateSource(state, {
      searchQuery: { $set: '' },
    }),
  },
  initialState
);
