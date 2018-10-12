import React from 'react';
import { get } from 'lodash';
import classNames from 'classnames';
import propTypes from './prop-types';
import style from './style.module.scss';

const FilterItem = ({ option, selected, onChange }) => {
  const value = get(option, 'value', option);
  const label = get(option, 'label', option);

  const classes = classNames([
    style.item,
    {
      [style.selected]: selected
    }
  ]);

  const onClickHandler = onChange.bind(this, value);
  const onKeyDownHandler = e => {
    const code = e.which || e.keyCode;
    if (code === 13 || code === 32) { // Enter or space
      onChange(value);
    }
  };

  return (
    <div
      className={classes}
      onClick={onClickHandler}
      onKeyDown={onKeyDownHandler}
      role="button"
      tabIndex={0}
    >
      {label}
    </div>
  );
};

FilterItem.propTypes = propTypes;

export default FilterItem;
