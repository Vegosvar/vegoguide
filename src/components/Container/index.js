import React from 'react';
import classNames from 'classnames';
import propTypes from './prop-types';
import style from './style.module.scss';

const Container = ({ children }) => {
  const classes = classNames([style.container, style.lg]);

  return <div className={classes}>{children}</div>;
};

Container.propTypes = propTypes;

export default Container;
