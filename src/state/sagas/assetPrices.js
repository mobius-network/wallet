import CoinMarketCap from 'coinmarketcap-api';
import { delay } from 'redux-saga';
import {
  takeLatest, all, fork, call, put,
} from 'redux-saga/effects';

import { authActions } from '../auth/reducer';
import { pricesActions } from '../prices/actions';

const currencyIds = {
  mobi: 2429,
  xlm: 512,
};

const marketCapClient = new CoinMarketCap();
const watchers = {};

export function* loadCurrencyPrice(id) {
  const {
    data: { symbol, quotes },
  } = yield call([marketCapClient, marketCapClient.getTicker], {
    id,
    convert: 'USD',
  });

  yield put(pricesActions.setQuotes({ symbol, quotes }));
}

export function* watchCurrencyPrice(id, delayDuration = 10000) {
  while (true) {
    yield call(loadCurrencyPrice, id);
    yield call(delay, delayDuration);
  }
}

export function* loadCurrencyPrices() {
  yield all(
    Object.keys(currencyIds).map(currency => {
      if (!watchers[currency]) {
        return fork(watchCurrencyPrice, currencyIds[currency]);
      }

      return null;
    })
  );
}

export default takeLatest(
  [authActions.loginSuccess, authActions.watchAccount],
  loadCurrencyPrices
);
