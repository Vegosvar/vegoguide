import React from 'react';
import { useDispatch } from 'react-redux';
import { getScreenProperties } from 'hooks';
import {
  setScreenHeight,
  setScreenWidth
} from 'store/modules/App/actions';
import App from 'components/App';

const AppContainer = ({ children }) => {
  const dispatch = useDispatch();

  const { height, width } = getScreenProperties();
  dispatch(setScreenHeight(height));
  dispatch(setScreenWidth(width));

  return <App>{children}</App>;
};

export default AppContainer;
