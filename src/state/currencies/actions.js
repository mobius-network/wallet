import { createActions } from 'redux-yo';

export const currenciesActions = createActions(
  ['setQuotes', 'watchPrices', 'stopWatchPrices'],
  'currencies'
);
