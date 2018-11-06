import { createReducer } from 'redux-yo';
import moment from 'moment-timezone';
import { historyActions } from './actions';

const initialState = {};

const formatData = Data => Data.sort((a, b) => a.time - b.time).map((el, idx) => {
  const elCopy = el;
  elCopy.d = moment.unix(el.time);
  elCopy.x = idx + 1;
  return elCopy;
});

export const historyReducer = createReducer(
  {
    [historyActions.setHistory]: (state, currenciesHistoricalData) => Object.keys(currenciesHistoricalData).reduce(
      (data, symbol) => ({
        ...data,
        [symbol.toLowerCase()]: formatData(currenciesHistoricalData[symbol]),
      }),
      state
    ),
  },
  initialState
);
