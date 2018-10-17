import React from 'react';
import classnames from 'classnames';
import propTypes from './prop-types';

const Card = ({ className, children, ...props }) => (
  <div className={classnames([className, 'card'])} {...props}>
    {children}
  </div>
);

Card.propTypes = propTypes;

export default Card;
