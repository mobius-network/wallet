import { createReducer } from 'redux-yo';
import moment from 'moment-timezone';
import { historyActions } from './actions';

const initialState = {};

export const historyReducer = createReducer(
  {
    [historyActions.setHistory]: (state, mobiHistory = [], xlmHistory = []) => {
      const formatData = ({ Data }) => Data.sort((a, b) => a.time - b.time).map((el, idx) => {
        const elCopy = el;
        elCopy.d = moment.unix(el.time);
        elCopy.x = idx + 1;
        return elCopy;
      });
      return {
        ...state,
        mobi: formatData(mobiHistory),
        xlm: formatData(xlmHistory),
      };
    },
  },
  initialState
);
