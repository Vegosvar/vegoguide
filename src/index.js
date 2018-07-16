import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './scripts/serviceWorker';
import routes from './routes';
import configureStore from './store';
import App from './components/App';
import './styles/index.scss';

const store = configureStore();

ReactDOM.render(
  <App routes={routes} store={store} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

if (process.env.NODE_ENV !== 'production') {
  // HMR support
  if (module.hot) {
    module.hot.accept('./components/App', () => {
      ReactDOM.render(<App />, document.getElementById('root'));
    });
  }
}
