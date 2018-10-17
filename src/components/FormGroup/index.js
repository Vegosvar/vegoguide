import React from 'react';
import classnames from 'classnames';
import propTypes from './prop-types';

const FormGroup = ({ className, children, ...props }) => (
  <div className={classnames(['form-group', className])} {...props}>
    {children}
  </div>
);

FormGroup.propTypes = propTypes;

export default FormGroup;
