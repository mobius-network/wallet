import { merge } from 'state/utils';
import { createReducer } from 'redux-yo';

import { pricesActions } from './actions';

/*
 * mobi: {
 *   usd: 0.123123,
 * },
 */
const initialState = {};

export const pricesReducer = createReducer(
  {
    [pricesActions.setQuotes]: (state, { symbol, quotes }) =>
      merge(state, {
        [symbol.toLowerCase()]: Object.keys(quotes).reduce(
          (acc, key) => ({
            ...acc,
            [key.toLowerCase()]: quotes[key].price,
          }),
          {}
        ),
      }),
  },
  initialState
);
