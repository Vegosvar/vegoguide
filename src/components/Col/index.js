import React from 'react';
import classnames from 'classnames';
import defaultProps from './default-props';
import propTypes from './prop-types';

const Col = ({ children, size }) => {
  const classNames = classnames(['column', `col-${size}`]);

  return <div className={classNames}>{children}</div>;
};

Col.defaultProps = defaultProps;
Col.propTypes = propTypes;

export default Col;
