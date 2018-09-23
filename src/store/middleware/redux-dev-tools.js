import { compose } from 'redux';
/* eslint-disable no-underscore-dangle */
export default (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose);
