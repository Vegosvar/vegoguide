import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBreakpoint, getScreenProperties } from 'hooks';
import {
  setBreakpoint,
  setScreenHeight,
  setScreenWidth
} from 'store/modules/App/actions';
import App from 'components/App';
import Loading from 'components/Loading';
import propTypes from './prop-types';

const AppContainer = ({ children }) => {
  const dispatch = useDispatch();

  const { height, width } = getScreenProperties();

  useEffect(
    () => {
      dispatch(setScreenHeight(height));
    },
    [dispatch, height]
  );
  useEffect(
    () => {
      dispatch(setScreenWidth(width));
    },
    [dispatch, width]
  );

  const breakpoint = getBreakpoint();
  useEffect(
    () => {
      dispatch(setBreakpoint(breakpoint));
    },
    [dispatch, breakpoint.value, breakpoint.columnSize]
  );

  return (
    <Suspense fallback={<Loading height="100%" />}>
      <App>{children}</App>
    </Suspense>
  );
};

AppContainer.propTypes = propTypes;

export default AppContainer;
