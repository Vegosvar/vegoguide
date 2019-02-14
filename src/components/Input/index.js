import React from 'react';
import classnames from 'classnames';
import defaultProps from './default-props';
import propTypes from './prop-types';

const Input = ({ className, onChange, placeholder, type, value }) => (
  <input
    className={classnames(['form-input', className])}
    value={value}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
  />
);

Input.defaultProps = defaultProps;
Input.propTypes = propTypes;

export default Input;

export {
  defaultProps,
  propTypes
}
