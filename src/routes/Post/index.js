const Post = {
  path: '/:url',
  component: () =>
    import(/* webpackChunkName: 'views/Post' */
    'views/Post')
};

export default Post;
