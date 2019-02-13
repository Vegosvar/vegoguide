import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { reduxDevTools, router, history } from './middleware';
import generateReducers from './generate-reducers';
import generateSagas from './generate-sagas';
import * as modules from './modules';

// Create the redux-saga middleware, it has to be created here since we need
// access to it after the store has been created
const sagaMiddleware = createSagaMiddleware();

// Generate the reducers and sagas
const reducers = generateReducers(modules);
const rootSaga = generateSagas(modules);

// Set up the middleware
const middleware = compose(
  applyMiddleware(routerMiddleware(history), sagaMiddleware)
);

// Create the store
const store = createStore(
  combineReducers({
    ...reducers,
    router
  }),
  reduxDevTools(middleware)
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
