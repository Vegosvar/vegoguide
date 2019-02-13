import React from 'react';
import classnames from 'classnames';
import propTypes from './prop-types';

const Container = ({ className, children, ...props }) => (
  <div className={classnames(['container', 'grid-lg', className])} {...props}>
    {children}
  </div>
);

Container.propTypes = propTypes;

export default Container;
