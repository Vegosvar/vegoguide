import { CREATE_POST, SET_FILTER_CATEGORIES } from "./constants";

const reducers = {
  [CREATE_POST](state, { post }) {
    state.items.push(post);

    return state;
  },
    state.filter.value = value;
  [SET_FILTER_CATEGORIES](state, { value }) {

    return state;
  }
};

export default reducers;
