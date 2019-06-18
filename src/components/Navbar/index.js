import React from 'react';
import classnames from 'classnames';
import style from './style.module.scss';

const Navbar = ({ children, className }) => (
  <div className={classnames('navbar', style.navbar, className)}>
    {children}
  </div>
);

export default Navbar;
