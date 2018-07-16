import React from 'react';
import style from './style.module.scss';

const Row = ({ children }) => (
  <div className={style.row}>
    {children}
  </div>
);

export default Row;
