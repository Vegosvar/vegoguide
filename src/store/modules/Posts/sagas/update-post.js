import Api from 'api';
import { call, put, takeLatest } from 'redux-saga/effects';
import { UPDATE_POST } from '../constants';

function* worker({ params, settings } = {}) {
  // Call the API and update the post
  const response = yield call(Api.Posts.update(params, settings));

  const { data } = yield response.json();

  // Put returned post in the store
  yield put({
    type: UPDATE_POST,
    post: data
  });
}

// Subscribe to the UPDATE_POST event
function* watcher() {
  yield takeLatest(UPDATE_POST, worker);
}

export default watcher;
