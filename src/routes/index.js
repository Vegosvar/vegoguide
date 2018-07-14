import React from 'react';
import { Route } from 'react-router-dom';
import routes from './routes';

const getRoutes = (routes = []) =>
  routes.reduce(
    (allRoutes, { routes: subRoutes = [], ...route }) => [
      ...allRoutes,
      <Route key={route.path} {...route} />,
      ...getRoutes(subRoutes)
    ],
    []
  );

export default getRoutes(routes);
