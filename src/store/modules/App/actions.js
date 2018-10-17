import { CHANGE_LANGUAGE, SET_LANGUAGE } from './constants';

export const changeLanguage = language => ({
  type: CHANGE_LANGUAGE,
  language
});

export const setLanguage = language => ({
  type: SET_LANGUAGE,
  language
});
