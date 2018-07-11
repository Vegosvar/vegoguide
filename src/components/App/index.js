import React from 'react';
import style from './style.module.scss';

const App = () => (
  <div className={style.wrapper}>
    <header className={style.header}>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
