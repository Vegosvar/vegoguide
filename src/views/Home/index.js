import React from "react";
import { PostFilterCategories, PostCardGrid } from "containers";
import { Container, Page } from "components";

const Home = () => (
  <Container>
    <Page>
      <PostFilterCategories />
      <PostCardGrid />
    </Page>
  </Container>
);

export default Home;
