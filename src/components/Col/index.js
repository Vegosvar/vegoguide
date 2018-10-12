import React from 'react';
import classnames from 'classnames';
import defaultProps from './default-props';
import propTypes from './prop-types';
import style from './style.module.scss';

const Col = ({ children, size }) => {
  const classNames = classnames([style.column, style[`col-${size}`]]);

  return <div className={classNames}>{children}</div>;
};

Col.defaultProps = defaultProps;
Col.propTypes = propTypes;

export default Col;
