import React from 'react';
import { getFilteredPosts } from 'hooks';
import PostMap from 'components/PostMap';

const PostMapContainer = () => {
  const items = getFilteredPosts()

  return <PostMap items={items} />
};


export default PostMapContainer;
