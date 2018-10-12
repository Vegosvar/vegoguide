import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Loadable from 'react-loadable';
import { Loading } from 'components';
import * as routes from './routes';

const getRoutes = (routesConfig = []) =>
  routesConfig.reduce(
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

const transitionWrapper = ({ location }) => (
  <TransitionGroup className="transition-group">
    <CSSTransition
      key={location.key || location.pathname}
      timeout={{ enter: 300, exit: 300 }}
      classNames="page"
    >
      <div className="route">
        <Switch location={location}>{getRoutes(asyncRoutes)}</Switch>
      </div>
    </CSSTransition>
  </TransitionGroup>
);

export default withRouter(transitionWrapper);
