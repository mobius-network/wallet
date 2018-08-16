import { requestActions } from 'redux-boost';
import { takeLatest, put, select } from 'redux-saga/effects';
import { submitOperation } from '@mobius-network/core';

import { accountActions } from '../account/reducer';
import { getKeypairFor } from '../auth/selectors';
import { getMasterAccount } from '../account/selectors';

function* transact({ payload: { operation, name }, meta }) {
  const account = yield select(getMasterAccount);
  const keypair = yield select(getKeypairFor);

  yield put(
    requestActions.fetchStart(
      {
        name,
        fetcher: submitOperation,
        payload: [operation, account, keypair],
      },
      meta
    )
  );
}

export default takeLatest(accountActions.transact, transact);
