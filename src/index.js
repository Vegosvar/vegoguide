import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import ReactDOM from 'react-dom';
import Routes from 'routes';
import store from 'store';
import history from 'store/middleware/history';
import i18n from './i18n';
import App from 'components/App';
import './styles/index.scss';
// import * as serviceWorker from './scripts/serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <ConnectedRouter history={history}>
        <App>
          <Routes />
        </App>
      </ConnectedRouter>
    </I18nextProvider>
  </Provider>,
  document.getElementById('root')
);

if (process.env.NODE_ENV !== 'production') {
  // HMR support
  if (module.hot) {
    module.hot.accept(['./components', './routes', './views', './i18n'], () => {
      /* eslint-disable global-require */
      const NextApp = require('./components/App').default;
      const NewRoutes = require('./routes').default;
      const NewStore = require('./store').default;
      const NewI18n = require('./i18n').default;
      const NewHistory = require('./store/middleware/history').default;

      ReactDOM.render(
        <Provider store={NewStore}>
          <I18nextProvider i18n={NewI18n}>
            <ConnectedRouter history={NewHistory}>
              <NextApp>
                <NewRoutes />
              </NextApp>
            </ConnectedRouter>
          </I18nextProvider>
        </Provider>,
        document.getElementById('root')
      );
    });
  }
}
