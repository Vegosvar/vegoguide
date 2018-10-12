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

const getTransitionClassNames = location => {
  if (location.pathname === '/') {
    return {
      enter: 'slide-in-right-enter',
      enterActive: 'slide-in-right-enter-active',
      exit: 'slide-in-left-exit',
      exitActive: 'slide-in-left-exit-active'
    };
  }

  return {
    enter: 'slide-in-left-enter',
    enterActive: 'slide-in-left-enter-active',
    exit: 'slide-in-right-exit',
    exitActive: 'slide-in-right-exit-active'
  };
};

const transitionWrapper = ({ location }) => (
  <TransitionGroup className="transition-group">
    <CSSTransition
      key={location.key || location.pathname}
      timeout={{ enter: 750, exit: 750 }}
      classNames={getTransitionClassNames(location)}
    >
      <div className="transition-group-route-wrapper">
        <Switch location={location}>{getRoutes(asyncRoutes)}</Switch>
      </div>
    </CSSTransition>
  </TransitionGroup>
);

export default withRouter(transitionWrapper);
