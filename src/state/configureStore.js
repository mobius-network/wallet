import axios from 'axios';
import { createStore, applyMiddleware, compose } from 'redux';
import { boostStore, createRequestMiddleware } from 'redux-boost';
import createSagaMiddleware from 'redux-saga';
import eventFilterMiddleware from 'event-filter-redux-middleware';

import { apiUrl } from 'utils';
import { isDev } from 'utils/env';
import getReducer from './reducer';

const sagaMiddleware = typeof createSagaMiddleware === 'function'
  ? createSagaMiddleware()
  : createSagaMiddleware.default();

function enhance(middlewareArray = []) {
  let composeEnhancers = compose;
  const middlewares = middlewareArray;

  if (isDev) {
    // eslint-disable-next-line no-underscore-dangle
    const extCompose = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

    const devtoolsCompose = extCompose
      && extCompose({
        // actionsBlacklist: ['account/setMasterAccount', 'apps/setAppAccount'],
      });

    composeEnhancers = devtoolsCompose || compose;

    if (!devtoolsCompose) {
      const { createLogger } = require('redux-logger');

      middlewares.push(createLogger({ collapsed: true }));
    }
  }

  const enhancers = [applyMiddleware(...middlewares)];

  return composeEnhancers(...enhancers)(createStore);
}

function makeStore(initialState = {}) {
  const createStoreWithMiddleware = enhance([
    sagaMiddleware,
    eventFilterMiddleware,
    createRequestMiddleware({
      executor: axios.create({
        baseURL: `${apiUrl}/`,
      }),
    }),
  ]);

  const store = createStoreWithMiddleware(getReducer(), initialState);

  store.runSaga = sagaMiddleware.run;

  return store;
}

const store = makeStore();

boostStore(store);

export default store;
