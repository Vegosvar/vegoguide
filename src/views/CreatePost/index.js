import React from 'react';
import CreatePostContainer from 'containers/CreatePost';
import Container from 'components/Container';
import Page from 'components/Page';

const CreatePost = () => (
  <Container>
    <Page>
      <CreatePostContainer />
    </Page>
  </Container>
);

export default CreatePost;
