import React from 'react';
import classnames from 'classnames';
import defaultProps from './default-props';
import propTypes from './prop-types';

const Col = ({ className, children, size, ...props }) => {
  const classNames = classnames(['column', `col-${size}`, className]);

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

Col.defaultProps = defaultProps;
Col.propTypes = propTypes;

export default Col;
