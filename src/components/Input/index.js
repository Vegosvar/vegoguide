import React from 'react';
import defaultProps from './default-props';
import propTypes from './prop-types';
import style from './style.module.scss';

const Input = ({ onInput, value, ...props }) => (
  <input className={style.input} value={value} onInput={onInput} {...props} />
);

Input.defaultProps = defaultProps;
Input.propTypes = propTypes;

export default Input;
