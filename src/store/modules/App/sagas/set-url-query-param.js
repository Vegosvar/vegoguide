import { push } from 'connected-react-router';
import { put, takeLatest } from 'redux-saga/effects';
import { SET_URL_QUERY_PARAM } from '../constants';

function* setURLQueryParam({ key, value }) {
  const search = value ? `${key}=${value}` : undefined;

  yield put(push({ search }));
}

function* watcher() {
  yield takeLatest(SET_URL_QUERY_PARAM, setURLQueryParam);
}

export default watcher;
