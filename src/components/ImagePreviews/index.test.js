import React from 'react';
import ReactDOM from 'react-dom';
import ImagePreviews from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImagePreviews />, div);
  ReactDOM.unmountComponentAtNode(div);
});
