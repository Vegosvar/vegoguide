import { useMemo } from 'react';
import { applyFilters } from 'store/modules/Posts/filters';
import { useSelector } from 'react-redux';

export default () => {
  const posts = useSelector(state => state.Posts.items);
  const filter = useSelector(state => state.Posts.filter);
  return useMemo(() => applyFilters(filter, posts), [filter, posts]);
};
