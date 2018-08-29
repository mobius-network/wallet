import { combineReducers } from 'redux';
import { dataReducer, requestsReducer } from 'redux-boost';
import { reducer as formReducer } from 'redux-form';

import { appReducer } from './app';
import { accountReducer } from './account';
import { authReducer } from './auth';
import { notificationsReducer } from './notifications';
import { transfersReducer } from './transfers';
import { pricesReducer } from './prices';

const rootReducer = combineReducers({
  form: formReducer,
  data: dataReducer,
  requests: requestsReducer,

  app: appReducer,
  prices: pricesReducer,
  auth: authReducer,
  masterAccount: accountReducer,
  notifications: notificationsReducer,
  transfers: transfersReducer,
});

export default () => rootReducer;
