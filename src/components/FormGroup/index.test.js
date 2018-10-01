import React from 'react';
import ReactDOM from 'react-dom';
import FormGroup from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormGroup />, div);
  ReactDOM.unmountComponentAtNode(div);
});
