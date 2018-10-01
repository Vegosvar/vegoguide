import React from 'react';
import { CreatePost as CreatePostContainer } from 'containers';
import { Container, Page } from 'components';

const CreatePost = () => (
  <Container>
    <Page>
      <CreatePostContainer />
    </Page>
  </Container>
);

export default CreatePost;
