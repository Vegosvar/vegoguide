const state = {
  items: [],
  error: null,
  fetching: false,
  filter: {
    categories: [],
    search: ''
  },
  skip: 0,
  limit: 24,
  sync: {
    update: [],
    remove: []
  }
};

export default state;
