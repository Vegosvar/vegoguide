import React from 'react';
import classnames from 'classnames';

const Dropdown = ({ className, children }) => (
  <div className={classnames('dropdown', className)}>{children}</div>
);

export default Dropdown;
