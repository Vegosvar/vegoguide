import { set } from 'lodash';
import { CREATE_POST, SET_FILTER_CATEGORIES } from './constants';

const reducers = {
  [CREATE_POST](state, { post }) {
    set(state, 'items', [...state.items, post]);

    return state;
  },
  [SET_FILTER_CATEGORIES](state, { ids }) {
    set(state, 'filter.categories', ids);

    return state;
  }
};

export default reducers;
