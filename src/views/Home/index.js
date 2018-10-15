import React from 'react';
import { PostCardGrid, PostFilterCategories } from 'containers';
import { Card, Col, Container, Hero, Page, Row } from 'components';

const Home = () => [
  <Hero key="hero" />,
  <Container key="container">
    <Page>
      <Card className="mb-2">
        <Row>
          <Col>
            <PostFilterCategories />
          </Col>
        </Row>
      </Card>
      <PostCardGrid />
    </Page>
  </Container>
];

export default Home;
