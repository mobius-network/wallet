import { createActions } from 'redux-yo';

export const paymentsActions = createActions(
  ['setPayments', 'loadPayments', 'reset'],
  'payments'
);
