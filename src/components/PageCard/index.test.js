import React from 'react';
import ReactDOM from 'react-dom';
import GridListItem from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GridListItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
