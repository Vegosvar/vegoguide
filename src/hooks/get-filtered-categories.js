import { useSelector } from 'react-redux';
import { getFilteredPosts } from 'hooks';

export default () => {
  const items = useSelector(state => state.Categories.items);

  const filteredPosts = getFilteredPosts();
  const filteredPostsCategories = filteredPosts.reduce(
    (categories, post) => [
      ...categories,
      ...post.categories.map(category => category._id)
    ],
    []
  );

  return items.filter(item => filteredPostsCategories.includes(item._id));
};
