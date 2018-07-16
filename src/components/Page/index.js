import React from 'react';
import style from './style.module.scss';

const Page = ({ children }) => (
  <div className={style.page}>
    {children}
  </div>
);

export default Page;
