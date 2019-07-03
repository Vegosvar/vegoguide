import React from 'react';
import { get } from 'lodash';
import MenuItem from 'components/MenuItem';
import classnames from 'classnames';
import propTypes from './prop-types';
import style from './style.module.scss';

const DropdownMenuItem = ({ className, option, selected, onChange }) => {
  const value = get(option, 'value', option);
  const label = get(option, 'label', option);

  const onClickHandler = onChange.bind(this, value);
  const onKeyDownHandler = e => {
    const code = e.which || e.keyCode;
    if (code === 13 || code === 32) {
      // Enter or space
      onChange(value);
    }
  };

  return (
    <MenuItem
      className={classnames(className, style.dropDownMenuItem, {
        [style.selected]: selected
      })}
      onClick={onClickHandler}
      onKeyDown={onKeyDownHandler}
      role="button"
      tabIndex={0}
    >
      {label}
    </MenuItem>
  );
};

DropdownMenuItem.propTypes = propTypes;

export default DropdownMenuItem;
