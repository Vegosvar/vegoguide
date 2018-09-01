import { SET_FILTER_VALUE } from "./constants";

const actions = {
  [SET_FILTER_VALUE](value) {
    return {
      type: SET_FILTER_VALUE,
      value
    };
  }
};

export default actions;
