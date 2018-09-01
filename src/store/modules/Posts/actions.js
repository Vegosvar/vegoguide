import { SET_FILTER_CATEGORIES } from "./constants";

const actions = {
  [SET_FILTER_CATEGORIES](value) {
    return {
      type: SET_FILTER_CATEGORIES,
      value
    };
  }
};

export default actions;
