const Post = {
  path: '/create',
  component: () =>
    import(/* webpackChunkName: 'views/CreatePost' */
    'views/CreatePost')
};

export default Post;
