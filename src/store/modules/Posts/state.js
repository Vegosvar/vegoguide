const state = {
  items: [],
  error: null,
  fetching: false,
  filter: {
    categories: [],
    search: ''
  },
  sync: {
    update: [],
    remove: []
  }
};

export default state;
