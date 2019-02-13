import React from 'react';
import classnames from 'classnames';
import { LanguageDropdownMenu } from 'containers';
import style from './style.module.scss';

const Navbar = ({ className }) => (
  <div className={classnames('navbar', style.navbar, className)}>
    <div className={style.pullRight}>
      <LanguageDropdownMenu right />
    </div>
  </div>
);

export default Navbar;
