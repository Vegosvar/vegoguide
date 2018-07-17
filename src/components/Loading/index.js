import React from 'react';
import style from './style.module.scss';

const Loading = ({ height = 'auto' } = {}) => (
  <div
    className={style.wrapper}
    style={{
      height
    }}>
    <div className={style.loader} />
  </div>
);

export default Loading;
