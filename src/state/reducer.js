import { combineReducers } from 'redux';
import { dataReducer, requestsReducer } from 'redux-boost';
// import { reducer as formReducer } from 'redux-form';

import { accountReducer } from './account';
import { appReducer } from './app';
import { authReducer } from './auth';
import { notificationsReducer } from './notifications';
import { transfersReducer } from './transfers';
import { pricesReducer } from './prices';
import { sendReducer } from './send';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  data: dataReducer,
  // form: formReducer,
  masterAccount: accountReducer,
  notifications: notificationsReducer,
  prices: pricesReducer,
  requests: requestsReducer,
  send: sendReducer,
  transfers: transfersReducer,
});

export default () => rootReducer;
