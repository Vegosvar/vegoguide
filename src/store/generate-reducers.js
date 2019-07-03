import { cloneDeep } from 'lodash';

export default modules =>
  Object.keys(modules).reduce((generatedReducers, key) => {
    const { reducers = {}, initialState } = modules[key];

    return {
      ...generatedReducers,
      [key]: (state = initialState, { type, ...action }) => {
        if (type in reducers) {
          return reducers[type](cloneDeep(state), { ...action });
        }

        return state;
      }
    };
  }, {});
