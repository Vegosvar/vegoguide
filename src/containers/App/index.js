import React from 'react';
import { useDispatch } from 'react-redux';
import { getBreakpoint, getScreenProperties } from 'hooks';
import {
  setBreakpoint,
  setScreenHeight,
  setScreenWidth
} from 'store/modules/App/actions';
import App from 'components/App';

const AppContainer = ({ children }) => {
  const dispatch = useDispatch();

  const { height, width } = getScreenProperties();
  dispatch(setScreenHeight(height));
  dispatch(setScreenWidth(width));

  const breakpoint = getBreakpoint();
  dispatch(setBreakpoint(breakpoint));

  return <App>{children}</App>;
};

export default AppContainer;
