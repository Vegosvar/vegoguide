export default ({ dispatch, getState }) => {
  console.log('store');
  return (next) => {
    next();
  };
};
