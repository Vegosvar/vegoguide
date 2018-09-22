const Home = {
  path: '/',
  exact: true,
  component: () => import(/* webpackChunkName: 'views/Home' */
    'views/Home',
  ),
};

export default Home;
