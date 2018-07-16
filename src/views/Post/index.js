import React from 'react';
import { Post as PostContainer } from 'containers';

const Post = ({
  match: {
    params: { url }
  }
}) => (
  <div>
    <PostContainer url={url} />
  </div>
);

export default Post;
