import { combineReducers } from 'redux';
import { dataReducer, requestsReducer } from 'redux-boost';

import { accountReducer } from './account';
import { authReducer } from './auth';
import { notificationsReducer } from './notifications';
import { transfersReducer } from './transfers';
import { pricesReducer } from './prices';
import { sendReducer } from './send';

const rootReducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
  masterAccount: accountReducer,
  notifications: notificationsReducer,
  prices: pricesReducer,
  requests: requestsReducer,
  send: sendReducer,
  transfers: transfersReducer,
});

export default () => rootReducer;
