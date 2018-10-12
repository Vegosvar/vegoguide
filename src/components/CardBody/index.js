import React from 'react';
import propTypes from './prop-types';

const CardBody = ({ children }) => <div className="card-body">{children}</div>;

CardBody.propTypes = propTypes;

export default CardBody;
