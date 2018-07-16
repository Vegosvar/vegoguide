import { CREATE_POST } from './constants';

const actions = {
  [CREATE_POST]({ state, post }) {
    state.items.push(post);

    return state;
  }
};

export default actions;
