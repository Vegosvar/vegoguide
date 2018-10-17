import React from 'react';
import { PostCardGrid } from 'containers';
import { Container, Hero, Navbar, Page } from 'components';

const Home = () => [
  <Navbar key="navbar" />,
  <Hero key="hero" />,
  <Container key="container">
    <Page>
      <PostCardGrid />
    </Page>
  </Container>
];

export default Home;
