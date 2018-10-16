import updateSource from 'immutability-helper';
import { createReducer } from 'redux-yo';
import moment from 'moment-timezone';
import { currencies } from 'core/services/coinmarketcap';
import { pricesActions } from './actions';

const initialState = {};

export const pricesReducer = createReducer(
  {
    [pricesActions.setQuotes]: (state, quotes) => {
      const updates = Object.keys(quotes).reduce((acc, key) => {
        const assetName = currencies[key];
        const {
          quote: { USD },
        } = quotes[key];

        acc[assetName] = { usd: USD.price };

        return acc;
      }, {});

      return updateSource(state, {
        $merge: updates,
      });
    },
    [pricesActions.setHistory]: (state, mobiHistory = [], xlmHistory = []) => {
      const formatData = ({ Data }) => Data.sort((a, b) => a.time - b.time).map((el, idx) => {
        const elCopy = el;
        const d = moment.unix(el.time);
        elCopy.labelDate = `${d.month() + 1}/${d.date() + 1}`;
        elCopy.x = idx + 1;
        return elCopy;
      });
      return {
        ...state,
        history: {
          mobi: formatData(mobiHistory),
          xlm: formatData(xlmHistory),
        },
      };
    },
  },
  initialState
);
