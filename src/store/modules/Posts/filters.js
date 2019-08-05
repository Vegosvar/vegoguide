import { isEmpty } from 'lodash';

export const categories = ({ filter, items }) =>
  items.filter(item =>
    filter.every(value => item.categories.some(category => category._id === value))
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
