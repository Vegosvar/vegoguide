import React from 'react';
import propTypes from './prop-types';
import style from './style.module.scss';

const App = ({ children, store }) => (
  <div className={style.app}>{children}</div>
);

App.propTypes = propTypes;

export default App;
