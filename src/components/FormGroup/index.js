import React from 'react';
import propTypes from './prop-types';
import style from './style.module.scss';

const FormGroup = ({ children }) => (
  <div className={style.formGroup}>{children}</div>
);

FormGroup.propTypes = propTypes;

export default FormGroup;
