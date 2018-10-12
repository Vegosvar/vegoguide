import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as modules from './modules';
import { reduxDevTools } from './middleware';
import generateReducers from './generate-reducers';
import generateSagas from './generate-sagas';

// Create the redux-saga middleware, it has to be created here since we need
// access to it after the store has been created
const sagaMiddleware = createSagaMiddleware();

// Generate the reducers and sagas
const reducers = generateReducers(modules);
const rootSaga = generateSagas(modules);

// Create the store
const store = createStore(
  combineReducers(reducers),
  reduxDevTools(applyMiddleware(sagaMiddleware))
);

// Invoke sagas
sagaMiddleware.run(rootSaga);

// HMR support
if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept(['./modules'], () => {
      store.replaceReducer(modules);
    });
  }
}

export default store;
