import React from 'react';
import propTypes from './prop-types';
import style from './style.module.scss';

const Col = ({ children }) => <div className={style.col}>{children}</div>;

Col.propTypes = propTypes;

export default Col;
