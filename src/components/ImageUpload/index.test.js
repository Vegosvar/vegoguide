import React from 'react';
import ReactDOM from 'react-dom';
import ImageUpload from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImageUpload />, div);
  ReactDOM.unmountComponentAtNode(div);
});
