import {
  CREATE_POST,
  FETCH_POSTS,
  UPDATE_POST,
  SET_ERROR,
  SET_FETCHING,
  SET_FILTER_CATEGORIES,
  SET_FILTER_SEARCH
} from './constants';

export const createPost = post => ({
  type: CREATE_POST,
  post
});

export const fetchPosts = ({
  params,
  settings,
  onFailure,
  onFinished,
  onSuccess
} = {}) => ({
  type: FETCH_POSTS,
  params,
  settings,
  onFailure,
  onFinished,
  onSuccess
});

export const updatePost = post => ({
  type: UPDATE_POST,
  post
});

export const setFilterCategories = ids => ({
  type: SET_FILTER_CATEGORIES,
  ids
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
