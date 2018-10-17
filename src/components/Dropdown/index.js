import React from 'react';
import classnames from 'classnames';

const Dropdown = ({ className, children, right }) => (
  <div
    className={classnames('dropdown', className, {
      'dropdown-right': right
    })}
  >
    {children}
  </div>
);

export default Dropdown;
