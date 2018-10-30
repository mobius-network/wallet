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
import HistoricalPriceAPI from 'core/services/historical';
import { pricesActions } from 'state/prices/actions';
import { historyActions } from 'state/history/actions';

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

function* getCurrencies() {
  try {
    const {
      data: { data },
    } = yield call(cmcClient.getCurrencies);

    yield put(currenciesActions.setCurrencies(data));
  } catch (error) {
    console.log(error);
  }
}

function* getHistoricalData() {
  try {
    const mobiData = yield call(historicalClient.getHistoricalData, 'MOBI');
    const xlmData = yield call(historicalClient.getHistoricalData, 'XLM');
    yield put(historyActions.setHistory(mobiData.data, xlmData.data));
  } catch (error) {
    console.log(error);
  }
}

function* watch(delayDuration = 60000) {
  while (true) {
    yield call(getHistoricalData);
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
