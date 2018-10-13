import { isEmpty } from 'lodash';

export const categories = ({ filter, items }) =>
  items.filter(item =>
    item.categories.some(category => filter.includes(category._id))
  );

export const search = ({ filter, items }) =>
  items.filter(item => {
    const regex = new RegExp(filter, 'gim');
    const itemString = JSON.stringify(item);
    return regex.test(itemString);
  });

const filters = {
  categories,
  search
};

export const applyFilters = state =>
  Object.keys(state.Posts.filter).reduce((items, key) => {
    const filter = state.Posts.filter[key];
    if (!isEmpty(filter)) {
      return filters[key]({ filter, items });
    }

    return items;
  }, state.Posts.items);

export default filters;
