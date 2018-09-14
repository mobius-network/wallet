import { createActions } from 'redux-yo';

export const sendActions = createActions(
  ['resetForm', 'setAmount', 'setAsset'],
  'send'
);
