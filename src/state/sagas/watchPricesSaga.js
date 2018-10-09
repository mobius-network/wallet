import { delay } from 'redux-saga';
import {
  call, cancel, fork, put, take, takeLatest,
} from 'redux-saga/effects';
import {
  COINMARKETCAP_API_URL,
  COINMARKETCAP_API_KEY,
} from 'react-native-dotenv';

import CoinMarketCap from 'core/services/coinmarketcap';
import HistoricalPriceAPI from 'core/services/historical';
import { pricesActions } from 'state/prices/actions';

const cmcClient = new CoinMarketCap(
  COINMARKETCAP_API_URL,
  COINMARKETCAP_API_KEY
);

const historicalClient = new HistoricalPriceAPI();

let watcher;

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

function* getHistoricalData() {
  try {
    const mobiData = yield call(historicalClient.getHistoricalData, 'MOBI');
    const xlmData = yield call(historicalClient.getHistoricalData, 'XLM');

    yield put(pricesActions.setHistory(mobiData.data, xlmData.data));
  } catch (error) {
    console.log(error);
  }
}

function* watch(delayDuration = 60000) {
  while (true) {
    yield call(getHistoricalData);
    yield call(getPrices);
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
