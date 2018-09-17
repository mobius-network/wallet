import { takeLatest, call, select } from 'redux-saga/effects';
import {
  Memo, MemoText, Operation, TransactionBuilder,
} from 'stellar-sdk';
import { assets, safeLoadAccount, submitTransaction } from 'core';

import navigator from 'state/navigator';
import { getMasterAccount } from 'state/account';
import { getKeypairFor } from 'state/auth';
import { sendActions, getAmount, getAsset } from 'state/send';

function* buildTransaction(destination, memo) {
  const account = yield select(getMasterAccount);
  const accountKeypair = yield select(getKeypairFor);
  const amount = yield select(getAmount);
  const asset = yield select(getAsset);

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

function* run({ payload: { destination, memo } }) {
  yield call(navigator.navigate, 'Send', 'Loading');

  try {
    yield call(safeLoadAccount, destination);

    const tx = yield call(buildTransaction, destination, memo);

    yield call(submitTransaction, tx);

    yield call(navigator.navigate, 'Send', 'Success');
  } catch (error) {
    yield call(navigator.navigate, 'Send', 'AmountForm');
  }
}

export default takeLatest(sendActions.sendStart, run);
