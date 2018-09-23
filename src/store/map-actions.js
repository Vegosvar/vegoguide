import * as modules from './modules';

export default (namespace, actions) => dispatch =>
  Object.keys(actions).reduce(
    (boundActions, key) => ({
      ...boundActions,
      [key]: (...params) =>
        dispatch(modules[namespace].actions[actions[key]].apply(null, params))
    }),
    {}
  );
