import { getOptions, getUrl } from './helpers';

const basePath = 'categories';

export default {
  create(body) {
    return fetch(getUrl(basePath), {
      body,
      method: 'POST'
    });
  },

  fetch(params, settings) {
    const url = getUrl(basePath, params);
    const options = getOptions(settings);

    return fetch(url, options);
  },

  patch(id, body) {
    const url = getUrl(basePath, {
      id
    });

    return fetch(url, {
      body,
      method: 'PUT'
    });
  },

  remove(id) {
    const url = getUrl(basePath, {
      id
    });

    return fetch(url, {
      method: 'DELETE'
    });
  },

  update(id, body) {
    const url = getUrl(basePath, {
      id
    });

    return fetch(url, {
      body,
      method: 'PUT'
    });
  }
};
