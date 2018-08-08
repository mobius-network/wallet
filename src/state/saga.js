import { fork, all } from 'redux-saga/effects';

// import sagas from './sagas';

export default function* rootSaga() {
  yield all([fork([])]);
}
