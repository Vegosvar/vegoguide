import { CREATE_PAGE } from './constants';

const actions = {
  [CREATE_PAGE]({ state, page }) {
    state.items.push(page);

    return state;
  }
};

export default actions;
