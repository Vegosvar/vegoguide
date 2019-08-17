import React, { lazy, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, Transition } from 'react-transition-group';
import anime from 'animejs';
import Loading from 'components/Loading';
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
    // eslint-disable-next-line react/display-name
    component: () => {
      const Component = lazy(component)

      return (
        <Suspense fallback={<Loading />}>
          <Component />
        </Suspense>
      )
    }
  }));

const onEnter = location => el => {
  const direction = location.pathname === '/' ? -1 : 1;

  anime({
    targets: el,
    opacity: [0, 1],
    translateY: [`${100 * direction}%`, 0],
    duration: 600,
    easing: 'cubicBezier(0.4, 0.75, 0.5, 1)',
    zIndex: 1040
  });
};

const onExit = location => el => {
  const direction = location.pathname === '/' ? -1 : 1;

  anime({
    targets: el,
    opacity: 0,
    translateY: [0, `${100 * direction}%`],
    duration: 600,
    easing: 'cubicBezier(0.4, 0.75, 0.5, 1)',
    zIndex: 1000
  });
};

const onExiting = location => el => {
  const body = document.querySelector('body');
  body.style.overflow = 'hidden';
};

const onExited = location => el => {
  const body = document.querySelector('body');
  body.style.overflow = '';
};

// TODO: Each route should handle transitions on its own
const transitionWrapper = ({ location }) => (
  <TransitionGroup className="transition-group">
    <Transition
      key={location.pathname}
      timeout={600}
      onEnter={onEnter(location)}
      onExit={onExit(location)}
      onExiting={onExiting(location)}
      onExited={onExited(location)}
    >
      <div className="transition-group-route-wrapper">
        <Switch location={location}>{getRoutes(asyncRoutes)}</Switch>
      </div>
    </Transition>
  </TransitionGroup>
);

export default withRouter(transitionWrapper);
