import React from 'react';
import propTypes from './prop-types';
import style from './style.module.scss';

const Card = ({ children }) => (
  <div className={style.card}>
    <div className={style.body}>{children}</div>
  </div>
);

Card.propTypes = propTypes

export default Card;
