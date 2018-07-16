import React from 'react';
import style from './style.module.scss';

const Col = ({ children }) => (
  <div className={style.col}>
    {children}
  </div>
);

export default Col;
