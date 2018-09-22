import { get, set } from 'lodash';
import { CREATE_POST, FETCH_POSTS, SET_FILTER_CATEGORIES } from './constants';

const reducers = {
  [CREATE_POST](state, { post }) {
    set(state, 'items', [...state.items, post]);

    return state;
  },
  [FETCH_POSTS](state, { posts = [] }) {
    const path = 'sync.fetch';

    const oldValue = get(state, path, []);
    const newValue = [...oldValue, ...posts];

    set(state, path, newValue);

    return state;
  },
  [SET_FILTER_CATEGORIES](state, { value }) {
    set(state, 'filter.categories', value);

    return state;
  },
};

export default reducers;
