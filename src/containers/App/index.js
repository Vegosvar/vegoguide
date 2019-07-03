import React, { Suspense, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBreakpoint, getScreenProperties } from 'hooks';
import {
  setBreakpoint,
  setScreenHeight,
  setScreenWidth
} from 'store/modules/App/actions';
import { isEqual } from 'lodash';
import App from 'components/App';
import Loading from 'components/Loading';
import propTypes from './prop-types';

const AppContainer = ({ children }) => {
  const dispatch = useDispatch();
  const currentHeight = useSelector(state => state.App.screen.height);
  const currentWidth = useSelector(state => state.App.screen.width);

  const { height, width } = getScreenProperties();

  const updateHeight = useCallback(() => dispatch(setScreenHeight(height)), [
    dispatch,
    height
  ]);
  const updateWidth = useCallback(() => dispatch(setScreenWidth(width)), [
    dispatch,
    width
  ]);

  if (currentHeight !== height) {
    updateHeight(height);
  }

  if (currentWidth !== width) {
    updateWidth(width);
  }

  const breakpoint = getBreakpoint();
  const currentBreakpoint = useSelector(state => state.App.breakpoint);
  const updateBreakPoint = useCallback(
    () => dispatch(setBreakpoint(breakpoint)),
    [dispatch, breakpoint]
  );

  if (!isEqual(currentBreakpoint, breakpoint)) {
    updateBreakPoint();
  }

  return (
    <Suspense fallback={<Loading height="100%" />}>
      <App>{children}</App>
    </Suspense>
  );
};

AppContainer.propTypes = propTypes;

export default AppContainer;
