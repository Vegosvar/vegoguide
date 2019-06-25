import {
  CHANGE_LANGUAGE,
  SET_LANGUAGE,
  SET_SCREEN_HEIGHT,
  SET_SCREEN_WIDTH,
  SET_URL_QUERY_PARAM
} from './constants';

export const changeLanguage = language => ({
  type: CHANGE_LANGUAGE,
  language
});

export const setLanguage = language => ({
  type: SET_LANGUAGE,
  language
});

export const setURLQueryParam = ({ key, value }) => ({
  type: SET_URL_QUERY_PARAM,
  key,
  value
});

export const setScreenWidth = value => ({
  type: SET_SCREEN_WIDTH,
  value
});

export const setScreenHeight = value => ({
  type: SET_SCREEN_HEIGHT,
  value
});
