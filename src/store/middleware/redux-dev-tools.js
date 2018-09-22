/* eslint-disable no-underscore-dangle */
export default (process.env.NODE_ENV === 'development'
&& typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'function'
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : undefined);
