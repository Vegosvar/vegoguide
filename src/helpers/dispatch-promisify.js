export default action => (...args) =>
  new Promise((resolve, reject) => action({ ...args, resolve, reject }));
