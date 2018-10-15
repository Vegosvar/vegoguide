import React from 'react';
import classnames from 'classnames';
import defaultProps from './default-props';
import propTypes from './prop-types';
import style from './style.module.scss';

const Input = ({ className, onChange, value, ...props }) => (
  <input className={classnames([className, style.input])} value={value} onChange={onChange} {...props} />
);

Input.defaultProps = defaultProps;
Input.propTypes = propTypes;

export default Input;
