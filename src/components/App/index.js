import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import propTypes from './prop-types';
import style from './style.module.scss';

const App = ({ children, store }) => (
  <Provider store={store}>
    <Router>
      <div className={style.app}>
        {children}
      </div>
    </Router>
  </Provider>
);

App.propTypes = propTypes;

export default App;
