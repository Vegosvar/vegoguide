import {
  CREATE_CATEGORY,
  FETCH_CATEGORIES,
  UPDATE_CATEGORY,
  SET_ERROR,
  SET_FETCHING,
  SET_FILTER_SEARCH
} from './constants';

export const createCategory = category => ({
  type: CREATE_CATEGORY,
  category
});

export const fetchCategories = ({
  params,
  settings,
  reject,
  resolve
} = {}) => ({
  type: FETCH_CATEGORIES,
  params,
  settings,
  reject,
  resolve
});

export const updateCategory = category => ({
  type: UPDATE_CATEGORY,
  category
});

export const setFilterSearch = value => ({
  type: SET_FILTER_SEARCH,
  value
});

export const setFetching = value => ({
  type: SET_FETCHING,
  value
});

export const setError = value => ({
  type: SET_ERROR,
  value
});
