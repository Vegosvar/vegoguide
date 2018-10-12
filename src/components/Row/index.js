import React from 'react';
import classnames from 'classnames';
import defaultProps from './default-props';
import propTypes from './prop-types';

const Row = ({ children, gapless }) => (
  <div
    className={classnames([
      'columns',
      {
        'col-gapless': gapless
      }
    ])}
  >
    {children}
  </div>
);

Row.defaultProps = defaultProps;
Row.propTypes = propTypes;

export default Row;
