import { combineReducers } from 'redux';
import { dataReducer, requestsReducer } from 'redux-boost';

import { accountReducer } from './account';
import { authReducer } from './auth';
import { notificationsReducer } from './notifications';
import { transfersReducer } from './transfers';
import { pricesReducer } from './prices';

const rootReducer = combineReducers({
  data: dataReducer,
  requests: requestsReducer,

  prices: pricesReducer,
  auth: authReducer,
  masterAccount: accountReducer,
  notifications: notificationsReducer,
  transfers: transfersReducer,
});

export default () => rootReducer;
