import { call, put, takeEvery, fork } from 'redux-saga/effects';
import * as post from '../actions/post';
import API from '../api';

function* runRequestSuggest(action) {
  try {
    const { data } = yield call(API.getPost, action.payload);
    yield put(post.successPost({ data }));
  }
  catch(error) {
    yield put(post.failurePost({ error }));
  }
}
function* handleRequestPost() {
  yield takeEvery(post.REQUEST_POST, runRequestSuggest);
}

export function* watchHandleRequestPost() {
  yield fork(handleRequestPost);
}