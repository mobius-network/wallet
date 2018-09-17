import { takeLatest, call, select } from 'redux-saga/effects';
import { TransactionBuilder, Operation } from 'stellar-sdk';

import { assets, submitTransaction } from 'core';

import { accountActions, getMasterAccount } from 'state/account';
import { getKeypairFor } from 'state/auth';

function* buildTransaction() {
  try {
    const account = yield select(getMasterAccount);

    const keypair = yield select(getKeypairFor);

    const changeTrustOp = Operation.changeTrust({
      asset: assets.mobi,
    });

    const setOptionsOp = Operation.setOptions({
      inflationDest: 'GCCD6AJOYZCUAQLX32ZJF2MKFFAUJ53PVCFQI3RHWKL3V47QYE2BNAUT', // Lumenauts.net inflation pool
      homeDomain: 'wallet.mobius.network',
    });

    const tx = new TransactionBuilder(account)
      .addOperation(changeTrustOp)
      .addOperation(setOptionsOp)
      .build();

    tx.sign(keypair);

    return tx;
  } catch (error) {
    throw new Error(error);
  }
}

function* run() {
  const tx = yield call(buildTransaction);

  yield call(submitTransaction, tx);
}

export default takeLatest(accountActions.createTrustline, run);
