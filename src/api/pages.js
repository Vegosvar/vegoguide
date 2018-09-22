const token = '12345';
const url = "http://localhost:8080/pages";

const Pages = {
  create(body) {
    return fetch(url, {
      body,
      method: "POST"
    });
  },

  fetch() {
    return fetch(url);
  },

  patch(id, body) {
    return fetch(`${url}/${id}`, {
      body,
      method: "PUT"
    });
  },

  remove(id) {
    return fetch(`${url}/${id}`, {
      method: "DELETE"
    });
  },

  update(id, body) {
    return fetch(`${url}/${id}`, {
      body,
      method: "PUT"
    });
  }
};

export default Pages;
