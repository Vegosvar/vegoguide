const CREATE_PAGE = 'CREATE_PAGE';

const actions = {
  [CREATE_PAGE] ({ state, page }) {
    console.log('create page!', page);

    state.items.push(page);

    return state;
  }
};

export default actions;
