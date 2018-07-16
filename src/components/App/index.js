import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import style from './style.module.scss';

const App = ({ routes, store }) => (
  <Provider store={store}>
    <Router>
      <div className={style.app}>
        {routes}
      </div>
    </Router>
  </Provider>
);

export default App;
