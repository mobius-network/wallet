import { takeLatest, call, select } from 'redux-saga/effects';
import { submitOperation } from 'core';

import { accountActions } from '../account/reducer';
import { getKeypairFor } from '../auth/selectors';
import { getMasterAccount } from '../account/selectors';

function* transact({ payload: { operation } }) {
  const account = yield select(getMasterAccount);
  const keypair = yield select(getKeypairFor);

  yield call(submitOperation, operation, account, keypair);
}

export default takeLatest(accountActions.transact, transact);
