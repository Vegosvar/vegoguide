import { combineReducers, createStore } from 'redux';
import * as modules from './modules';
import middleware from './middleware';
import generateReducers from './generate-reducers';

export default () => {
  const reducers = generateReducers(modules);
  const store = createStore(combineReducers(reducers), middleware);

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
