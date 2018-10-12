import React from 'react';
import defaultProps from './default-props';
import propTypes from './prop-types';
import style from './style.module.scss';

const Loading = ({ height } = {}) => (
  <div
    className={style.wrapper}
    style={{
      height,
    }}
  >
    <div className={style.loader} />
  </div>
);

Loading.defaultProps = defaultProps
Loading.propTypes = propTypes

export default Loading;
