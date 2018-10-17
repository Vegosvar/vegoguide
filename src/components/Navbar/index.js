import React from 'react';
import classnames from 'classnames';
import { LanguageDropdownMenu } from 'containers';
import style from './style.module.scss';

export default ({ className }) => (
  <div className={classnames('navbar', style.navbar, className)}>
    <LanguageDropdownMenu />
  </div>
);
