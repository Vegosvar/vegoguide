import React from 'react';
import style from './style.module.scss';

const FormGroup = ({ children }) => (
  <div className={style.formGroup}>{children}</div>
);

export default FormGroup;
