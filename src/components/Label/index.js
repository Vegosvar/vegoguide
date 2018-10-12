import React from 'react';
import propTypes from './prop-types';
import style from './style.module.scss';

const Label = ({ id, children }) => (
  <label className={style.formLabel} htmlFor={id}>
    {children}
  </label>
);

Label.propTypes = propTypes;

export default Label;
