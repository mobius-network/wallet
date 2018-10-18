import updateSource from 'immutability-helper';
import { createReducer } from 'redux-yo';

import { currenciesActions } from './actions';

const initialState = {};

export const currenciesReducer = createReducer(
  {
    [currenciesActions.setQuotes]: (state, quotes) => {
      const updates = quotes.reduce((acc, quote) => {
        acc[quote.id] = {
          $set: {
            quote: quote.quote,
            id: quote.id,
            symbol: quote.symbol,
            name: quote.name,
          },
        };
        return acc;
      }, {});

      return updateSource(state, updates);
    },
  },
  initialState
);
