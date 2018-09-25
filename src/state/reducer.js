import { combineReducers } from 'redux';
import { dataReducer, requestsReducer } from 'redux-boost';
import { reducer as formReducer } from 'redux-form';

import { accountReducer } from './account';
import { authReducer } from './auth';
import { notificationsReducer } from './notifications';
import { pricesReducer } from './prices';
import { sendReducer } from './send';
import { transfersReducer } from './transfers';

const rootReducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
  form: formReducer,
  masterAccount: accountReducer,
  notifications: notificationsReducer,
  prices: pricesReducer,
  requests: requestsReducer,
  send: sendReducer,
  transfers: transfersReducer,
});

export default () => rootReducer;
