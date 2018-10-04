import { createActions } from 'redux-yo';

export const paymentsActions = createActions(
  ['setPayments', 'watchPayments', 'stopWatchPayments'],
  'payments'
);
