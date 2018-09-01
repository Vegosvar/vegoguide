import { CREATE_POST, SET_FILTER_CATEGORIES } from "./constants";
import { set } from "lodash";

const reducers = {
  [CREATE_POST](state, { post }) {
    set(state, "items", [...state.items, post]);

    return state;
  },
  [SET_FILTER_CATEGORIES](state, { value }) {
    set(state, "filter.categories", value);

    return state;
  }
};

export default reducers;
