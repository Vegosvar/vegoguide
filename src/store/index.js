import modules from './modules';
import { createStore } from 'redux';

const configureStore = () => {
  const store = createStore(modules);

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
