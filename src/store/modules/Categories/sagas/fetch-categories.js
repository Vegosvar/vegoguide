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
import { FETCH_CATEGORIES } from '../constants';
import { createCategory, setError, setFetching } from '../actions';

const getFetchOptions = (state, payload) => {
  const { search } = state.Categories.filter;

  const params = {
    query: {},
    limit: state.Categories.limit,
    skip: state.Categories.skip,
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

  const settings = { ...payload.settings };

  return { ...payload, params, settings };
};

function* fetchCategories(payload = {}) {
  // The payload can contain callback functions which are invoked whenever the action fails or succeeds
  const { resolve, reject } = payload;

  // Clear last error
  yield put(setError(null));

  // Set up an abort controller so we can abort the API call when the task is cancelled
  const abortController = new AbortController();

  // Set as fetching
  yield put(setFetching(true));

  try {
    // Get the params and settings ready
    const { params, settings } = yield select(getFetchOptions, payload);

    // If no abortController is available we hook up one in order to check if the request gets aborted
    if (!(settings.signal instanceof AbortController)) {
      // Set the abortController signal to the settings so the request can be aborted and an abortion can be detected
      settings.signal = abortController.signal;
    }

    // Call the API and fetch the categories
    const response = yield call(Api.Categories.fetch, params, settings);

    // Parse the response as JSON
    const { data = [] } = yield response.json();

    // Loop over categories and put them in the store
    yield all(data.map(category => put(createCategory(category))));

    // Call the resolve callback
    if (typeof resolve === 'function') {
      yield resolve(data);
    }
  } catch (error) {
    yield put(setError(error.message));

    // Call the reject callback
    if (typeof reject === 'function') {
      yield reject(error);
    }
  } finally {
    if (yield cancelled()) {
      // the task was cancelled, abort the API call
      abortController.abort();

      // Call the reject callback
      if (typeof reject === 'function') {
        const error = new Error('The request was cancelled');
        yield reject(error);
      }
    }

    // Set as done fetching
    yield put(setFetching(false));

    // Use a debounce
    yield delay(500);
  }
}

function* watcher() {
  yield takeLatest(FETCH_CATEGORIES, fetchCategories);
}

export default watcher;
