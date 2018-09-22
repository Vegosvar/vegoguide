import { getUrl } from './helpers';

const Pages = {
  create(body) {
    return fetch(getUrl('pages'), {
      body,
      method: 'POST',
    });
  },

  fetch() {
    return fetch(getUrl('pages'));
  },

  patch(id, body) {
    return fetch(`${getUrl('pages')}/${id}`, {
      body,
      method: 'PUT',
    });
  },

  remove(id) {
    return fetch(`${getUrl('pages')}/${id}`, {
      method: 'DELETE',
    });
  },

  update(id, body) {
    return fetch(`${getUrl('pages')}/${id}`, {
      body,
      method: 'PUT',
    });
  },
};

export default Pages;
