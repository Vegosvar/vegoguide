import React, { useCallback, useEffect } from 'react';
import Filter from 'components/Filter';
import { getFilteredCategories } from 'hooks';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterCategories } from 'store/modules/Posts/actions';
import { fetchCategories } from 'store/modules/Categories/actions';
import { useTranslation } from 'react-i18next';

const PostFilterCategoriesContainer = () => {
  const dispatch = useDispatch();
  const onChange = useCallback(
    (...args) => dispatch(setFilterCategories(...args)),
    [dispatch]
  );

  useEffect(
    () => {
      dispatch(fetchCategories());
    },
    [dispatch]
  );

  const filteredItems = getFilteredCategories();

  const { t } = useTranslation(['postCategories']);
  const options = filteredItems.map(category => ({
    label: t(`postCategories:${category.title}`),
    value: category._id
  }));

  const value = useSelector(state => state.Posts.filter.categories);

  return (
    <Filter options={options} value={value} onChange={onChange} multiple />
  );
};

export default PostFilterCategoriesContainer;
