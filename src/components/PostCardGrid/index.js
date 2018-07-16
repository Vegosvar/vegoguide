import React from 'react';
import { Col, PostCard, Row } from 'components';

const PostCardGrid = ({ items = [] }) => (
  <Row>
    {items.map((item, index) => (
      <Col key={index}>
        <PostCard {...item} />
      </Col>
    ))}
  </Row>
);

export default PostCardGrid;
