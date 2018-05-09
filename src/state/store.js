import { createStore, applyMiddleware, compose } from 'redux';
import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { isDev } from 'core/env';

import rootReducer from './rootReducer';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

function enhance(middlewares = []) {
  let composeEnhancers = compose;

  if (isDev) {
    // eslint-disable-next-line no-underscore-dangle
    const devtoolsCompose = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

    composeEnhancers = devtoolsCompose || compose;

    if (!devtoolsCompose) {
      middlewares.push(logger);
    }
  }

  return composeEnhancers(applyMiddleware(...middlewares), autoRehydrate())(createStore);
}

function makeStore(initialState = {}) {
  const createStoreWithMiddleware = enhance([sagaMiddleware]);
  const store = createStoreWithMiddleware(rootReducer, initialState);

  store.runSaga = sagaMiddleware.run;

  persistStore(store, {
    whitelist: ['auth'],
    storage: AsyncStorage,
  });

  return store;
}

export default makeStore();
