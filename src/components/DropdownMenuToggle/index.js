import React from 'react';
import classnames from 'classnames';
import Button from 'components/Button';

const DropdownMenuToggle = ({ className, children, ...props }) => (
  <Button
    className={classnames(['dropdown-toggle', className])}
    role="button"
    tabIndex={0}
    {...props}
  >
    {children}
  </Button>
);

export default DropdownMenuToggle;
