import React from 'react';
import classnames from 'classnames';
import propTypes from './prop-types';
import style from './style.module.scss';

const Button = ({ className, children, ...props }) => (
  <button className={classnames([style.button, className])} {...props}>
    {children}
  </button>
);

Button.propTypes = propTypes;

export default Button;
