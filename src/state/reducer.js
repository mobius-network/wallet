import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { accountReducer } from './account';
import { authReducer } from './auth';
import { notificationsReducer } from './notifications';
import { pricesReducer } from './prices';
import { historyReducer } from './history';
import { sendReducer } from './send';
import { transfersReducer } from './transfers';
import { appReducer } from './app';
import { paymentsReducer } from './payments';
import { currenciesReducer } from './currencies';
import { userCurrenciesReducer } from './userCurrencies';

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  masterAccount: accountReducer,
  notifications: notificationsReducer,
  prices: pricesReducer,
  currencies: currenciesReducer,
  send: sendReducer,
  transfers: transfersReducer,
  userCurrencies: userCurrenciesReducer,
  history: historyReducer,
  app: appReducer,
  payments: paymentsReducer,
});

export default () => rootReducer;
