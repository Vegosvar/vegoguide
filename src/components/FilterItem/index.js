import React from 'react';
import { get } from 'lodash';
import classnames from 'classnames';
import Button from 'components/Button';
import propTypes from './prop-types';
import style from './style.module.scss';

const FilterItem = ({ className, option, selected, onChange, ...props }) => {
  const value = get(option, 'value', option);
  const label = get(option, 'label', option);

  const onKeyDownHandler = e => {
    const code = e.which || e.keyCode;
    if (code === 13 || code === 32) {
      // Enter or space
      onChange(value);
    }
  };

  const classes = classnames([
    className,
    style.item,
    {
      'btn-success': selected
    }
  ]);

  return (
    <Button
      className={classes}
      onClick={() => onChange(value)}
      onKeyDown={onKeyDownHandler}
      role="button"
      tabIndex={0}
      {...props}
    >
      {label}
    </Button>
  );
};

FilterItem.propTypes = propTypes;

export default FilterItem;
