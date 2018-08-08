import { createActions } from 'redux-yo';
import {
  takeLatest, take, fork, cancel,
} from 'redux-saga/effects';

export function createSaga(name, saga) {
  const actions = createActions(['sagaStart', 'sagaSuccess', 'sagaFail'], name);

  return {
    name,
    action: actions.sagaStart,

    saga,
    listener: takeLatest(actions.sagaStart, saga),
    ...actions,
  };
}

export function dedupeEvery(pattern, saga) {
  const inProgress = {};

  return fork(function* () {
    while (true) {
      const action = yield take(pattern);

      const { name, deduplicate } = action.payload;

      if (inProgress[name] && deduplicate) {
        yield cancel(inProgress[name]);
      }

      const task = yield fork(saga, action);

      inProgress[name] = task;

      task.done
        .then(() => delete inProgress[name])
        .catch(() => delete inProgress[name]);
    }
  });
}
