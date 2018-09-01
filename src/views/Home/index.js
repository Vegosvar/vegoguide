import React from "react";
import { PostFilter, PostCardGrid } from "containers";
import { Container, Page } from "components";

const Home = () => (
  <Container>
    <Page>
      <PostFilter />
      <PostCardGrid />
    </Page>
  </Container>
);

export default Home;
