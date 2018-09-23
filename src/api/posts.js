import { getOptions, getUrl } from './helpers';

const Posts = {
  create(body) {
    return fetch(getUrl('posts'), {
      body,
      method: 'POST'
    });
  },

  fetch(params, settings) {
    const url = getUrl('posts', params);
    const options = getOptions(settings);

    return fetch(url, options);
  },

  patch(id, body) {
    const url = getUrl('posts', {
      id
    });

    return fetch(url, {
      body,
      method: 'PUT'
    });
  },

  remove(id) {
    const url = getUrl('posts', {
      id
    });

    return fetch(url, {
      method: 'DELETE'
    });
  },

  update(id, body) {
    const url = getUrl('posts', {
      id
    });

    return fetch(url, {
      body,
      method: 'PUT'
    });
  }
};

export default Posts;
