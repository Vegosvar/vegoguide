import React from 'react';
import { get } from 'lodash';
import { FilterItem } from 'components';
import style from './style.module.scss';
import propTypes from './prop-types';
import defaultProps from './default-props';

const Filter = ({ options, values, onChange }) => {
  const onChangeItem = value => {
    if (values.includes(value)) {
      const newValue = values.filter(filtervalue => filtervalue !== value);
      return onChange(newValue);
    }

    return onChange([...values, value]);
  };

  const isSelected = option => values.includes(get(option, 'value', option));
  const filterOptions = options.map((option, index) => (
    <FilterItem
      key={index}
      option={option}
      selected={isSelected(option)}
      onChange={onChangeItem}
    />
  ));

  return <div className={style.filter}>{filterOptions}</div>;
};

Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;

export default Filter;
