import React from 'react';
import classnames from 'classnames';
import propTypes from './prop-types';

const CardImage = ({ className, children, ...props }) => (
  <div className={classnames(['card-image', className])} {...props}>
    {children}
  </div>
);

CardImage.propTypes = propTypes;

export default CardImage;
