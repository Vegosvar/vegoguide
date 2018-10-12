import React from 'react';
import propTypes from './prop-types';
import style from './style.module.scss';

const Label = ({ children, htmlFor }) => (
  <label className={style.formLabel} htmlFor={htmlFor}>
    {children}
  </label>
);

Label.propTypes = propTypes;

export default Label;
