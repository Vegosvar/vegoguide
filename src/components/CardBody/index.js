import React from 'react';
import classnames from 'classnames';
import propTypes from './prop-types';

const CardBody = ({ className, children, ...props }) => (
  <div className={classnames(['card-body', className])} {...props}>
    {children}
  </div>
);

CardBody.propTypes = propTypes;

export default CardBody;
