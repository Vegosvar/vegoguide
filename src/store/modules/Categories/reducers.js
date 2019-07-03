import { set } from 'lodash';
import {
  CREATE_CATEGORY,
  SET_FETCHING,
  SET_FILTER_SEARCH,
  UPDATE_CATEGORY
} from './constants';

const reducers = {
  [CREATE_CATEGORY](state, { category }) {
    const index = state.items.findIndex(item => item._id === category._id);

    const newItems = [...state.items];

    if (index === -1) {
      newItems.push(category);
    } else {
      newItems[index] = category;
    }

    set(state, 'items', newItems);

    return state;
  },
  [UPDATE_CATEGORY](state, { category }) {
    const newItems = state.items.map(item =>
      item._id === category._id ? category : item
    );

    set(state, 'items', newItems);

    return state;
  },
  [SET_FETCHING](state, { value }) {
    set(state, 'fetching', value);

    return state;
  },
  [SET_FILTER_SEARCH](state, { value }) {
    set(state, 'filter.search', value);

    return state;
  }
};

export default reducers;
