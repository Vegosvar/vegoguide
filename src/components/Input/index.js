import React from 'react';
import classnames from 'classnames';
import defaultProps from './default-props';
import propTypes from './prop-types';

const Input = ({ className, onChange, value, ...props }) => (
  <input
    className={classnames(['form-input', className])}
    value={value}
    onChange={onChange}
    {...props}
  />
);

Input.defaultProps = defaultProps;
Input.propTypes = propTypes;

export default Input;
