import React from 'react';
import { get } from 'lodash';
import classNames from 'classnames';
import propTypes from './prop-types';
import style from './style.module.scss';

const FilterItem = ({ option, selected, onClick }) => {
  const value = get(option, 'value', option);
  const label = get(option, 'label', option);

  const classes = classNames([
    style.item,
    {
      [style.selected]: selected
    }
  ]);

  const callback = onClick.bind(this, value);

  return (
    <div
      className={classes}
      onClick={callback}
      onKeyDown={callback}
      role="button"
      tabIndex={0}
    >
      <div className={style.label}>{label}</div>
    </div>
  );
};

FilterItem.propTypes = propTypes;

export default FilterItem;
