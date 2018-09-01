import reducers from "./reducers";
import initialState from "./state";

const Posts = (state = initialState, { type, ...action }) => {
  if (type in reducers) {
    return reducers[type]({ ...state }, { ...action });
  }

  return state;
};

export default Posts;
