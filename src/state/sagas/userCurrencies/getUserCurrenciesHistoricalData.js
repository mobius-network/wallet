import {
  takeLatest, call, select, put, all,
} from 'redux-saga/effects';
import { userCurrenciesActions } from 'state/userCurrencies';
import { currenciesActions } from 'state/currencies';
import HistoricalPriceAPI from 'core/services/historical';
import { historyActions } from 'state/history/actions';
import { getUserCurrenciesSymbols } from '../../userCurrencies';

const historicalClient = new HistoricalPriceAPI();

function* getHistoricalData() {
  try {
    const userCurrenciesSymbols = yield select(getUserCurrenciesSymbols);
    const userCurrenciesHistoricalDataRequestEffects = userCurrenciesSymbols.reduce(
      (effects, symbol) => ({
        ...effects,
        [symbol]: call(historicalClient.getHistoricalData, symbol),
      }),
      {}
    );
    const userCurrenciesHistoricalDataResults = yield all(
      userCurrenciesHistoricalDataRequestEffects
    );
    const userCurrenciesHistoricalData = Object.keys(
      userCurrenciesHistoricalDataResults
    ).reduce(
      (data, symbol) => ({
        ...data,
        [symbol]: userCurrenciesHistoricalDataResults[symbol].data.Data,
      }),
      {}
    );
    yield put(historyActions.setHistory(userCurrenciesHistoricalData));
  } catch (error) {
    console.log(error);
  }
}

function* getUserCurrenciesHistorialData() {
  return yield call(getHistoricalData);
}

export const refreshHistoryWhenCurrencySetSaga = takeLatest(
  currenciesActions.setCurrencies,
  getUserCurrenciesHistorialData
);

export const refreshHistoryWhenUserCurrenciesSetSaga = takeLatest(
  userCurrenciesActions.setUserCurrencies,
  getUserCurrenciesHistorialData
);

export const refreshHistoryWhenUserCurrencyAddedSaga = takeLatest(
  userCurrenciesActions.addUserCurrency,
  getUserCurrenciesHistorialData
);
