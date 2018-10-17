import React from 'react';
import classnames from 'classnames';

const Menu = ({ className, children, ...props }) => (
  <div className={classnames('menu', className)} {...props}>
    {children}
  </div>
);

export default Menu;
