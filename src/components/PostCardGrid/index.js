import React from 'react';
import { Col, PostCard, Row } from 'components';
import { Flipper, Flipped } from 'react-flip-toolkit';
import defaultProps from './default-props';
import propTypes from './prop-types';

const FlipWrapper = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

const PostCardGrid = ({ items }) => (
  <Flipper flipKey={items.length}>
    <Row>
      {items.map(item => (
        <Col size={6} key={item._id}>
          <Flipped flipId={item._id} {...item}>
            <FlipWrapper>
              <PostCard {...item} />
            </FlipWrapper>
          </Flipped>
        </Col>
      ))}
    </Row>
  </Flipper>
);

PostCard.defaultProps = defaultProps;
PostCardGrid.propTypes = propTypes;

export default PostCardGrid;
