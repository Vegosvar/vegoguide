import React from 'react';
import classNames from 'classnames';
import style from './style.module.scss';

const Container = ({ children }) => {
  const classes = classNames([style.container, style.lg]);

  return <div className={classes}>{children}</div>;
};

export default Container;
