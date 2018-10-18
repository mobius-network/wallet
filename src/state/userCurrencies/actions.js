import { createActions } from 'redux-yo';

export const userCurrenciesActions = createActions(
  ['setUserCurrencies', 'addUserCurrency'],
  'userCurrencies'
);
