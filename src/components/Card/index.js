import React from 'react';
import propTypes from './prop-types';

const Card = ({ children }) => (
  <div className="card">{children}</div>
);

Card.propTypes = propTypes

export default Card;
