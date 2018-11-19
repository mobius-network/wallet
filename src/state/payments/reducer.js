import { createReducer } from 'redux-yo';

import { paymentsActions } from './actions';

const initialState = {
  isLoading: true,
  list: [],
};

const paymentMapper = (payload) => {
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

  return payments;
};

export const paymentsReducer = createReducer(
  {
    [paymentsActions.setPayments]: (state, payload) => {
      const payments = paymentMapper(payload);

      return {
        ...state,
        isLoading: false,
        list: [...state.list, ...payments],
      };
    },

    [paymentsActions.reset]: state => ({
      ...state,
      isLoading: true,
      list: [],
    }),
  },
  initialState
);
