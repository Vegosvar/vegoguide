import React from 'react';
import classnames from 'classnames';
import propTypes from './prop-types';

const Card = ({ className, children }) => (
  <div className={classnames([className, 'card'])}>{children}</div>
);

Card.propTypes = propTypes;

export default Card;
