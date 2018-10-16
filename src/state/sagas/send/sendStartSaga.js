import { takeLatest, call, select } from 'redux-saga/effects';
import {
  Memo, MemoText, Operation, TransactionBuilder,
} from 'stellar-sdk';
import { assets, safeLoadAccount, submitTransaction } from 'core';

import i18n, { getMessageByErrorType } from 'utils/i18n';
import { trackEvent, ErrorTyper } from 'utils';
import navigator from 'state/navigator';
import { getMasterAccount } from 'state/account';
import { getKeypairFor } from 'state/auth';
import {
  sendActions,
  getAmount,
  getAsset,
  getDestination,
  getMemo,
} from 'state/send';

function* buildTransaction({
  amount, asset, destination, memo,
}) {
  const account = yield select(getMasterAccount);
  const accountKeypair = yield select(getKeypairFor);

  const paymentOp = Operation.payment({
    destination,
    amount,
    asset: assets[asset],
  });

  let tx = new TransactionBuilder(account);

  if (memo) {
    tx = tx.addMemo(new Memo(MemoText, memo));
  }

  tx = tx.addOperation(paymentOp).build();

  tx.sign(accountKeypair);

  return tx;
}

function* run() {
  try {
    yield call(navigator.navigate, 'Send', 'Loading');

    const amount = yield select(getAmount);
    const asset = yield select(getAsset);
    const destination = yield select(getDestination);
    const memo = yield select(getMemo);

    yield call(safeLoadAccount, destination);

    const tx = yield call(buildTransaction, {
      amount,
      asset,
      destination,
      memo,
    });

    yield call(submitTransaction, tx);

    yield call(navigator.navigate, 'Send', 'Notice', {
      action: ({ navigate }) => navigate('Dashboard'),
      type: 'success',
      message: i18n.t('send.success.message', {
        amount,
        asset: asset.toUpperCase(),
        destination: `${destination.slice(0, 11)}…${destination.slice(-11)}`,
      }),
    });

    trackEvent('Send::Success');
  } catch (error) {
    yield call(navigator.navigate, 'Send', 'Notice', {
      action: ({ dispatch }) => dispatch(sendActions.sendStart()),
      goBackAction: ({ navigate }) => navigate('Dashboard'),
      type: 'error',
      message: getMessageByErrorType(new ErrorTyper(error)),
    });

    trackEvent('Send::Error');
  }
}

export default takeLatest(sendActions.sendStart, run);
