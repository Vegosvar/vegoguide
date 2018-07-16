import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

const App = ({ routes, store }) => (
  <Provider store={store}>
    <Router>
      <div>
        {routes}
      </div>
    </Router>
  </Provider>
);

export default App;
