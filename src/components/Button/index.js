import React from 'react';
import propTypes from './prop-types';
import style from './style.module.scss';

const Button = ({ children, ...props }) => (
  <div className={style.button} {...props}>
    {children}
  </div>
);

Button.propTypes = propTypes;

export default Button;
