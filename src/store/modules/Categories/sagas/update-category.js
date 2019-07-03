import Api from 'api';
import { call, put, takeLatest } from 'redux-saga/effects';
import { UPDATE_CATEGORY } from '../constants';
import { updateCategory } from '../actions';

function* worker({ params, settings } = {}) {
  // Call the API and update the post
  const response = yield call(Api.Categories.update(params, settings));

  const { data } = yield response.json();

  // Put returned post in the store
  yield put(updateCategory(data));
}

// Subscribe to the UPDATE_CATEGORY event
function* watcher() {
  yield takeLatest(UPDATE_CATEGORY, worker);
}

export default watcher;
