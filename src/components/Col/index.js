import React from 'react';
import classnames from 'classnames';
import defaultProps from './default-props';
import propTypes from './prop-types';

const Col = ({ className, children, size, ...props }) => (
  <div className={classnames(['column', `col-${size}`, className])} {...props}>
    {children}
  </div>
);

Col.defaultProps = defaultProps;
Col.propTypes = propTypes;

export default Col;
