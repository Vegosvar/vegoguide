import React from 'react';
import {
  PostCardGrid,
  PostFilterCategories,
  PostFilterSearch
} from 'containers';
import { Card, Container, Page, Row, Col } from 'components';

const Home = () => (
  <Container>
    <Page>
      <Card>
        <Row gapless>
          <Col size={8}>
            <PostFilterCategories />
          </Col>
          <Col size={4} className="d-flex col-ml-auto flex-centered pr-2">
            <PostFilterSearch placeholder="Sök..." />
          </Col>
        </Row>
      </Card>
      <PostCardGrid />
    </Page>
  </Container>
);

export default Home;
