import { CREATE_POST, FETCH_POSTS, SET_FILTER_CATEGORIES } from './constants';

const actions = {
  [CREATE_POST](value) {
    return {
      type: CREATE_POST,
      value
    };
  },
  [FETCH_POSTS](value) {
    return {
      type: FETCH_POSTS,
      value
    };
  },
  [SET_FILTER_CATEGORIES](value) {
    return {
      type: SET_FILTER_CATEGORIES,
      value
    };
  }
};

export default actions;
