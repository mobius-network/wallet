import { createReducer } from 'redux-yo';

import { paymentsActions } from './actions';

const initialState = {
  isLoading: true,
  list: [],
};

export const paymentsReducer = createReducer(
  {
    [paymentsActions.setPayments]: (state, payload) => {
      const payments = (payload.records || []).map(p => ({
        id: p.id,
        amount: p.amount,
        startingBalance: p.starting_balance,
        assetType: p.asset_type,
        assetCode: p.asset_code,
        from: p.from,
        to: p.to,
        createdAt: p.created_at,
        type: p.type,
      }));

      return {
        ...state,
        isLoading: false,
        list: payments,
      };
    },

    [paymentsActions.reset]: state => ({
      ...state,
      isLoading: true,
    }),
  },
  initialState
);
