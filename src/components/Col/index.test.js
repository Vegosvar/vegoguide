import React from 'react';
import ReactDOM from 'react-dom';
import Col from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Col />, div);
  ReactDOM.unmountComponentAtNode(div);
});
