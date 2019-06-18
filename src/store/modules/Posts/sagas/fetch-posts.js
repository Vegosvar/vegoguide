import Api from 'api';
import {
  all,
  call,
  cancelled,
  delay,
  put,
  select,
  takeLatest
} from 'redux-saga/effects';
import { FETCH_POSTS } from '../constants';
import { createPost, setError, setFetching } from '../actions';

const getFetchOptions = (state, payload) => {
  const { categories, search } = state.Posts.filter;

  const params = {
    query: {},
    limit: state.Posts.limit,
    skip: state.Posts.skip,
    ...payload.params
  };

  if (search && search.length > 0) {
    // TODO We will probably want to be able to set what properties are searched in the UI somewhere
    const keys = ['title', 'address.city', 'address.street'];

    params.query = {
      $or: keys.reduce(
        (query, key) => [
          ...query,
          {
            [key]: {
              $regex: search,
              $options: 'gi'
            }
          }
        ],
        []
      )
    };
  }

  if (categories.length > 0) {
    params.query.categories = categories;
  }

  const settings = { ...payload.settings };

  return { ...payload, params, settings };
};

function* fetchPosts(payload = {}) {
  // Clear last error
  yield put(setError(null));

  // Set up an abort controller so we can abort the API call when the task is cancelled
  const abortController = new AbortController();

  // Set as fetching
  yield put(setFetching(true));

  try {
    // Get the params and settings ready
    const { params, settings } = yield select(
      getFetchOptions,
      payload
    );

    // Set the abortController signal to the settings so the request can be aborted
    settings.signal = abortController.signal;

    // Call the API and fetch the posts
    const response = yield call(Api.Posts.fetch, params, settings);

    // Parse the response as JSON
    const { data = [] } = yield response.json();

    // Loop over posts and put them in the store
    yield all(data.map(post => put(createPost(post))));
  } catch (error) {
    yield put(setError(error.message));
  } finally {
    if (yield cancelled()) {
      // the task was cancelled, abort the API call
      abortController.abort();
    }

    // Set as done fetching
    yield put(setFetching(false));

    // Use a debounce
    yield delay(500);
  }
}

function* watcher() {
  yield takeLatest(FETCH_POSTS, fetchPosts);
}

export default watcher;
