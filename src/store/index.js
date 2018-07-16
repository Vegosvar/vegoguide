import modules from './modules';
import { createStore } from 'redux';

const reduxDevTools =
  process.env.NODE_ENV === 'development' &&
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'function'
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined;

const configureStore = () => {
  const store = createStore(modules, reduxDevTools);

  // HMR support
  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./modules', () => {
        store.replaceReducer(modules);
      });
    }
  }

  return store;
};

export default configureStore;
