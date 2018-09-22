import { createStore } from 'redux';
import modules from './modules';
import middleware from './middleware';

const configureStore = () => {
  const store = createStore(modules, middleware);

  // HMR support
  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept(['./modules'], () => {
        store.replaceReducer(modules);
      });
    }
  }

  return store;
};

export default configureStore;
