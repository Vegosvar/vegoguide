import React from 'react';
import style from './style.module.scss';

const Loading = () => (
  <div class={style.wrapper}>
    <div className={style.loader}></div>
  </div>
);

export default Loading;
