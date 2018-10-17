import i18n from 'i18n';
import { call, put, takeLatest } from 'redux-saga/effects';
import { CHANGE_LANGUAGE } from '../constants';
import { setLanguage } from '../actions';

function* worker({ language } = {}) {
  // Change the language
  yield call([i18n, i18n.changeLanguage], language);
  // Notify the application that the language has changed
  yield put(setLanguage(language));
}

function* watcher() {
  yield takeLatest(CHANGE_LANGUAGE, worker);
}

export default watcher;
