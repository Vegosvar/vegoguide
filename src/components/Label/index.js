import React from 'react';
import style from './style.module.scss';

const Label = ({ id, children }) => (
  <label className={style.formLabel} htmlFor={id}>
    {children}
  </label>
);

export default Label;
