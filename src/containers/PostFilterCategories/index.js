import React, { useCallback } from 'react';
import Filter from 'components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, setFilterCategories } from 'store/modules/Posts/actions';
import { useTranslation } from 'react-i18next';

const PostFilterCategoriesContainer = () => {
  const dispatch = useDispatch();
  const onChange = useCallback(
    (...args) => {
      dispatch(setFilterCategories(...args));
      dispatch(fetchPosts()); // TODO: This should be a saga
    },
    [dispatch]
  );

  const items = useSelector(state => state.Posts.items);
  const value = useSelector(state => state.Posts.filter.categories);
  const { t } = useTranslation(['postCategories']);

  const options = items
    .reduce(
      (categories, item) => [
        ...categories,
        ...item.categories.filter(category => !categories.includes(category))
      ],
      []
    )
    .map(category => ({
      label: t(`postCategories:${category.title}`),
      value: category._id
    }));

  return (
    <Filter options={options} value={value} onChange={onChange} multiple />
  );
};

export default PostFilterCategoriesContainer;
