import { combineReducers } from 'redux';
import { AsyncStorage } from 'react-native';
import { persistReducer } from 'redux-persist';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

export default () => persistReducer(persistConfig, rootReducer);
