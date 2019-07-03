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

export const applyFilters = (filter, items) =>
  Object.keys(filter).reduce((filteredItems, key) => {
    if (!isEmpty(filter[key])) {
      return filters[key]({ filter: filter[key], items: filteredItems });
    }

    return filteredItems;
  }, items);

export default filters;
