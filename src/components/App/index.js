import React from 'react';
import { Navbar } from 'containers'; // TODO: This import should not be in a container, instead create a container for App which can use other connected components
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
