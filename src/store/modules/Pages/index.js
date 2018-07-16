import actions from './actions';
import initialState from './state';

const Pages = ({ state = initialState, action } = {}) => {
  if (action in actions) {
    return actions[action]({ ...state });
  }

  return state;
};

export default Pages;
