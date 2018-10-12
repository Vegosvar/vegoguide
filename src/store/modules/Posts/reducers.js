import { set } from 'lodash';
import {
  CREATE_POST,
  SET_FILTER_CATEGORIES,
  SET_FILTER_SEARCH
} from './constants';

const reducers = {
  [CREATE_POST](state, { post }) {
    const index = state.items.findIndex(item => item._id === post._id);

    const newItems = [...state.items];

    if (index === -1) {
      newItems.push(post);
    } else {
      newItems[index] = post;
    }

    set(state, 'items', newItems);

    return state;
  },
  [SET_FILTER_CATEGORIES](state, { ids }) {
    set(state, 'filter.categories', ids);

    return state;
  },
  [SET_FILTER_SEARCH](state, { value }) {
    set(state, 'filter.search', value);

    return state;
  }
};

export default reducers;
