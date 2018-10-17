import React from 'react';
import classnames from 'classnames';
import propTypes from './prop-types';
import style from './style.module.scss';

const Container = ({ className, children, ...props }) => (
  <div
    className={classnames(['container', 'grid-lg', style.container, className])}
    {...props}
  >
    {children}
  </div>
);

Container.propTypes = propTypes;

export default Container;
