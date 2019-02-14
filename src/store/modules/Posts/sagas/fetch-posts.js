import Api from 'api';
import { all, call, delay, put, select, takeLatest } from 'redux-saga/effects';
import { FETCH_POSTS } from '../constants';
import { createPost, setError, setFetching } from '../actions';

const getFetchOptions = state => {
  const { categories, search } = state.Posts.filter;

  const params = {
    query: {},
    limit: state.Posts.limit,
    skip: state.Posts.skip
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

  const settings = {};

  return { params, settings };
};

function* fetchPosts() {
  // Use a debounce
  yield delay(150);

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
