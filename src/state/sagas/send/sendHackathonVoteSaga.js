import { takeLatest, call, select } from 'redux-saga/effects';
import { Memo, Operation, TransactionBuilder } from 'stellar-sdk';
import crypto from 'crypto';
import {
  HACKATHON_VOTING_SECRET,
  HACKATHON_VOTING_ACCOUNT,
} from 'react-native-dotenv';

import { assets, safeLoadAccount, submitTransaction } from 'core';

import i18n from 'utils/i18n';
import { trackEvent } from 'utils';
import navigator from 'state/navigator';
import { getMasterAccount } from 'state/account';
import { getKeypairFor } from 'state/auth';
import { sendActions } from 'state/send';

export function createMemoHash(number, pubkey) {
  const value = `${number}${pubkey}${HACKATHON_VOTING_SECRET}`;

  return crypto
    .createHash('sha256')
    .update(value)
    .digest('hex');
}

function* run(args) {
  try {
    const { payload } = args;

    yield call(navigator.navigate, 'HackathonVote', 'Loading');

    const destination = HACKATHON_VOTING_ACCOUNT;

    const account = yield select(getMasterAccount);
    const keypair = yield select(getKeypairFor);

    const paymentOp = Operation.payment({
      destination,
      amount: '0.0000001',
      asset: assets.xlm,
    });

    let tx = new TransactionBuilder(account);

    tx = tx.addMemo(Memo.hash(createMemoHash(payload, keypair.publicKey())));
    tx = tx.addOperation(paymentOp).build();
    tx.sign(keypair);

    yield call(safeLoadAccount, destination);
    yield call(submitTransaction, tx);

    yield call(navigator.navigate, 'HackathonVote', 'Notice', {
      action: ({ navigate }) => navigate('Dashboard'),
      type: 'success',
      message: i18n.t('send.success.message'),
    });

    trackEvent('HackathonVote::Success');
  } catch (error) {
    yield call(navigator.navigate, 'HackathonVote', 'Notice', {
      action: ({ dispatch }) => dispatch(sendActions.sendHackathonVote(args)),
      goBackAction: ({ navigate }) => navigate('Dashboard'),
      type: 'error',
      message: i18n.t('notice.error.defaultMessage'),
    });

    trackEvent('HackathonVote::Error');
  }
}

export default takeLatest(sendActions.sendHackathonVote, run);
