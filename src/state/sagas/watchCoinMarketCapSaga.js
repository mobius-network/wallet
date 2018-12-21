import { delay } from 'redux-saga';
import {
  call, cancel, fork, put, take, takeLatest,
} from 'redux-saga/effects';

import {
  COINMARKETCAP_API_URL,
  COINMARKETCAP_API_KEY,
} from 'react-native-dotenv';

import CoinMarketCap from 'core/services/coinmarketcap';
import { currenciesActions } from 'state/currencies/actions';
import { pricesActions } from 'state/prices/actions';

const cmcClient = new CoinMarketCap(
  COINMARKETCAP_API_URL,
  COINMARKETCAP_API_KEY
);

let watcher;
let getCurrenciesTime = 0;
let getCurrenciesData;

function* getPrices() {
  try {
    const {
      data: { data },
    } = yield call(cmcClient.getMarketQuotes);

    yield put(pricesActions.setQuotes(data));
  } catch (error) {
    console.log(error);
  }
}

function* getCurrencies() {
  try {
    const now = new Date().getTime();

    if (now - getCurrenciesTime > 24 * 60 * 60 * 1000) {
      getCurrenciesTime = now;

      const {
        data: { data },
      } = yield call(cmcClient.getCurrencies);

      getCurrenciesData = data;
    }

    yield put(currenciesActions.setCurrencies(getCurrenciesData));
  } catch (error) {
    console.log(error);
  }
}

function* watch(delayDuration = 60000) {
  while (true) {
    yield call(getPrices);
    yield call(getCurrencies);
    yield call(delay, delayDuration);
  }
}

function* stopWatch() {
  yield take(pricesActions.stopWatchPrices);
  yield cancel(watcher);

  watcher = null;
}

function* run() {
  if (watcher) {
    return;
  }

  watcher = yield fork(watch);
  yield fork(stopWatch);
}

export default takeLatest(pricesActions.watchPrices, run);
