import { createActions } from 'redux-yo';

export const sendActions = createActions(
  [
    'resetForm',
    'sendFail',
    'sendFinish',
    'sendStart',
    'setAmount',
    'setAsset',
    'setDestination',
    'setMemo',
  ],
  'send'
);
