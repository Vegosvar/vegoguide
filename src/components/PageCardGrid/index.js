import React from 'react';
import { Col, PageCard, Row } from 'components';

const PageCardGrid = ({ items = [] }) => (
  <Row>
    {items.map((item, index) => (
      <Col key={index}>
        <PageCard {...item} />
      </Col>
    ))}
  </Row>
);

export default PageCardGrid;
