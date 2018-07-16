import React from 'react';
import style from './style.module.scss';

const Row = ({ children }) => (
  <div className={style.card}>
    <div className={style.body}>
      {children}
    </div>
  </div>
);

export default Row;
