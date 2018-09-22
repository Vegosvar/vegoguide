import Loadable from 'react-loadable';
import { Loading } from 'components';
import Home from './Home';
import Post from './Post';

const routes = [Home, Post];

const asyncRoutes = routes.map(({ component, ...route }) => ({
  ...route,
  component: Loadable({
    loader: component,
    loading: Loading,
  }),
}));

export default asyncRoutes;
