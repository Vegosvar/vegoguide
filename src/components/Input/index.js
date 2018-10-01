import React from 'react';
import style from './style.module.scss';

const Input = ({ value = '', ...props }) => (
  <input className={style.input} value={value} {...props} />
);

export default Input;
