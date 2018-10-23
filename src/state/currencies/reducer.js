import updateSource from 'immutability-helper';
import { createReducer } from 'redux-yo';

import { currenciesActions } from './actions';

const initialState = {};

export const currenciesReducer = createReducer(
  {
    [currenciesActions.setCurrencies]: (state, currencies) => {
      const updates = currencies.reduce((acc, currency) => {
        const id = currency.id.toString();
        acc[id] = {
          $set: {
            quote: currency.quote,
            id,
            symbol: currency.symbol,
            name: currency.name,
          },
        };
        return acc;
      }, {});

      return updateSource(state, updates);
    },
  },
  initialState
);
