import React from 'react';
import classnames from 'classnames';
import propTypes from './prop-types';
import style from './style.module.scss';

const Label = ({ className, children, htmlFor }) => (
  <label className={classnames(className, style.formLabel)} htmlFor={htmlFor}>
    {children}
  </label>
);

Label.propTypes = propTypes;

export default Label;
