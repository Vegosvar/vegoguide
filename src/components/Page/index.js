import React from 'react';
import propTypes from './prop-types';
import style from './style.module.scss';

const Page = ({ children }) => (
  <div className={style.page}>
    {children}
  </div>
);

Page.propTypes = propTypes;

export default Page;
