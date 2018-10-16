import React from 'react';
import { PostCardGrid } from 'containers';
import { Container, Hero, Page } from 'components';

const Home = () => [
  <Hero key="hero" />,
  <Container key="container">
    <Page>
      <PostCardGrid />
    </Page>
  </Container>
];

export default Home;
