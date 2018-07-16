import React from 'react';
import ReactDOM from 'react-dom';
import PostCard from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
