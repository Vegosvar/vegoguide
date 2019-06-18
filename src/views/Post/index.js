import React from 'react';
import PostContainer from 'containers/Post';
import Container from 'components/Container';
import Page from 'components/Page';
import propTypes from './prop-types';

const Post = ({
  match: {
    params: { url }
  }
}) => (
  <Container>
    <Page>
      <PostContainer url={url} />
    </Page>
  </Container>
);

Post.propTypes = propTypes;

export default Post;
