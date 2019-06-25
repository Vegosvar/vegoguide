import React from 'react';
import Col from 'components/Col';
import PostCard from 'components/PostCard';
import Row from 'components/Row';
import { Flipper, Flipped } from 'react-flip-toolkit';
import anime from 'animejs';
import defaultProps from './default-props';
import propTypes from './prop-types';

const onElementAppear = (el, index) =>
  anime({
    targets: el,
    opacity: [0, 1],
    delay: index * 20,
    duration: 150,
    easing: 'easeOutSine'
  });

const onElementExit = (el, index, removeElement) =>
  anime({
    targets: el,
    opacity: 0,
    duration: 150,
    complete: removeElement,
    delay: index * 20,
    easing: 'easeOutSine'
  });

const PostCardGrid = ({ items, size }) => (
  <Flipper flipKey={items.length}>
    <Row>
      {items.map(item => (
        <Flipped
          flipId={item._id}
          onDelayedAppear={onElementAppear}
          onExit={onElementExit}
          key={item._id}
        >
          <Col size={size}>
            <PostCard {...item} />
          </Col>
        </Flipped>
      ))}
    </Row>
  </Flipper>
);

PostCardGrid.defaultProps = defaultProps;
PostCardGrid.propTypes = propTypes;

export default PostCardGrid;
