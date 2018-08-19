import { combineReducers } from 'redux';
import { dataReducer, requestsReducer } from 'redux-boost';
import { AsyncStorage } from 'react-native';
import { persistReducer } from 'redux-persist';
import { reducer as formReducer } from 'redux-form';

import { accountReducer } from './account';
import { authReducer } from './auth';
import { notificationsReducer } from './notifications';
import { transfersReducer } from './transfers';
import { pricesReducer } from './prices';

const rootReducer = combineReducers({
  form: formReducer,
  data: dataReducer,
  requests: requestsReducer,

  prices: pricesReducer,
  auth: authReducer,
  masterAccount: accountReducer,
  notifications: notificationsReducer,
  transfers: transfersReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

export default () => persistReducer(persistConfig, rootReducer);
