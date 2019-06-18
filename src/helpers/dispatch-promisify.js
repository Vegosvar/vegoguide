export default (dispatch, action) => (...args) =>
  new Promise((resolve, reject) =>
    dispatch(action({ ...args, resolve, reject }))
  );
