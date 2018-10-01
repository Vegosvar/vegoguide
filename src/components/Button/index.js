import React from 'react';
import style from './style.module.scss';

const Button = ({ children, ...props }) => (
  <div className={style.button} {...props}>
    {children}
  </div>
);

export default Button;
