import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import store from './store';
import App from './components/App';
import './styles/index.scss';
// import * as serviceWorker from './scripts/serviceWorker';

ReactDOM.render(
  <App store={store}>
    <Routes />
  </App>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

// serviceWorker.unregister();

if (process.env.NODE_ENV !== 'production') {
  // HMR support
  if (module.hot) {
    module.hot.accept(['./components', './routes', './views'], () => {
      /* eslint-disable global-require */
      const NextApp = require('./components/App').default;
      const NewRoutes = require('./routes').default;

      ReactDOM.render(
        <NextApp store={store}>
          <NewRoutes />
        </NextApp>,
        document.getElementById('root'),
      );
    });
  }
}
