import actions from './actions';
import initialState from './state';

const Posts = ({ state = initialState, action } = {}) => {
  if (action in actions) {
    return actions[action]({ ...state });
  }

  return state;
};

export default Posts;
