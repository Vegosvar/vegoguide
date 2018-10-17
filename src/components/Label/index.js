import React from 'react';
import classnames from 'classnames';
import propTypes from './prop-types';

const Label = ({ className, children, htmlFor, ...props }) => (
  <label
    className={classnames('label', className)}
    htmlFor={htmlFor}
    {...props}
  >
    {children}
  </label>
);

Label.propTypes = propTypes;

export default Label;
