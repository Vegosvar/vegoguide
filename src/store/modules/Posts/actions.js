import { FETCH_POSTS, SET_FILTER_CATEGORIES } from './constants';

const actions = {
  [FETCH_POSTS](value) {
    return {
      type: FETCH_POSTS,
      value,
    };
  },
  [SET_FILTER_CATEGORIES](value) {
    return {
      type: SET_FILTER_CATEGORIES,
      value,
    };
  },
};

export default actions;
