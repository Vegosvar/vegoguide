import React from 'react';
import ReactDOM from 'react-dom';
import ImagePreview from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImagePreview />, div);
  ReactDOM.unmountComponentAtNode(div);
});
