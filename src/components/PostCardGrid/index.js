import React from 'react';
import { Col, PostCard, Row } from 'components';
import defaultProps from './default-props'
import propTypes from './prop-types'

const PostCardGrid = ({ items }) => (
  <Row>
    {items.map((item, index) => (
      <Col key={index}>
        <PostCard {...item} />
      </Col>
    ))}
  </Row>
);

PostCard.defaultProps = defaultProps
PostCardGrid.propTypes = propTypes;

export default PostCardGrid;
