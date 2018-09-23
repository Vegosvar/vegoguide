import * as modules from './modules';

export default (namespace, thunks) => dispatch =>
  Object.keys(thunks).reduce(
    (boundThunks, key) => ({
      ...boundThunks,
      [key]: (...params) =>
        Promise.resolve(
          modules[namespace].thunks[thunks[key]].apply(null, [
            { dispatch },
            ...params
          ])
        )
    }),
    {}
  );
