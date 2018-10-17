import React from 'react';
import classnames from 'classnames';
import propTypes from './prop-types';

const Button = ({ className, children, ...props }) => (
  <button className={classnames(['btn', className])} {...props}>
    {children}
  </button>
);

Button.propTypes = propTypes;

export default Button;
