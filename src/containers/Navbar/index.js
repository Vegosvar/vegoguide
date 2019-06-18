import React from 'react';
import { withRouter } from 'react-router';
import { Navbar } from 'components';
import LanguageDropdownMenu from '../LanguageDropdownMenu';
import style from './style.module.scss';

const NavbarContainer = ({ history, ...args }) => (
  <Navbar {...args}>
    <div className={style.pullRight}>
      <LanguageDropdownMenu right />
    </div>
  </Navbar>
);

export default withRouter(NavbarContainer);
