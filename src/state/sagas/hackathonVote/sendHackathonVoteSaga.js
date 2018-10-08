import { AsyncStorage } from 'react-native';
import {
  takeLatest, call, select, put,
} from 'redux-saga/effects';
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
import { hackathonVoteActions } from 'state/hackathonVote';

export function createMemoHash(number, pubkey) {
  const value = `${number}${pubkey}${HACKATHON_VOTING_SECRET}`;

  return crypto
    .createHash('sha256')
    .update(value)
    .digest('hex');
}

function* saveHackatonVote() {
  yield put(hackathonVoteActions.setHackathonVote());
  yield call(AsyncStorage.setItem, 'isVotedForHackathon', 'true');
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

    const memoHash = createMemoHash(payload, keypair.publicKey());

    tx = tx.addMemo(Memo.hash(memoHash));
    tx = tx.addOperation(paymentOp).build();
    tx.sign(keypair);

    yield call(safeLoadAccount, destination);
    yield call(submitTransaction, tx);

    yield call(saveHackatonVote);

    yield call(navigator.navigate, 'HackathonVote', 'Notice', {
      action: ({ navigate }) => navigate('Dashboard'),
      type: 'success',
      message: i18n.t('hackathonVote.success'),
    });

    trackEvent('HackathonVote::Success');
  } catch (error) {
    yield call(navigator.navigate, 'HackathonVote', 'Notice', {
      action: ({ dispatch }) => dispatch(hackathonVoteActions.sendHackathonVote(args)),
      goBackAction: ({ navigate }) => navigate('Dashboard'),
      type: 'error',
      message: i18n.t('notice.error.defaultMessage'),
    });

    trackEvent('HackathonVote::Error');
  }
}

export default takeLatest(hackathonVoteActions.sendHackathonVote, run);
