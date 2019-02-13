import React from 'react';
import classnames from 'classnames';
import defaultProps from './default-props';
import propTypes from './prop-types';
import style from './style.module.scss';

const Loading = ({ className, height } = {}) => (
  <div
    className={classnames([style.wrapper, className])}
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
