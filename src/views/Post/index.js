import React from 'react';
import { Post as PostContainer } from 'containers';

const Post = ({
  match: {
    params: { id }
  }
}) => (
  <div>
    <PostContainer id={id} />
  </div>
);

export default Post;
