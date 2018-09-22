import React from "react";
import { Post as PostContainer } from "containers";
import { Container, Page } from "components";

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

export default Post;
