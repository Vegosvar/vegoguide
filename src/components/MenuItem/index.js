import React from 'react';
import classnames from 'classnames';

const MenuItem = ({ className, children, ...props }) => (
  <div className={classnames('menu-item', className)} {...props}>
    {children}
  </div>
);

export default MenuItem;
