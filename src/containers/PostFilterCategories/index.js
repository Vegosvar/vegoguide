import React, { useCallback, useEffect } from 'react';
import Filter from 'components/Filter';
import { getFilteredCategories } from 'hooks';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterCategories } from 'store/modules/Posts/actions';
import { fetchCategories } from 'store/modules/Categories/actions';

const PostFilterCategoriesContainer = () => {
  const dispatch = useDispatch();
  const onChange = useCallback(
    (...args) => dispatch(setFilterCategories(...args)),
    [dispatch]
  );

  const language = useSelector(state => state.App.language);
  useEffect(
    () => {
      dispatch(fetchCategories());
    },
    [dispatch, language]
  );

  const filteredItems = getFilteredCategories();

  const options = filteredItems.map(category => ({
    label: category.title,
    value: category._id
  }));

  const value = useSelector(state => state.Posts.filter.categories);

  return (
    <Filter options={options} value={value} onChange={onChange} multiple />
  );
};

export default PostFilterCategoriesContainer;
