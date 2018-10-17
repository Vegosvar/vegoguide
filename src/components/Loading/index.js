import React from 'react';
import defaultProps from './default-props';
import propTypes from './prop-types';
import style from './style.module.scss';

const Loading = ({ height } = {}) => (
  <div
    className={style.wrapper}
    style={{
      height
    }}
  >
    <div className="loading loading-lg" />
  </div>
);

Loading.defaultProps = defaultProps;
Loading.propTypes = propTypes;

export default Loading;
