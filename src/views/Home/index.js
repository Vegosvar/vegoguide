import React from 'react';
import {
  PostCardGrid,
  PostFilterCategories
} from 'containers';
import { Card, Col, Container, Hero, Page, Row } from 'components';
import style from './style.module.scss';

const Home = () => (
  <div>
    <div className={style.heroWrapper}>
      <Container>
        <Hero />
      </Container>
    </div>
    <Container>
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
  </div>
);

export default Home;
