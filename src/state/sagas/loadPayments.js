import {
  call, put, takeLatest, select,
} from 'redux-saga/effects';

import { getKeypairFor } from 'state/auth';
import { fetchPayments } from 'core';
import { paymentsActions, getCursorId } from 'state/payments';

function* loadPayments() {
  try {
    const keypair = yield select(getKeypairFor);
    const cursorId = yield select(getCursorId);

    const payments = yield call(fetchPayments, keypair.publicKey(), cursorId);

    yield put(paymentsActions.setPayments(payments));
  } catch (error) {
    console.log(error);
  }
}

export default takeLatest(paymentsActions.loadPayments, loadPayments);
