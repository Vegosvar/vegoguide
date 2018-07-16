import React from 'react';
import ReactDOM from 'react-dom';
import PageCardGrid from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageCardGrid />, div);
  ReactDOM.unmountComponentAtNode(div);
});
