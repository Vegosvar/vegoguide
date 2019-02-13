import Api from 'api';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_POSTS } from '../constants';
import { createPost, setError, setFetching } from '../actions';

function* worker({ params, settings } = {}) {
  // Clear last error
  yield put(setError(null));

  // Set as fetching
  yield put(setFetching(true));

  try {
    // Call the API and fetch the posts
    const response = yield call(Api.Posts.fetch, params, settings);

    // Parse the response as JSON
    const { data = [] } = yield response.json();

    // Loop over posts and put them in the store
    yield all(data.map(post => put(createPost(post))));
  } catch (error) {
    yield put(setError(error.message));
  } finally {
    // Set as done fetching
    yield put(setFetching(false));
  }
}

function* watcher() {
  yield takeLatest(FETCH_POSTS, worker);
}

export default watcher;
