import { set } from 'lodash';
import { CREATE_POST, SET_FILTER_CATEGORIES } from './constants';

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
  }
};

export default reducers;
