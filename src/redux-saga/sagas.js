import { delay } from 'redux-saga';
import { put, takeEvery, all } from 'redux-saga/effects';
import * as counter from './actions/counter';

export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: counter.INCREMENT });
}

export function* decrementAsync() {
  yield delay(1000);
  yield put({ type: counter.DECREMENT });
}

export default function* rootSaga() {
  yield all([
    takeEvery(counter.INCREMENT_ASYNC, incrementAsync),
    takeEvery(counter.DECREMENT_ASYNC, decrementAsync),
  ])
}