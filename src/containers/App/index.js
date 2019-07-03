import React, { Suspense } from 'react';
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
  dispatch(setScreenHeight(height));
  dispatch(setScreenWidth(width));

  const breakpoint = getBreakpoint();
  dispatch(setBreakpoint(breakpoint));

  return (
    <Suspense fallback={<Loading height="100%" />}>
      <App>{children}</App>
    </Suspense>
  );
};

AppContainer.propTypes = propTypes

export default AppContainer;
