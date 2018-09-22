import React from 'react';
import { Post as PostContainer } from 'containers';
import { Container, Page } from 'components';
import PropTypes from './prop-types';

const Post = ({
  match: {
    params: { url },
  },
}) => (
  <Container>
    <Page>
      <PostContainer url={url} />
    </Page>
  </Container>
);

Post.propTypes = PropTypes;

export default Post;
