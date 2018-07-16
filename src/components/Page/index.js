import React from 'react';
import style from './style.module.scss';

const Page = ({ children }) => (
  <div className={style.page}>
    <div className={style.body}>
      {children}
    </div>
  </div>
);

export default Page;
