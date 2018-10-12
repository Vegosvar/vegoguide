import React from 'react';
import {
  PostCardGrid,
  PostFilterCategories,
  PostFilterSearch
} from 'containers';
import { Container, Page, Row, Col } from 'components';

const Home = () => (
  <Container>
    <Page>
      <Row gapless>
        <Col size={8}>
          <PostFilterCategories />
        </Col>
        <Col size={4}>
          <PostFilterSearch />
        </Col>
      </Row>
      <PostCardGrid />
    </Page>
  </Container>
);

export default Home;
