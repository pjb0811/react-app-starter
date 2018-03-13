import { call, put, takeEvery, fork } from 'redux-saga/effects';
import * as post from '../actions/post';
import API from '../api';

function* runRequestSuggest(action) {
  try {
    const { data } = yield call(API.getPost, action.payload);
    yield put({ type: post.SUCCESS_POST, data });
  }
  catch(error) {
    yield put({ type: post.FAILURE_POST, error });
  }
}
function* handleRequestPost() {
  yield takeEvery(post.REQUEST_POST, runRequestSuggest);
}

export function* watchHandleRequestPost() {
  yield fork(handleRequestPost);
}