import { createActions } from 'redux-yo';

export const currenciesActions = createActions(
  ['setCurrencies', 'watchPrices', 'stopWatchPrices'],
  'currencies'
);
