import { CREATE_POST, SET_FILTER_VALUE } from "./constants";

const reducers = {
  [CREATE_POST](state, { post }) {
    state.items.push(post);

    return state;
  },
  [SET_FILTER_VALUE](state, { value }) {
    state.filter.value = value;

    return state;
  }
};

export default reducers;
