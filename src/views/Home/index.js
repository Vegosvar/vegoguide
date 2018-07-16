import React from 'react';
import PostCardGrid from 'containers/PostCardGrid';
import { Container, Page } from 'components';

const Home = () => (
  <Container>
    <Page>
      <PostCardGrid />
    </Page>
  </Container>
);

export default Home;
