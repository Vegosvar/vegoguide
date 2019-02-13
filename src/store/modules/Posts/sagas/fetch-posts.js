import Api from 'api';
import { FETCH_POSTS } from '../constants';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { createPost, setError, setFetching } from '../actions';

const getFetchOptions = state => {
  const { categories, search } = state.Posts.filter;

  const params = {
    query: {}
  };

  if (search) {
    params.query.$text = {
      $search: search
    };
  }

  if (categories.length > 0) {
    params.query.categories = categories;
  }

  const settings = {};

  return { params, settings };
};

function* fetchPosts() {
  // Clear last error
  yield put(setError(null));

  const { params, settings } = yield select(getFetchOptions);

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
  yield takeLatest(FETCH_POSTS, fetchPosts);
}

export default watcher;
