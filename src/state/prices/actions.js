import { createActions } from 'redux-yo';

export const pricesActions = createActions(
  ['setQuotes', 'watchPrices', 'stopWatchPrices'],
  'prices'
);
