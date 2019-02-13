import React from 'react';
import { Navbar } from 'components';
import propTypes from './prop-types';
import style from './style.module.scss';

const App = ({ children }) => (
  <div className={style.app}>
    <Navbar key="navbar" />
    {children}
  </div>
);

App.propTypes = propTypes;

export default App;
