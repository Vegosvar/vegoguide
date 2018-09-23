import * as modules from './modules';

export default (namespace, actions) => dispatch =>
  Object.keys(actions).reduce(
    (boundActions, key) => ({
      ...boundActions,
      [key]: (...params) =>
        Promise.resolve(
          modules[namespace].actions[actions[key]].apply(null, params)
        ).then(dispatch)
    }),
    {}
  );
