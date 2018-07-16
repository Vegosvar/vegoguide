import React from 'react';
import ReactDOM from 'react-dom';
import PageCard from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
