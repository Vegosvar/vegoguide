import React from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Loading } from 'components';
import * as routes from './routes';

const getRoutes = (routes = []) =>
  routes.reduce(
    (allRoutes, { routes: subRoutes = [], ...route }) => [
      ...allRoutes,
      <Route key={route.path} {...route} />,
      ...getRoutes(subRoutes)
    ],
    []
  );

const asyncRoutes = Object.keys(routes)
  .map(key => routes[key])
  .map(({ component, ...route }) => ({
    ...route,
    component: Loadable({
      loader: component,
      loading: Loading
    })
  }));

export default getRoutes(asyncRoutes);
